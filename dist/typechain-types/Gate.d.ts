import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface GateInterface extends utils.Interface {
    contractName: "Gate";
    functions: {
        "deployAndRun(bytes,bytes)": FunctionFragment;
        "initialize(address,string)": FunctionFragment;
        "nonce()": FunctionFragment;
        "solutionId(address)": FunctionFragment;
        "user()": FunctionFragment;
        "username()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "deployAndRun", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string]): string;
    encodeFunctionData(functionFragment: "nonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "solutionId", values: [string]): string;
    encodeFunctionData(functionFragment: "user", values?: undefined): string;
    encodeFunctionData(functionFragment: "username", values?: undefined): string;
    decodeFunctionResult(functionFragment: "deployAndRun", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "solutionId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "user", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "username", data: BytesLike): Result;
    events: {
        "Deployment(uint256,address)": EventFragment;
        "Initialized(uint8)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Deployment"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}
export type DeploymentEvent = TypedEvent<[
    BigNumber,
    string
], {
    id: BigNumber;
    solution: string;
}>;
export type DeploymentEventFilter = TypedEventFilter<DeploymentEvent>;
export type InitializedEvent = TypedEvent<[number], {
    version: number;
}>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface Gate extends BaseContract {
    contractName: "Gate";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: GateInterface;
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
        deployAndRun(bytecode: BytesLike, input: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initialize(_user: string, _username: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        nonce(overrides?: CallOverrides): Promise<[BigNumber]>;
        solutionId(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        user(overrides?: CallOverrides): Promise<[string]>;
        username(overrides?: CallOverrides): Promise<[string]>;
    };
    deployAndRun(bytecode: BytesLike, input: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initialize(_user: string, _username: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    nonce(overrides?: CallOverrides): Promise<BigNumber>;
    solutionId(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    user(overrides?: CallOverrides): Promise<string>;
    username(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        deployAndRun(bytecode: BytesLike, input: BytesLike, overrides?: CallOverrides): Promise<[string, BigNumber] & {
            output: string;
            gasUsed: BigNumber;
        }>;
        initialize(_user: string, _username: string, overrides?: CallOverrides): Promise<void>;
        nonce(overrides?: CallOverrides): Promise<BigNumber>;
        solutionId(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        user(overrides?: CallOverrides): Promise<string>;
        username(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "Deployment(uint256,address)"(id?: null, solution?: null): DeploymentEventFilter;
        Deployment(id?: null, solution?: null): DeploymentEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
    };
    estimateGas: {
        deployAndRun(bytecode: BytesLike, input: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initialize(_user: string, _username: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        nonce(overrides?: CallOverrides): Promise<BigNumber>;
        solutionId(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        user(overrides?: CallOverrides): Promise<BigNumber>;
        username(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        deployAndRun(bytecode: BytesLike, input: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initialize(_user: string, _username: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        nonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        solutionId(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        user(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        username(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
