/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IUserGateFactory,
  IUserGateFactoryInterface,
} from "../IUserGateFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "username",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "gate",
        type: "address",
      },
    ],
    name: "CreateGate",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "username",
        type: "string",
      },
    ],
    name: "createGate",
    outputs: [
      {
        internalType: "address",
        name: "gate",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "gates",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IUserGateFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IUserGateFactoryInterface {
    return new utils.Interface(_abi) as IUserGateFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUserGateFactory {
    return new Contract(address, _abi, signerOrProvider) as IUserGateFactory;
  }
}
