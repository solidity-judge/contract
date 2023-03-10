/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IChecker, ICheckerInterface } from "../IChecker";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes",
            name: "input",
            type: "bytes",
          },
          {
            internalType: "bytes32",
            name: "output",
            type: "bytes32",
          },
          {
            internalType: "uint224",
            name: "gasLimit",
            type: "uint224",
          },
        ],
        internalType: "struct TestCase",
        name: "test",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "contestantOutput",
        type: "bytes",
      },
    ],
    name: "checkOutput",
    outputs: [
      {
        internalType: "enum Verdict",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export class IChecker__factory {
  static readonly abi = _abi;
  static createInterface(): ICheckerInterface {
    return new utils.Interface(_abi) as ICheckerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IChecker {
    return new Contract(address, _abi, signerOrProvider) as IChecker;
  }
}
