import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IGateInterface extends utils.Interface {
    contractName: "IGate";
    functions: {
        "deployAndRun(bytes,bytes)": FunctionFragment;
        "user()": FunctionFragment;
        "username()": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "deployAndRun", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "user", values?: undefined): string;
    encodeFunctionData(functionFragment: "username", values?: undefined): string;
    decodeFunctionResult(functionFragment: "deployAndRun", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "user", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "username", data: BytesLike): Result;
    events: {
        "Deployment(uint256,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Deployment"): EventFragment;
}
export type DeploymentEvent = TypedEvent<[
    BigNumber,
    string
], {
    id: BigNumber;
    solution: string;
}>;
export type DeploymentEventFilter = TypedEventFilter<DeploymentEvent>;
export interface IGate extends BaseContract {
    contractName: "IGate";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IGateInterface;
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
        user(overrides?: CallOverrides): Promise<[string]>;
        username(overrides?: CallOverrides): Promise<[string] & {
            username: string;
        }>;
    };
    deployAndRun(bytecode: BytesLike, input: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    user(overrides?: CallOverrides): Promise<string>;
    username(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        deployAndRun(bytecode: BytesLike, input: BytesLike, overrides?: CallOverrides): Promise<[string, BigNumber] & {
            output: string;
            gasUsed: BigNumber;
        }>;
        user(overrides?: CallOverrides): Promise<string>;
        username(overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "Deployment(uint256,address)"(id?: null, solution?: null): DeploymentEventFilter;
        Deployment(id?: null, solution?: null): DeploymentEventFilter;
    };
    estimateGas: {
        deployAndRun(bytecode: BytesLike, input: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        user(overrides?: CallOverrides): Promise<BigNumber>;
        username(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        deployAndRun(bytecode: BytesLike, input: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        user(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        username(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
