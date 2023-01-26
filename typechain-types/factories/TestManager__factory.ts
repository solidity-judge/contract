/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { TestManager, TestManagerInterface } from "../TestManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "version",
        type: "uint256",
      },
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
        indexed: false,
        internalType: "struct TestCase[]",
        name: "tests",
        type: "tuple[]",
      },
    ],
    name: "NewTestVersion",
    type: "event",
  },
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
    ],
    name: "addTest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "author",
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
        internalType: "struct TestCase[]",
        name: "newTests",
        type: "tuple[]",
      },
    ],
    name: "replaceTests",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "testLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "testVersion",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tests",
    outputs: [
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
    stateMutability: "view",
    type: "function",
  },
];

export class TestManager__factory {
  static readonly abi = _abi;
  static createInterface(): TestManagerInterface {
    return new utils.Interface(_abi) as TestManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestManager {
    return new Contract(address, _abi, signerOrProvider) as TestManager;
  }
}