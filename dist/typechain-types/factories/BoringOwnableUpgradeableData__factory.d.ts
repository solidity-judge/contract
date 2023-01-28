import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BoringOwnableUpgradeableData, BoringOwnableUpgradeableDataInterface } from "../BoringOwnableUpgradeableData";
type BoringOwnableUpgradeableDataConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BoringOwnableUpgradeableData__factory extends ContractFactory {
    constructor(...args: BoringOwnableUpgradeableDataConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BoringOwnableUpgradeableData>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BoringOwnableUpgradeableData;
    connect(signer: Signer): BoringOwnableUpgradeableData__factory;
    static readonly contractName: "BoringOwnableUpgradeableData";
    readonly contractName: "BoringOwnableUpgradeableData";
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060d48061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80638da5cb5b146037578063e30c397814607f575b600080fd5b60005460569073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b60015460569073ffffffffffffffffffffffffffffffffffffffff168156fea26469706673582212202f1bcb4e7d9ac851d0e9744c9bdc0de73440fd0b3e709df5ffd9b4cfdc3f77e364736f6c63430008110033";
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): BoringOwnableUpgradeableDataInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BoringOwnableUpgradeableData;
}
export {};
