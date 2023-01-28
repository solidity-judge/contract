import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SimpleChecker, SimpleCheckerInterface } from "../SimpleChecker";
type SimpleCheckerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SimpleChecker__factory extends ContractFactory {
    constructor(...args: SimpleCheckerConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SimpleChecker>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SimpleChecker;
    connect(signer: Signer): SimpleChecker__factory;
    static readonly contractName: "SimpleChecker";
    readonly contractName: "SimpleChecker";
    static readonly bytecode = "0x608060405234801561001057600080fd5b506102ce806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063fabc0e7c14610030575b600080fd5b61004361003e366004610182565b610059565b6040516100509190610257565b60405180910390f35b6000826020015182805190602001200361007557506000610079565b5060015b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156100d1576100d161007f565b60405290565b600082601f8301126100e857600080fd5b813567ffffffffffffffff808211156101035761010361007f565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156101495761014961007f565b8160405283815286602085880101111561016257600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806040838503121561019557600080fd5b823567ffffffffffffffff808211156101ad57600080fd5b90840190606082870312156101c157600080fd5b6101c96100ae565b8235828111156101d857600080fd5b6101e4888286016100d7565b82525060208301356020820152604083013592507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8316831461022257600080fd5b82604082015280945050602085013591508082111561024057600080fd5b5061024d858286016100d7565b9150509250929050565b6020810160038310610292577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9190529056fea264697066735822122014af913f4e639bdff3ab8a664dc4fd6110a30877b153b2ae39d89b95e44d943964736f6c63430008110033";
    static readonly abi: ({
        inputs: never[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): SimpleCheckerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SimpleChecker;
}
export {};
