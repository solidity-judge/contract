/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISolution, ISolutionInterface } from "../ISolution";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "input",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bytes",
        name: "output",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ISolution__factory {
  static readonly abi = _abi;
  static createInterface(): ISolutionInterface {
    return new utils.Interface(_abi) as ISolutionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISolution {
    return new Contract(address, _abi, signerOrProvider) as ISolution;
  }
}
