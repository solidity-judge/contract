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
    replaceTests(tests: (TestCase & {
        output: string[];
    })[]): Promise<ethers.ContractTransaction>;
    setDeadline(deadline: Date): Promise<ethers.ContractTransaction>;
    deployAndRunExample(inputs: string[], bytecode: string): Promise<{
        output: string[];
        gasUsed: number;
    }>;
    declareSolutionHash(hashedSolution: string): Promise<ethers.ContractTransaction>;
    getContestantInfo(): Promise<[string, string, string, number, number] & {
        solutionHash: string;
        solutionPreDeadline: string;
        solutionPosDeadline: string;
        pointPreDeadline: number;
        pointPosDeadline: number;
    }>;
    getDeadline(): Promise<Date>;
    submitAndRunSolution(bytecode: string, isPreDeadlineSolution?: boolean): Promise<ethers.ContractTransaction>;
    getTests(overrides?: CallOverrides): Promise<TestCase[]>;
    getTxReceipt(tx: string | TransactionReceipt): Promise<TransactionReceipt>;
    parseSubmissionVerdict(tx: string | TransactionReceipt): Promise<SubmissionResult>;
    private decodeData;
    private encodeData;
}
