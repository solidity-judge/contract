/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Gate, GateInterface } from "../Gate";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "solution",
        type: "address",
      },
    ],
    name: "Deployment",
    type: "event",
  },
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
    inputs: [
      {
        internalType: "bytes",
        name: "bytecode",
        type: "bytes",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address",
        name: "solution",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "bytecode",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "input",
        type: "bytes",
      },
    ],
    name: "deployAndRun",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
      {
        internalType: "string",
        name: "_username",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nonce",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "solutionId",
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
    name: "user",
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
    inputs: [],
    name: "username",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610d37806100206000396000f3fe608060405234801561001057600080fd5b506004361061007c5760003560e01c806361fac54d1161005b57806361fac54d1461010c578063affed0e014610121578063cf3d1af71461012a578063f399e22e1461013d57600080fd5b8062774360146100815780632a768922146100be5780634f8632ba146100ec575b600080fd5b61009461008f3660046108bf565b610152565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100de6100cc366004610918565b60046020526000908152604090205481565b6040519081526020016100b5565b6002546100949073ffffffffffffffffffffffffffffffffffffffff1681565b6101146101ec565b6040516100b591906109a1565b6100de60015481565b6101146101383660046109b4565b61027a565b61015061014b366004610a18565b6103cb565b005b60025460009073ffffffffffffffffffffffffffffffffffffffff1633146101db576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f6e6f74207573657200000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b6101e4826105a4565b90505b919050565b600380546101f990610a70565b80601f016020809104026020016040519081016040528092919081815260200182805461022590610a70565b80156102725780601f1061024757610100808354040283529160200191610272565b820191906000526020600020905b81548152906001019060200180831161025557829003601f168201915b505050505081565b60025460609073ffffffffffffffffffffffffffffffffffffffff1633146102fe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f6e6f74207573657200000000000000000000000000000000000000000000000060448201526064016101d2565b6000610309846105a4565b6040517f09c5eabe00000000000000000000000000000000000000000000000000000000815290915073ffffffffffffffffffffffffffffffffffffffff8216906309c5eabe9061035e9086906004016109a1565b6000604051808303816000875af115801561037d573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526103c39190810190610ac3565b949350505050565b600054610100900460ff16158080156103eb5750600054600160ff909116105b806104055750303b158015610405575060005460ff166001145b610491576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016101d2565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905580156104ef57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8516179055600361053b8382610b88565b50801561059f57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050565b60006001600081546105b590610ca2565b909155506001546105c99060009084610636565b60015473ffffffffffffffffffffffffffffffffffffffff821660008181526004602090815260409182902084905581519384528301919091529192507fce875bee0eb1c2442039be2e40da2c23699b040efed11504442b676ec954fa47910160405180910390a1919050565b600080844710156106a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f437265617465323a20696e73756666696369656e742062616c616e636500000060448201526064016101d2565b825160000361070e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f437265617465323a2062797465636f6465206c656e677468206973207a65726f60448201526064016101d2565b8383516020850187f5905073ffffffffffffffffffffffffffffffffffffffff81166103c3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f437265617465323a204661696c6564206f6e206465706c6f790000000000000060448201526064016101d2565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561080c5761080c610796565b604052919050565b600067ffffffffffffffff82111561082e5761082e610796565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600061086d61086884610814565b6107c5565b905082815283838301111561088157600080fd5b828260208301376000602084830101529392505050565b600082601f8301126108a957600080fd5b6108b88383356020850161085a565b9392505050565b6000602082840312156108d157600080fd5b813567ffffffffffffffff8111156108e857600080fd5b6103c384828501610898565b803573ffffffffffffffffffffffffffffffffffffffff811681146101e757600080fd5b60006020828403121561092a57600080fd5b6108b8826108f4565b60005b8381101561094e578181015183820152602001610936565b50506000910152565b6000815180845261096f816020860160208601610933565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006108b86020830184610957565b600080604083850312156109c757600080fd5b823567ffffffffffffffff808211156109df57600080fd5b6109eb86838701610898565b93506020850135915080821115610a0157600080fd5b50610a0e85828601610898565b9150509250929050565b60008060408385031215610a2b57600080fd5b610a34836108f4565b9150602083013567ffffffffffffffff811115610a5057600080fd5b8301601f81018513610a6157600080fd5b610a0e8582356020840161085a565b600181811c90821680610a8457607f821691505b602082108103610abd577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b600060208284031215610ad557600080fd5b815167ffffffffffffffff811115610aec57600080fd5b8201601f81018413610afd57600080fd5b8051610b0b61086882610814565b818152856020838501011115610b2057600080fd5b610b31826020830160208601610933565b95945050505050565b601f82111561059f57600081815260208120601f850160051c81016020861015610b615750805b601f850160051c820191505b81811015610b8057828155600101610b6d565b505050505050565b815167ffffffffffffffff811115610ba257610ba2610796565b610bb681610bb08454610a70565b84610b3a565b602080601f831160018114610c095760008415610bd35750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b178555610b80565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b82811015610c5657888601518255948401946001909101908401610c37565b5085821015610c9257878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610cfa577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506001019056fea2646970667358221220a877c77614caa531d3b0889cb4552f41e5e4d52eaaecf55cc4ace651c880ea4a64736f6c63430008110033";

type GateConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GateConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Gate__factory extends ContractFactory {
  constructor(...args: GateConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Gate";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Gate> {
    return super.deploy(overrides || {}) as Promise<Gate>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Gate {
    return super.attach(address) as Gate;
  }
  connect(signer: Signer): Gate__factory {
    return super.connect(signer) as Gate__factory;
  }
  static readonly contractName: "Gate";
  public readonly contractName: "Gate";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GateInterface {
    return new utils.Interface(_abi) as GateInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Gate {
    return new Contract(address, _abi, signerOrProvider) as Gate;
  }
}
