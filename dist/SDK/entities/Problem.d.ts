import { RpcSigner, SubmissionResult, TestCase } from '../type';
import { Problem, UserGateFactory } from '../../typechain-types';
import { BigNumberish, CallOverrides, ethers } from 'ethers';
import { TransactionReceipt } from '@ethersproject/abstract-provider';
export type ProblemConfig = {
    inputFormat: string[];
    outputFormat: string[];
    address: string;
};
export declare class ProblemSDK {
    readonly problemConfig: ProblemConfig;
    readonly userAddr: string;
    readonly signer: RpcSigner;
    readonly gateFactory: UserGateFactory;
    readonly problem: Problem;
    constructor(problemConfig: ProblemConfig, userAddr: string, signer: RpcSigner);
    addTest(inputs: BigNumberish[], outputs: BigNumberish[], gasLimit: number): Promise<ethers.ContractTransaction>;
    deployAndRunExample(inputs: string[], bytecode: string): Promise<string[]>;
    submitSolution(bytecode: string): Promise<ethers.ContractTransaction>;
    getTests(overrides?: CallOverrides): Promise<TestCase[]>;
    parseSubmissionVerdict(tx: string | TransactionReceipt): Promise<SubmissionResult>;
    private decodeData;
    private encodeData;
}
