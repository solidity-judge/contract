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

    async addTest(inputs: BigNumberish[], outputs: BigNumberish[], gasLimit: number) {
        const encodedInput = this.encodeData(inputs, this.problemConfig.inputFormat);
        const encodedOutput = ethers.utils.keccak256(this.encodeData(outputs, this.problemConfig.outputFormat));

        return this.problem.addTest({
            input: encodedInput,
            output: encodedOutput,
            gasLimit: gasLimit,
        });
    }

    async deployAndRunExample(inputs: string[], bytecode: string): Promise<string[]> {
        const userGate = await this.gateFactory.callStatic.gates(this.userAddr);
        const gate = new Contract(userGate, IGateAbi, this.signer) as Gate;

        const encodedInput = this.encodeData(inputs, this.problemConfig.inputFormat);

        const encodedOutput = await gate.callStatic.deployAndRun(bytecode, encodedInput);
        return this.decodeData(encodedOutput, this.problemConfig.outputFormat);
    }

    async submitSolution(bytecode: string) {
        const userGate = await this.gateFactory.callStatic.gates(this.userAddr);
        const gate = new Contract(userGate, IGateAbi, this.signer) as Gate;
        return gate.deployAndSubmit(bytecode, this.problem.address);
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
                    version: raw.version.toNumber(),
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
