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
export interface ProblemInterface extends utils.Interface {
    contractName: "Problem";
    functions: {
        "MAX_OUTPUT_SIZE()": FunctionFragment;
        "addTest((bytes,bytes32,uint224))": FunctionFragment;
        "author()": FunctionFragment;
        "checker()": FunctionFragment;
        "contestants(address)": FunctionFragment;
        "deadline()": FunctionFragment;
        "declareSolutionHash(bytes32)": FunctionFragment;
        "gateFactory()": FunctionFragment;
        "getContestantInfo(address)": FunctionFragment;
        "id()": FunctionFragment;
        "initialize(uint256,address,address,address)": FunctionFragment;
        "replaceTests((bytes,bytes32,uint224)[])": FunctionFragment;
        "runSolution(address,bool)": FunctionFragment;
        "setDeadline(uint256)": FunctionFragment;
        "submit(address,bool,bytes)": FunctionFragment;
        "submitAndRunSolution(address,bool,bytes)": FunctionFragment;
        "testLength()": FunctionFragment;
        "testVersion()": FunctionFragment;
        "tests(uint256)": FunctionFragment;
    };
    encodeFunctionData(functionFragment: "MAX_OUTPUT_SIZE", values?: undefined): string;
    encodeFunctionData(functionFragment: "addTest", values: [TestCaseStruct]): string;
    encodeFunctionData(functionFragment: "author", values?: undefined): string;
    encodeFunctionData(functionFragment: "checker", values?: undefined): string;
    encodeFunctionData(functionFragment: "contestants", values: [string]): string;
    encodeFunctionData(functionFragment: "deadline", values?: undefined): string;
    encodeFunctionData(functionFragment: "declareSolutionHash", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "gateFactory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getContestantInfo", values: [string]): string;
    encodeFunctionData(functionFragment: "id", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [BigNumberish, string, string, string]): string;
    encodeFunctionData(functionFragment: "replaceTests", values: [TestCaseStruct[]]): string;
    encodeFunctionData(functionFragment: "runSolution", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setDeadline", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "submit", values: [string, boolean, BytesLike]): string;
    encodeFunctionData(functionFragment: "submitAndRunSolution", values: [string, boolean, BytesLike]): string;
    encodeFunctionData(functionFragment: "testLength", values?: undefined): string;
    encodeFunctionData(functionFragment: "testVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "tests", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "MAX_OUTPUT_SIZE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addTest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "author", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contestants", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deadline", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "declareSolutionHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gateFactory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getContestantInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "id", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "replaceTests", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "runSolution", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDeadline", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "submitAndRunSolution", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testLength", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "testVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tests", data: BytesLike): Result;
    events: {
        "DeadlineUpdated(uint256)": EventFragment;
        "DeclareSolutionHash(address,bytes32)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "NewTestVersion(uint256,tuple[])": EventFragment;
        "RunSolution(address,uint256,bool,uint8[])": EventFragment;
        "UpdateSolution(address,bool,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "DeadlineUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DeclareSolutionHash"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewTestVersion"): EventFragment;
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
export type InitializedEvent = TypedEvent<[number], {
    version: number;
}>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export type NewTestVersionEvent = TypedEvent<[
    BigNumber,
    TestCaseStructOutput[]
], {
    version: BigNumber;
    tests: TestCaseStructOutput[];
}>;
export type NewTestVersionEventFilter = TypedEventFilter<NewTestVersionEvent>;
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
export interface Problem extends BaseContract {
    contractName: "Problem";
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ProblemInterface;
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
        MAX_OUTPUT_SIZE(overrides?: CallOverrides): Promise<[number]>;
        addTest(test: TestCaseStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        author(overrides?: CallOverrides): Promise<[string]>;
        checker(overrides?: CallOverrides): Promise<[string]>;
        contestants(arg0: string, overrides?: CallOverrides): Promise<[
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
        deadline(overrides?: CallOverrides): Promise<[BigNumber]>;
        declareSolutionHash(solutionHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        gateFactory(overrides?: CallOverrides): Promise<[string]>;
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
        id(overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(_id: BigNumberish, _author: string, _checker: string, _gateFactory: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        replaceTests(newTests: TestCaseStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        runSolution(contestant: string, isBeforeDeadline: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setDeadline(_deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        submit(user: string, isPreDeadlineSolution: boolean, solutionBytecode: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        submitAndRunSolution(user: string, isPreDeadlineSolution: boolean, solutionBytecode: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        testLength(overrides?: CallOverrides): Promise<[BigNumber]>;
        testVersion(overrides?: CallOverrides): Promise<[BigNumber]>;
        tests(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            string,
            BigNumber
        ] & {
            input: string;
            output: string;
            gasLimit: BigNumber;
        }>;
    };
    MAX_OUTPUT_SIZE(overrides?: CallOverrides): Promise<number>;
    addTest(test: TestCaseStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    author(overrides?: CallOverrides): Promise<string>;
    checker(overrides?: CallOverrides): Promise<string>;
    contestants(arg0: string, overrides?: CallOverrides): Promise<[
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
    deadline(overrides?: CallOverrides): Promise<BigNumber>;
    declareSolutionHash(solutionHash: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    gateFactory(overrides?: CallOverrides): Promise<string>;
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
    id(overrides?: CallOverrides): Promise<BigNumber>;
    initialize(_id: BigNumberish, _author: string, _checker: string, _gateFactory: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    replaceTests(newTests: TestCaseStruct[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    runSolution(contestant: string, isBeforeDeadline: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setDeadline(_deadline: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    submit(user: string, isPreDeadlineSolution: boolean, solutionBytecode: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    submitAndRunSolution(user: string, isPreDeadlineSolution: boolean, solutionBytecode: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    testLength(overrides?: CallOverrides): Promise<BigNumber>;
    testVersion(overrides?: CallOverrides): Promise<BigNumber>;
    tests(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
        string,
        string,
        BigNumber
    ] & {
        input: string;
        output: string;
        gasLimit: BigNumber;
    }>;
    callStatic: {
        MAX_OUTPUT_SIZE(overrides?: CallOverrides): Promise<number>;
        addTest(test: TestCaseStruct, overrides?: CallOverrides): Promise<void>;
        author(overrides?: CallOverrides): Promise<string>;
        checker(overrides?: CallOverrides): Promise<string>;
        contestants(arg0: string, overrides?: CallOverrides): Promise<[
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
        deadline(overrides?: CallOverrides): Promise<BigNumber>;
        declareSolutionHash(solutionHash: BytesLike, overrides?: CallOverrides): Promise<void>;
        gateFactory(overrides?: CallOverrides): Promise<string>;
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
        id(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_id: BigNumberish, _author: string, _checker: string, _gateFactory: string, overrides?: CallOverrides): Promise<void>;
        replaceTests(newTests: TestCaseStruct[], overrides?: CallOverrides): Promise<void>;
        runSolution(contestant: string, isBeforeDeadline: boolean, overrides?: CallOverrides): Promise<void>;
        setDeadline(_deadline: BigNumberish, overrides?: CallOverrides): Promise<void>;
        submit(user: string, isPreDeadlineSolution: boolean, solutionBytecode: BytesLike, overrides?: CallOverrides): Promise<void>;
        submitAndRunSolution(user: string, isPreDeadlineSolution: boolean, solutionBytecode: BytesLike, overrides?: CallOverrides): Promise<void>;
        testLength(overrides?: CallOverrides): Promise<BigNumber>;
        testVersion(overrides?: CallOverrides): Promise<BigNumber>;
        tests(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            string,
            BigNumber
        ] & {
            input: string;
            output: string;
            gasLimit: BigNumber;
        }>;
    };
    filters: {
        "DeadlineUpdated(uint256)"(deadline?: null): DeadlineUpdatedEventFilter;
        DeadlineUpdated(deadline?: null): DeadlineUpdatedEventFilter;
        "DeclareSolutionHash(address,bytes32)"(contestant?: null, solutionHash?: null): DeclareSolutionHashEventFilter;
        DeclareSolutionHash(contestant?: null, solutionHash?: null): DeclareSolutionHashEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "NewTestVersion(uint256,tuple[])"(version?: null, tests?: null): NewTestVersionEventFilter;
        NewTestVersion(version?: null, tests?: null): NewTestVersionEventFilter;
        "RunSolution(address,uint256,bool,uint8[])"(contestant?: null, point?: null, isPreDeadlineSolution?: null, verdicts?: null): RunSolutionEventFilter;
        RunSolution(contestant?: null, point?: null, isPreDeadlineSolution?: null, verdicts?: null): RunSolutionEventFilter;
        "UpdateSolution(address,bool,address)"(contestant?: null, isPreDeadlineSolution?: null, solution?: null): UpdateSolutionEventFilter;
        UpdateSolution(contestant?: null, isPreDeadlineSolution?: null, solution?: null): UpdateSolutionEventFilter;
    };
    estimateGas: {
        MAX_OUTPUT_SIZE(overrides?: CallOverrides): Promise<BigNumber>;
        addTest(test: TestCaseStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        author(overrides?: CallOverrides): Promise<BigNumber>;
        checker(overrides?: CallOverrides): Promise<BigNumber>;
        contestants(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        deadline(overrides?: CallOverrides): Promise<BigNumber>;
        declareSolutionHash(solutionHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        gateFactory(overrides?: CallOverrides): Promise<BigNumber>;
        getContestantInfo(contestant: string, overrides?: CallOverrides): Promise<BigNumber>;
        id(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_id: BigNumberish, _author: string, _checker: string, _gateFactory: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        replaceTests(newTests: TestCaseStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        runSolution(contestant: string, isBeforeDeadline: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setDeadline(_deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        submit(user: string, isPreDeadlineSolution: boolean, solutionBytecode: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        submitAndRunSolution(user: string, isPreDeadlineSolution: boolean, solutionBytecode: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        testLength(overrides?: CallOverrides): Promise<BigNumber>;
        testVersion(overrides?: CallOverrides): Promise<BigNumber>;
        tests(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        MAX_OUTPUT_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addTest(test: TestCaseStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        author(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        checker(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contestants(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        deadline(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        declareSolutionHash(solutionHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        gateFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getContestantInfo(contestant: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        id(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_id: BigNumberish, _author: string, _checker: string, _gateFactory: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        replaceTests(newTests: TestCaseStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        runSolution(contestant: string, isBeforeDeadline: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setDeadline(_deadline: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        submit(user: string, isPreDeadlineSolution: boolean, solutionBytecode: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        submitAndRunSolution(user: string, isPreDeadlineSolution: boolean, solutionBytecode: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        testLength(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        testVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tests(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
