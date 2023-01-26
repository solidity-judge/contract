import { RpcSigner } from './type';
import { Gate, Problem, UserGateFactory } from '../typechain-types';
import { Contract, ethers } from 'ethers';
import DEPLOYMENT from '../deployment.json';
import { IGateAbi, IProblemAbi, IUserGateFactoryAbi } from './abis';
export type ProblemConfig = {
    inputFormat: string[];
    outputFormat: string[];
    problem: string;
};

export class ProblemSDK {
    readonly gateFactory: UserGateFactory;
    readonly problem: Problem;
    constructor(readonly problemConfig: ProblemConfig, readonly userAddr: string, readonly signer: RpcSigner) {
        this.gateFactory = new Contract(DEPLOYMENT.gateFactory, IUserGateFactoryAbi, signer) as UserGateFactory;
        this.problem = new Contract(problemConfig.problem, IProblemAbi, signer) as Problem;
    }

    async deployAndRunExample(inputs: string[], bytecode: string): Promise<string[]> {
        const userGate = await this.gateFactory.callStatic.gates(this.userAddr);
        const gate = new Contract(userGate, IGateAbi, this.signer) as Gate;

        const encodedInput = ethers.utils.defaultAbiCoder.encode(this.problemConfig.inputFormat, inputs);

        const encodedOutput = await gate.callStatic.deployAndRun(bytecode, encodedInput);
        const decodedOutput = ethers.utils.defaultAbiCoder.decode(this.problemConfig.outputFormat, encodedOutput);
        return decodedOutput.map((x: any) => {
            if (Array.isArray(x)) {
                return x.map((y: any) => y.toString()).join(',');
            }
            return x.toString();
        });
    }

    async submitSolution(bytecode: string) {
        const userGate = await this.gateFactory.callStatic.gates(this.userAddr);
        const gate = new Contract(userGate, IGateAbi, this.signer) as Gate;
        return gate.deployAndSubmit(bytecode, this.problem.address);
    }
}
