/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

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

export interface TestManagerInterface extends utils.Interface {
  contractName: "TestManager";
  functions: {
    "addTest((bytes,bytes32,uint224))": FunctionFragment;
    "author()": FunctionFragment;
    "replaceTests((bytes,bytes32,uint224)[])": FunctionFragment;
    "testLength()": FunctionFragment;
    "testVersion()": FunctionFragment;
    "tests(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addTest",
    values: [TestCaseStruct]
  ): string;
  encodeFunctionData(functionFragment: "author", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "replaceTests",
    values: [TestCaseStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "testLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "testVersion",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "tests", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "addTest", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "author", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "replaceTests",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "testLength", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "testVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tests", data: BytesLike): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "NewTestVersion(uint256,tuple[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewTestVersion"): EventFragment;
}

export type InitializedEvent = TypedEvent<[number], { version: number }>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export type NewTestVersionEvent = TypedEvent<
  [BigNumber, TestCaseStructOutput[]],
  { version: BigNumber; tests: TestCaseStructOutput[] }
>;

export type NewTestVersionEventFilter = TypedEventFilter<NewTestVersionEvent>;

export interface TestManager extends BaseContract {
  contractName: "TestManager";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestManagerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addTest(
      test: TestCaseStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    author(overrides?: CallOverrides): Promise<[string]>;

    replaceTests(
      newTests: TestCaseStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    testLength(overrides?: CallOverrides): Promise<[BigNumber]>;

    testVersion(overrides?: CallOverrides): Promise<[BigNumber]>;

    tests(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        input: string;
        output: string;
        gasLimit: BigNumber;
      }
    >;
  };

  addTest(
    test: TestCaseStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  author(overrides?: CallOverrides): Promise<string>;

  replaceTests(
    newTests: TestCaseStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  testLength(overrides?: CallOverrides): Promise<BigNumber>;

  testVersion(overrides?: CallOverrides): Promise<BigNumber>;

  tests(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber] & {
      input: string;
      output: string;
      gasLimit: BigNumber;
    }
  >;

  callStatic: {
    addTest(test: TestCaseStruct, overrides?: CallOverrides): Promise<void>;

    author(overrides?: CallOverrides): Promise<string>;

    replaceTests(
      newTests: TestCaseStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    testLength(overrides?: CallOverrides): Promise<BigNumber>;

    testVersion(overrides?: CallOverrides): Promise<BigNumber>;

    tests(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber] & {
        input: string;
        output: string;
        gasLimit: BigNumber;
      }
    >;
  };

  filters: {
    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "NewTestVersion(uint256,tuple[])"(
      version?: null,
      tests?: null
    ): NewTestVersionEventFilter;
    NewTestVersion(version?: null, tests?: null): NewTestVersionEventFilter;
  };

  estimateGas: {
    addTest(
      test: TestCaseStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    author(overrides?: CallOverrides): Promise<BigNumber>;

    replaceTests(
      newTests: TestCaseStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    testLength(overrides?: CallOverrides): Promise<BigNumber>;

    testVersion(overrides?: CallOverrides): Promise<BigNumber>;

    tests(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addTest(
      test: TestCaseStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    author(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    replaceTests(
      newTests: TestCaseStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    testLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    testVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tests(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
