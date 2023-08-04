import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISolution, ISolutionInterface } from "../ISolution";
export declare class ISolution__factory {
    static readonly abi: {
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
    }[];
    static createInterface(): ISolutionInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISolution;
}
