import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IProblemV2, IProblemV2Interface } from "../IProblemV2";
export declare class IProblemV2__factory {
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
    static createInterface(): IProblemV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IProblemV2;
}
