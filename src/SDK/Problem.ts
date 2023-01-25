import { RpcSigner } from './type';
import {
    Gate,
    Gate__factory,
    Problem,
    Problem__factory,
    UserGateFactory,
    UserGateFactory__factory,
} from '../../typechain-types';
import { Contract, ethers } from 'ethers';
import DEPLOYMENT from '../../deployment.json';
export type ProblemConfig = {
    inputFormat: string[];
    outputFormat: string[];
    problem: string;
};

export class ProblemSDK {
    readonly gateFactory: UserGateFactory;
    readonly problem: Problem;
    constructor(readonly problemConfig: ProblemConfig, readonly userAddr: string, readonly signer: RpcSigner) {
        this.gateFactory = new Contract(
            DEPLOYMENT.gateFactory,
            UserGateFactory__factory.abi,
            signer
        ) as UserGateFactory;
        this.problem = new Contract(problemConfig.problem, Problem__factory.abi, signer) as Problem;
    }

    async deployAndRunExample(inputs: string[], bytecode: string): Promise<string[]> {
        const userGate = await this.gateFactory.callStatic.gates(this.userAddr);
        const gate = new Contract(userGate, Gate__factory.abi, this.signer) as Gate;

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
}
