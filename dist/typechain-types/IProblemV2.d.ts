import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IProblemV2Interface extends utils.Interface {
    contractName: "IProblemV2";
    functions: {
        "declareSolutionHash(bytes32)": FunctionFragment;
        "getContestantInfo(address)": FunctionFragment;
        "submit(address,bool,bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "declareSolutionHash", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getContestantInfo", values: [string]): string;
    encodeFunctionData(functionFragment: "submit", values: [string, boolean, BytesLike]): string;
    decodeFunctionResult(functionFragment: "declareSolutionHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getContestantInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submit", data: BytesLike): Result;
    events: {
        "DeadlineUpdated(uint256)": EventFragment;
        "DeclareSolutionHash(address,bytes32)": EventFragment;
        "RunSolution(address,uint256,bool,uint8[])": EventFragment;
        "UpdateSolution(address,bool,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DeadlineUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DeclareSolutionHash"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RunSolution"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateSolution"): EventFragment;
}
export type DeadlineUpdatedEvent = TypedEvent<[
    BigNumber
], {
    deadline: BigNumber;
}>;
export type DeadlineUpdatedEventFilter = TypedEventFilter<DeadlineUpdatedEvent>;
export type DeclareSolutionHashEvent = TypedEvent<[
    string,
    string
], {
    contestant: string;
    solutionHash: string;
}>;
export type DeclareSolutionHashEventFilter = TypedEventFilter<DeclareSolutionHashEvent>;
export type RunSolutionEvent = TypedEvent<[
    string,
    BigNumber,
    boolean,
    number[]
], {
    contestant: string;
    point: BigNumber;
    isPreDeadlineSolution: boolean;
    verdicts: number[];
}>;
export type RunSolutionEventFilter = TypedEventFilter<RunSolutionEvent>;
export type UpdateSolutionEvent = TypedEvent<[
    string,
    boolean,
    string
], {
    contestant: string;
    isPreDeadlineSolution: boolean;
    solution: string;
}>;
export type UpdateSolutionEventFilter = TypedEventFilter<UpdateSolutionEvent>;
export interface IProblemV2 extends BaseContract {
    contractName: "IProblemV2";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IProblemV2Interface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        declareSolutionHash(solutionHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getContestantInfo(contestant: string, overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            number,
            number
        ] & {
            solutionHash: string;
            solutionPreDeadline: string;
            solutionPosDeadline: string;
            pointPreDeadline: number;
            pointPosDeadline: number;
        }>;
        submit(user: string, isPreDeadlineSolution: boolean, solutionBytecode: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    declareSolutionHash(solutionHash: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getContestantInfo(contestant: string, overrides?: CallOverrides): Promise<[
        string,
        string,
        string,
        number,
        number
    ] & {
        solutionHash: string;
        solutionPreDeadline: string;
        solutionPosDeadline: string;
        pointPreDeadline: number;
        pointPosDeadline: number;
    }>;
    submit(user: string, isPreDeadlineSolution: boolean, solutionBytecode: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        declareSolutionHash(solutionHash: BytesLike, overrides?: CallOverrides): Promise<void>;
        getContestantInfo(contestant: string, overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            number,
            number
        ] & {
            solutionHash: string;
            solutionPreDeadline: string;
            solutionPosDeadline: string;
            pointPreDeadline: number;
            pointPosDeadline: number;
        }>;
        submit(user: string, isPreDeadlineSolution: boolean, solutionBytecode: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "DeadlineUpdated(uint256)"(deadline?: null): DeadlineUpdatedEventFilter;
        DeadlineUpdated(deadline?: null): DeadlineUpdatedEventFilter;
        "DeclareSolutionHash(address,bytes32)"(contestant?: null, solutionHash?: null): DeclareSolutionHashEventFilter;
        DeclareSolutionHash(contestant?: null, solutionHash?: null): DeclareSolutionHashEventFilter;
        "RunSolution(address,uint256,bool,uint8[])"(contestant?: null, point?: null, isPreDeadlineSolution?: null, verdicts?: null): RunSolutionEventFilter;
        RunSolution(contestant?: null, point?: null, isPreDeadlineSolution?: null, verdicts?: null): RunSolutionEventFilter;
        "UpdateSolution(address,bool,address)"(contestant?: null, isPreDeadlineSolution?: null, solution?: null): UpdateSolutionEventFilter;
        UpdateSolution(contestant?: null, isPreDeadlineSolution?: null, solution?: null): UpdateSolutionEventFilter;
    };
    estimateGas: {
        declareSolutionHash(solutionHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getContestantInfo(contestant: string, overrides?: CallOverrides): Promise<BigNumber>;
        submit(user: string, isPreDeadlineSolution: boolean, solutionBytecode: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        declareSolutionHash(solutionHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getContestantInfo(contestant: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        submit(user: string, isPreDeadlineSolution: boolean, solutionBytecode: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
