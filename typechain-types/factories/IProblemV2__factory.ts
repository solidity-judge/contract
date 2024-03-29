/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IProblemV2, IProblemV2Interface } from "../IProblemV2";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "DeadlineUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "contestant",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "solutionHash",
        type: "bytes32",
      },
    ],
    name: "DeclareSolutionHash",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "contestant",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "point",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isPreDeadlineSolution",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "enum Verdict[]",
        name: "verdicts",
        type: "uint8[]",
      },
    ],
    name: "RunSolution",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "contestant",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isPreDeadlineSolution",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "address",
        name: "solution",
        type: "address",
      },
    ],
    name: "UpdateSolution",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "solutionHash",
        type: "bytes32",
      },
    ],
    name: "declareSolutionHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contestant",
        type: "address",
      },
    ],
    name: "getContestantInfo",
    outputs: [
      {
        internalType: "bytes32",
        name: "solutionHash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "solutionPreDeadline",
        type: "address",
      },
      {
        internalType: "address",
        name: "solutionPosDeadline",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "pointPreDeadline",
        type: "uint24",
      },
      {
        internalType: "uint24",
        name: "pointPosDeadline",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isPreDeadlineSolution",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "solutionBytecode",
        type: "bytes",
      },
    ],
    name: "submit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IProblemV2__factory {
  static readonly abi = _abi;
  static createInterface(): IProblemV2Interface {
    return new utils.Interface(_abi) as IProblemV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IProblemV2 {
    return new Contract(address, _abi, signerOrProvider) as IProblemV2;
  }
}
