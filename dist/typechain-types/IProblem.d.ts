import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IProblemInterface extends utils.Interface {
    contractName: "IProblem";
    functions: {
        "gateUpdateAndRunSolution(address)": FunctionFragment;
        "getContestantInfo(address)": FunctionFragment;
        "runSolution(address)": FunctionFragment;
        "updateAndRunSolution(address)": FunctionFragment;
        "updateSolution(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "gateUpdateAndRunSolution", values: [string]): string;
    encodeFunctionData(functionFragment: "getContestantInfo", values: [string]): string;
    encodeFunctionData(functionFragment: "runSolution", values: [string]): string;
    encodeFunctionData(functionFragment: "updateAndRunSolution", values: [string]): string;
    encodeFunctionData(functionFragment: "updateSolution", values: [string]): string;
    decodeFunctionResult(functionFragment: "gateUpdateAndRunSolution", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getContestantInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "runSolution", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateAndRunSolution", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateSolution", data: BytesLike): Result;
    events: {
        "RunSolution(address,uint256,uint256,uint8[])": EventFragment;
        "UpdateSolution(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "RunSolution"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdateSolution"): EventFragment;
}
export type RunSolutionEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    number[]
], {
    contestant: string;
    version: BigNumber;
    point: BigNumber;
    verdicts: number[];
}>;
export type RunSolutionEventFilter = TypedEventFilter<RunSolutionEvent>;
export type UpdateSolutionEvent = TypedEvent<[
    string,
    string
], {
    contestant: string;
    solution: string;
}>;
export type UpdateSolutionEventFilter = TypedEventFilter<UpdateSolutionEvent>;
export interface IProblem extends BaseContract {
    contractName: "IProblem";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IProblemInterface;
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
        gateUpdateAndRunSolution(solution: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getContestantInfo(contestant: string, overrides?: CallOverrides): Promise<[
            string,
            number,
            boolean
        ] & {
            solution: string;
            point: number;
            isPointUpToDate: boolean;
        }>;
        runSolution(contestant: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateAndRunSolution(solution: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateSolution(solution: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    gateUpdateAndRunSolution(solution: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getContestantInfo(contestant: string, overrides?: CallOverrides): Promise<[
        string,
        number,
        boolean
    ] & {
        solution: string;
        point: number;
        isPointUpToDate: boolean;
    }>;
    runSolution(contestant: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateAndRunSolution(solution: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateSolution(solution: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        gateUpdateAndRunSolution(solution: string, overrides?: CallOverrides): Promise<void>;
        getContestantInfo(contestant: string, overrides?: CallOverrides): Promise<[
            string,
            number,
            boolean
        ] & {
            solution: string;
            point: number;
            isPointUpToDate: boolean;
        }>;
        runSolution(contestant: string, overrides?: CallOverrides): Promise<void>;
        updateAndRunSolution(solution: string, overrides?: CallOverrides): Promise<void>;
        updateSolution(solution: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "RunSolution(address,uint256,uint256,uint8[])"(contestant?: null, version?: null, point?: null, verdicts?: null): RunSolutionEventFilter;
        RunSolution(contestant?: null, version?: null, point?: null, verdicts?: null): RunSolutionEventFilter;
        "UpdateSolution(address,address)"(contestant?: null, solution?: null): UpdateSolutionEventFilter;
        UpdateSolution(contestant?: null, solution?: null): UpdateSolutionEventFilter;
    };
    estimateGas: {
        gateUpdateAndRunSolution(solution: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getContestantInfo(contestant: string, overrides?: CallOverrides): Promise<BigNumber>;
        runSolution(contestant: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateAndRunSolution(solution: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateSolution(solution: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        gateUpdateAndRunSolution(solution: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getContestantInfo(contestant: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        runSolution(contestant: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateAndRunSolution(solution: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateSolution(solution: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
