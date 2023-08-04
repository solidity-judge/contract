import { BigNumber, ethers } from 'ethers';
export type RpcSigner = ethers.Signer;
export type SubmissionResultRaw = {
    contestant: string;
    isPreDeadlineSolution: boolean;
    point: BigNumber;
    verdicts: number[];
};
export declare enum TestCaseVerdict {
    Accepted = 0,
    WrongAnswer = 1,
    Revert = 2
}
export type TestCase = {
    input: string[];
    gasLimit: number;
};
export type SubmissionResult = {
    contestant: string;
    version: number;
    isPreDeadlineSolution: boolean;
    point: number;
    verdicts: TestCaseVerdict[];
    tests: TestCase[];
};
