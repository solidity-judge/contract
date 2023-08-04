import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IProblem, IProblemInterface } from "../IProblem";
export declare class IProblem__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): IProblemInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IProblem;
}
