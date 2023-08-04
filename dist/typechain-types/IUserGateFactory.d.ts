import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IUserGateFactoryInterface extends utils.Interface {
    contractName: "IUserGateFactory";
    functions: {
        "createGate(string)": FunctionFragment;
        "gates(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "createGate", values: [string]): string;
    encodeFunctionData(functionFragment: "gates", values: [string]): string;
    decodeFunctionResult(functionFragment: "createGate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gates", data: BytesLike): Result;
    events: {
        "CreateGate(address,string,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CreateGate"): EventFragment;
}
export type CreateGateEvent = TypedEvent<[
    string,
    string,
    string
], {
    user: string;
    username: string;
    gate: string;
}>;
export type CreateGateEventFilter = TypedEventFilter<CreateGateEvent>;
export interface IUserGateFactory extends BaseContract {
    contractName: "IUserGateFactory";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IUserGateFactoryInterface;
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
        createGate(username: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        gates(user: string, overrides?: CallOverrides): Promise<[string]>;
    };
    createGate(username: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    gates(user: string, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        createGate(username: string, overrides?: CallOverrides): Promise<string>;
        gates(user: string, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "CreateGate(address,string,address)"(user?: null, username?: null, gate?: null): CreateGateEventFilter;
        CreateGate(user?: null, username?: null, gate?: null): CreateGateEventFilter;
    };
    estimateGas: {
        createGate(username: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        gates(user: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        createGate(username: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        gates(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}