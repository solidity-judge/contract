import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export type TestCaseStruct = {
    input: BytesLike;
    output: BytesLike;
    gasLimit: BigNumberish;
};
export type TestCaseStructOutput = [string, string, BigNumber] & {
    input: string;
    output: string;
    gasLimit: BigNumber;
};
export interface ITestManagerInterface extends utils.Interface {
    contractName: "ITestManager";
    functions: {
        "addTest((bytes,bytes32,uint224))": FunctionFragment;
        "replaceTests((bytes,bytes32,uint224)[])": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "addTest", values: [TestCaseStruct]): string;
    encodeFunctionData(functionFragment: "replaceTests", values: [TestCaseStruct[]]): string;
    decodeFunctionResult(functionFragment: "addTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "replaceTests", data: BytesLike): Result;
    events: {
        "NewTestVersion(uint256,tuple[])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "NewTestVersion"): EventFragment;
}
export type NewTestVersionEvent = TypedEvent<[
    BigNumber,
    TestCaseStructOutput[]
], {
    version: BigNumber;
    tests: TestCaseStructOutput[];
}>;
export type NewTestVersionEventFilter = TypedEventFilter<NewTestVersionEvent>;
export interface ITestManager extends BaseContract {
    contractName: "ITestManager";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ITestManagerInterface;
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
        addTest(test: TestCaseStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        replaceTests(newTests: TestCaseStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addTest(test: TestCaseStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    replaceTests(newTests: TestCaseStruct[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addTest(test: TestCaseStruct, overrides?: CallOverrides): Promise<void>;
        replaceTests(newTests: TestCaseStruct[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "NewTestVersion(uint256,tuple[])"(version?: null, tests?: null): NewTestVersionEventFilter;
        NewTestVersion(version?: null, tests?: null): NewTestVersionEventFilter;
    };
    estimateGas: {
        addTest(test: TestCaseStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        replaceTests(newTests: TestCaseStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addTest(test: TestCaseStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        replaceTests(newTests: TestCaseStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
