import { BigNumber, BigNumberish, CallOverrides, Contract, ethers } from 'ethers';

export type RpcSigner = ethers.Signer;

export type SubmissionResultRaw = {
    contestant: string;
    version: BigNumber;
    point: BigNumber;
    verdicts: number[];
};

export enum TestCaseVerdict {
    Accepted = 0,
    WrongAnswer = 1,
    Revert = 2,
}

export type TestCase = {
    input: string[];
    gasLimit: number;
};

export type SubmissionResult = {
    contestant: string;
    version: number;
    point: number;
    verdicts: TestCaseVerdict[];
    tests: TestCase[];
};
