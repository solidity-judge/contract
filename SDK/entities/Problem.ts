import { RpcSigner, SubmissionResult, SubmissionResultRaw, TestCase } from '../type';
import { Gate, Problem, UserGateFactory } from '../../typechain-types';
import { BigNumber, BigNumberish, CallOverrides, Contract, ethers } from 'ethers';
import DEPLOYMENT from '../../deployment.json';
import { IGateAbi, IProblemAbi, IUserGateFactoryAbi } from '../abis';
import { isSameAddress } from '../helper';
import { TransactionReceipt } from '@ethersproject/abstract-provider';

export type ProblemConfig = {
    inputFormat: string[];
    outputFormat: string[];
    address: string;
};

export class ProblemSDK {
    readonly gateFactory: UserGateFactory;
    readonly problem: Problem;
    constructor(readonly problemConfig: ProblemConfig, readonly userAddr: string, readonly signer: RpcSigner) {
        this.gateFactory = new Contract(DEPLOYMENT.gateFactory, IUserGateFactoryAbi, signer) as UserGateFactory;
        this.problem = new Contract(problemConfig.address, IProblemAbi, signer) as Problem;
    }

    /**
     * @note For admin only
     */
    async addTest(inputs: BigNumberish[], outputs: BigNumberish[], gasLimit: number) {
        const encodedInput = this.encodeData(inputs, this.problemConfig.inputFormat);
        const encodedOutput = ethers.utils.keccak256(this.encodeData(outputs, this.problemConfig.outputFormat));

        return this.problem.addTest({
            input: encodedInput,
            output: encodedOutput,
            gasLimit: gasLimit,
        });
    }
    async replaceTests(tests: (TestCase & { output: string[] })[]) {
        const encodedTests = tests.map((test) => ({
            gasLimit: test.gasLimit,
            input: this.encodeData(test.input, this.problemConfig.inputFormat),
            output: ethers.utils.keccak256(this.encodeData(test.output, this.problemConfig.outputFormat)),
        }));
        return this.problem.replaceTests(encodedTests);
    }

    /**
     * @note For admin only
     */
    async setDeadline(deadline: Date) {
        return this.problem.setDeadline(Math.trunc(deadline.getTime() / 1000));
    }

    /**
     * @note For participants to use this function to run example
     */
    async deployAndRunExample(inputs: string[], bytecode: string) {
        const userGate = await this.gateFactory.callStatic.gates(this.userAddr);
        const gate = new Contract(userGate, IGateAbi, this.signer) as Gate;

        const encodedInput = this.encodeData(inputs, this.problemConfig.inputFormat);

        const { gasUsed, output: encodedOutput } = await gate.callStatic.deployAndRun(bytecode, encodedInput);
        const output = this.decodeData(encodedOutput, this.problemConfig.outputFormat);
        return {
            output,
            gasUsed: gasUsed.toNumber(),
        };
    }

    async declareSolutionHash(hashedSolution: string) {
        return this.problem.declareSolutionHash(hashedSolution);
    }

    async getContestantInfo() {
        return this.problem.callStatic.getContestantInfo(this.userAddr);
    }

    async getDeadline(): Promise<Date> {
        return this.problem.callStatic.deadline().then((x) => new Date(x.toNumber() * 1000));
    }

    /**
     * Write function to submit solution (deploy a new contract)
     */
    async submitAndRunSolution(bytecode: string, isPreDeadlineSolution = false) {
        return this.problem.submitAndRunSolution(this.userAddr, isPreDeadlineSolution, bytecode, {
            gasLimit: 8_000_000,
        });
    }

    async getTests(overrides: CallOverrides = {}): Promise<TestCase[]> {
        const testCount = (await this.problem.callStatic.testLength(overrides)).toNumber();
        const tests = [];
        for (let i = 0; i < testCount; i++) {
            const test = await this.problem.callStatic.tests(i, overrides);
            tests.push({
                input: this.decodeData(test.input, this.problemConfig.inputFormat),
                gasLimit: test.gasLimit.toNumber(),
            });
        }
        return tests;
    }

    async parseSubmissionVerdict(tx: string | TransactionReceipt): Promise<SubmissionResult> {
        const txReceipt = typeof tx === 'string' ? await this.signer.provider!.getTransactionReceipt(tx) : tx;
        const filter = this.problem.filters.RunSolution();
        let runSolutionEvents = txReceipt.logs
            .filter((log) => isSameAddress(log.topics[0], filter.topics![0] as string))
            .map((log) => {
                const raw: SubmissionResultRaw = this.problem.interface.parseLog(log)['args'] as any;
                const result: Omit<SubmissionResult, 'tests'> = {
                    contestant: raw.contestant,
                    version: 0,
                    isPreDeadlineSolution: raw.isPreDeadlineSolution,
                    point: raw.point.toNumber() / 100,
                    verdicts: raw.verdicts,
                };
                return result;
            });

        if (runSolutionEvents.length === 0) {
            throw new Error('No RunSolution event found');
        }

        return {
            ...runSolutionEvents[0],
            tests: await this.getTests({ blockTag: txReceipt.blockNumber }),
        };
    }

    private decodeData(data: string, format: string[]): string[] {
        const decoded = ethers.utils.defaultAbiCoder.decode(format, data);
        return decoded.map((x: any) => {
            if (Array.isArray(x)) {
                return x.map((y: any) => y.toString()).join(',');
            }
            return x.toString();
        });
    }

    private encodeData(data: BigNumberish[], format: string[]): string {
        return ethers.utils.defaultAbiCoder.encode(format, data);
    }
}
