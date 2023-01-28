import { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
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
export interface ICheckerInterface extends utils.Interface {
    contractName: "IChecker";
    functions: {
        "checkOutput((bytes,bytes32,uint224),bytes)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "checkOutput", values: [TestCaseStruct, BytesLike]): string;
    decodeFunctionResult(functionFragment: "checkOutput", data: BytesLike): Result;
    events: {};
}
export interface IChecker extends BaseContract {
    contractName: "IChecker";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ICheckerInterface;
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
        checkOutput(test: TestCaseStruct, contestantOutput: BytesLike, overrides?: CallOverrides): Promise<[number]>;
    };
    checkOutput(test: TestCaseStruct, contestantOutput: BytesLike, overrides?: CallOverrides): Promise<number>;
    callStatic: {
        checkOutput(test: TestCaseStruct, contestantOutput: BytesLike, overrides?: CallOverrides): Promise<number>;
    };
    filters: {};
    estimateGas: {
        checkOutput(test: TestCaseStruct, contestantOutput: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        checkOutput(test: TestCaseStruct, contestantOutput: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
