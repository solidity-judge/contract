import { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export interface IProblemFactoryInterface extends utils.Interface {
    contractName: "IProblemFactory";
    functions: {
        "createProblem(address)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "createProblem", values: [string]): string;
    decodeFunctionResult(functionFragment: "createProblem", data: BytesLike): Result;
    events: {
        "CreateProblem(address,uint256,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CreateProblem"): EventFragment;
}
export type CreateProblemEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    string
], {
    author: string;
    id: BigNumber;
    problem: string;
    checker: string;
}>;
export type CreateProblemEventFilter = TypedEventFilter<CreateProblemEvent>;
export interface IProblemFactory extends BaseContract {
    contractName: "IProblemFactory";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IProblemFactoryInterface;
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
        createProblem(checker: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    createProblem(checker: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        createProblem(checker: string, overrides?: CallOverrides): Promise<[BigNumber, string] & {
            id: BigNumber;
            problem: string;
        }>;
    };
    filters: {
        "CreateProblem(address,uint256,address,address)"(author?: null, id?: null, problem?: null, checker?: null): CreateProblemEventFilter;
        CreateProblem(author?: null, id?: null, problem?: null, checker?: null): CreateProblemEventFilter;
    };
    estimateGas: {
        createProblem(checker: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        createProblem(checker: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
