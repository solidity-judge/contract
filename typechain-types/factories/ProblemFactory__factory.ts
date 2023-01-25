/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ProblemFactory,
  ProblemFactoryInterface,
} from "../ProblemFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_gateFactory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "author",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "problem",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "checker",
        type: "address",
      },
    ],
    name: "CreateProblem",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "claimOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "checker",
        type: "address",
      },
    ],
    name: "createProblem",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "problem",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "gateFactory",
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
    name: "implementation",
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
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "pendingOwner",
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
    name: "problemCount",
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
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "simpleChecker",
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
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "direct",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "renounce",
        type: "bool",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeBeacon",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60e0604052306080523480156200001557600080fd5b506040516200298b3803806200298b8339810160408190526200003891620001dd565b600154600160a81b900460ff16158080156200005f575060018054600160a01b900460ff16105b806200009557506200007c30620001c060201b620010501760201c565b15801562000095575060018054600160a01b900460ff16145b620000fd5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b6001805460ff60a01b1916600160a01b17905580156200012b576001805460ff60a81b1916600160a81b1790555b6001600160a01b03821660c0526040516200014690620001cf565b604051809103906000f08015801562000163573d6000803e3d6000fd5b506001600160a01b031660a0528015620001b8576001805460ff60a81b191681556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50506200020f565b6001600160a01b03163b151590565b6102ee806200269d83390190565b600060208284031215620001f057600080fd5b81516001600160a01b03811681146200020857600080fd5b9392505050565b60805160a05160c05161243462000269600039600081816101540152610f070152600081816102a50152610ea0015260008181610641015281816106f30152818161096701528181610a190152610b6901526124346000f3fe608060405260043610620000ef5760003560e01c80635c60da1b1162000089578063b26401171162000060578063b26401171462000291578063c4d66de814620002c7578063e30c397814620002ec578063f70c0796146200031b57600080fd5b80635c60da1b146200021b5780638da5cb5b146200024a5780639115e71b146200027957600080fd5b80633659cfe611620000ca5780633659cfe614620001a05780634e71e0c814620001c55780634f1ef28614620001dd57806352d1902d14620001f457600080fd5b8063078dfbe714620000f45780631bce4583146200011b5780632f6c7ccc1462000140575b600080fd5b3480156200010157600080fd5b5062000119620001133660046200175f565b6200036b565b005b3480156200012857600080fd5b50620001196200013a366004620017a9565b62000560565b3480156200014d57600080fd5b50620001767f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b348015620001ad57600080fd5b5062000119620001bf366004620017a9565b6200062a565b348015620001d257600080fd5b506200011962000838565b62000119620001ee366004620017f6565b62000950565b3480156200020157600080fd5b506200020c62000b4f565b60405190815260200162000197565b3480156200022857600080fd5b50603254620001769073ffffffffffffffffffffffffffffffffffffffff1681565b3480156200025757600080fd5b50600054620001769073ffffffffffffffffffffffffffffffffffffffff1681565b3480156200028657600080fd5b506200020c60335481565b3480156200029e57600080fd5b50620001767f000000000000000000000000000000000000000000000000000000000000000081565b348015620002d457600080fd5b5062000119620002e6366004620017a9565b62000c3d565b348015620002f957600080fd5b50600154620001769073ffffffffffffffffffffffffffffffffffffffff1681565b3480156200032857600080fd5b50620003406200033a366004620017a9565b62000e7f565b6040805192835273ffffffffffffffffffffffffffffffffffffffff90911660208301520162000197565b60005473ffffffffffffffffffffffffffffffffffffffff163314620003f2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b81156200051a5773ffffffffffffffffffffffffffffffffffffffff83161515806200041b5750805b62000483576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4f776e61626c653a207a65726f206164647265737300000000000000000000006044820152606401620003e9565b6000805460405173ffffffffffffffffffffffffffffffffffffffff808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff85167fffffffffffffffffffffffff000000000000000000000000000000000000000091821617909155600180549091169055505050565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85161790555b505050565b60005473ffffffffffffffffffffffffffffffffffffffff163314620005e3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401620003e9565b603280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003620006f1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152608401620003e9565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16620007677f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff16146200080c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401620003e9565b62000817816200106c565b604080516000808252602082019092526200083591839190620010ef565b50565b60015473ffffffffffffffffffffffffffffffffffffffff16338114620008bc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e65726044820152606401620003e9565b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016300362000a17576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152608401620003e9565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1662000a8d7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff161462000b32576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152608401620003e9565b62000b3d826200106c565b62000b4b82826001620010ef565b5050565b60003073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161462000c18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401620003e9565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b6001547501000000000000000000000000000000000000000000900460ff161580801562000c8757506001805474010000000000000000000000000000000000000000900460ff16105b8062000cba5750303b15801562000cba57506001805474010000000000000000000000000000000000000000900460ff16145b62000d48576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401620003e9565b600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1674010000000000000000000000000000000000000000179055801562000dcf57600180547fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff1675010000000000000000000000000000000000000000001790555b62000dd9620012fa565b603280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8416179055801562000b4b57600180547fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff1681556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b60008073ffffffffffffffffffffffffffffffffffffffff831662000ec2577f000000000000000000000000000000000000000000000000000000000000000092505b60336000815462000ed390620018e2565b91829055506040516024810182905233604482015273ffffffffffffffffffffffffffffffffffffffff80861660648301527f000000000000000000000000000000000000000000000000000000000000000016608482015290925060009060a401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f754d1d5400000000000000000000000000000000000000000000000000000000179052519091503090829062000fbe9062001716565b62000fcb929190620019b4565b604051809103906000f08015801562000fe8573d6000803e3d6000fd5b50604080513381526020810186905273ffffffffffffffffffffffffffffffffffffffff838116828401528716606082015290519193507f5cfe0ef29f971b18bc26361b613e29700c2a40acf7a4677922c21d51fae82132919081900360800190a150915091565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b60005473ffffffffffffffffffffffffffffffffffffffff16331462000835576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401620003e9565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161562001125576200055b83620013d3565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015620011ad575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252620011aa91810190620019ed565b60015b6200123b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608401620003e9565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8114620012ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152608401620003e9565b506200055b838383620014df565b6001547501000000000000000000000000000000000000000000900460ff16620013a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e670000000000000000000000000000000000000000006064820152608401620003e9565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001633179055565b73ffffffffffffffffffffffffffffffffffffffff81163b62001479576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152608401620003e9565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b620014ea8362001510565b600082511180620014f85750805b156200055b576200150a83836200155f565b50505050565b6200151b81620013d3565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060620015878383604051806060016040528060278152602001620023d8602791396200158e565b9392505050565b606073ffffffffffffffffffffffffffffffffffffffff84163b62001636576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e747261637400000000000000000000000000000000000000000000000000006064820152608401620003e9565b6000808573ffffffffffffffffffffffffffffffffffffffff168560405162001660919062001a07565b600060405180830381855af49150503d80600081146200169d576040519150601f19603f3d011682016040523d82523d6000602084013e620016a2565b606091505b5091509150620016b4828286620016be565b9695505050505050565b60608315620016cf57508162001587565b825115620016e05782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003e9919062001a25565b61099d8062001a3b83390190565b803573ffffffffffffffffffffffffffffffffffffffff811681146200174957600080fd5b919050565b803580151581146200174957600080fd5b6000806000606084860312156200177557600080fd5b620017808462001724565b925062001790602085016200174e565b9150620017a0604085016200174e565b90509250925092565b600060208284031215620017bc57600080fd5b620015878262001724565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080604083850312156200180a57600080fd5b620018158362001724565b9150602083013567ffffffffffffffff808211156200183357600080fd5b818501915085601f8301126200184857600080fd5b8135818111156200185d576200185d620017c7565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908382118183101715620018a657620018a6620017c7565b81604052828152886020848701011115620018c057600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036200193b577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b5060010190565b60005b838110156200195f57818101518382015260200162001945565b50506000910152565b600081518084526200198281602086016020860162001942565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff83168152604060208201526000620019e5604083018462001968565b949350505050565b60006020828403121562001a0057600080fd5b5051919050565b6000825162001a1b81846020870162001942565b9190910192915050565b6020815260006200158760208301846200196856fe608060405260405161099d38038061099d8339810160408190526100229161044e565b61002e82826000610035565b5050610578565b61003e83610100565b6040516001600160a01b038416907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e90600090a260008251118061007f5750805b156100fb576100f9836001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100e9919061050e565b836102a360201b6100291760201c565b505b505050565b610113816102cf60201b6100551760201c565b6101725760405162461bcd60e51b815260206004820152602560248201527f455243313936373a206e657720626561636f6e206973206e6f74206120636f6e6044820152641d1c9858dd60da1b60648201526084015b60405180910390fd5b6101e6816001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d7919061050e565b6102cf60201b6100551760201c565b61024b5760405162461bcd60e51b815260206004820152603060248201527f455243313936373a20626561636f6e20696d706c656d656e746174696f6e206960448201526f1cc81b9bdd08184818dbdb9d1c9858dd60821b6064820152608401610169565b806102827fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5060001b6102de60201b6100711760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b60606102c88383604051806060016040528060278152602001610976602791396102e1565b9392505050565b6001600160a01b03163b151590565b90565b60606001600160a01b0384163b6103495760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610169565b600080856001600160a01b0316856040516103649190610529565b600060405180830381855af49150503d806000811461039f576040519150601f19603f3d011682016040523d82523d6000602084013e6103a4565b606091505b5090925090506103b58282866103bf565b9695505050505050565b606083156103ce5750816102c8565b8251156103de5782518084602001fd5b8160405162461bcd60e51b81526004016101699190610545565b80516001600160a01b038116811461040f57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561044557818101518382015260200161042d565b50506000910152565b6000806040838503121561046157600080fd5b61046a836103f8565b60208401519092506001600160401b038082111561048757600080fd5b818501915085601f83011261049b57600080fd5b8151818111156104ad576104ad610414565b604051601f8201601f19908116603f011681019083821181831017156104d5576104d5610414565b816040528281528860208487010111156104ee57600080fd5b6104ff83602083016020880161042a565b80955050505050509250929050565b60006020828403121561052057600080fd5b6102c8826103f8565b6000825161053b81846020870161042a565b9190910192915050565b602081526000825180602084015261056481604085016020870161042a565b601f01601f19169190910160400192915050565b6103ef806105876000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610074565b610127565b565b606061004e83836040518060600160405280602781526020016103936027913961014b565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b90565b60006100b47fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d505473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100fe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061012291906102cb565b905090565b3660008037600080366000845af43d6000803e808015610146573d6000f35b3d6000fd5b606073ffffffffffffffffffffffffffffffffffffffff84163b6101f6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e7472616374000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff168560405161021e9190610325565b600060405180830381855af49150503d8060008114610259576040519150601f19603f3d011682016040523d82523d6000602084013e61025e565b606091505b509150915061026e828286610278565b9695505050505050565b6060831561028757508161004e565b8251156102975782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ed9190610341565b6000602082840312156102dd57600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461004e57600080fd5b60005b8381101561031c578181015183820152602001610304565b50506000910152565b60008251610337818460208701610301565b9190910192915050565b6020815260008251806020840152610360816040850160208701610301565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220337770a8c7d35689421cd7c10364ca61a1c4e30c6b2d7c86862592dfc69821d064736f6c63430008110033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122091441a864b4ac802200fba138ca3f9e90bc4e35270d6a4751da6c25d73a65bc964736f6c63430008110033608060405234801561001057600080fd5b506102ce806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063fabc0e7c14610030575b600080fd5b61004361003e366004610182565b610059565b6040516100509190610257565b60405180910390f35b6000826020015182805190602001200361007557506000610079565b5060015b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040516060810167ffffffffffffffff811182821017156100d1576100d161007f565b60405290565b600082601f8301126100e857600080fd5b813567ffffffffffffffff808211156101035761010361007f565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156101495761014961007f565b8160405283815286602085880101111561016257600080fd5b836020870160208301376000602085830101528094505050505092915050565b6000806040838503121561019557600080fd5b823567ffffffffffffffff808211156101ad57600080fd5b90840190606082870312156101c157600080fd5b6101c96100ae565b8235828111156101d857600080fd5b6101e4888286016100d7565b82525060208301356020820152604083013592507bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8316831461022257600080fd5b82604082015280945050602085013591508082111561024057600080fd5b5061024d858286016100d7565b9150509250929050565b6020810160038310610292577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b9190529056fea264697066735822122014af913f4e639bdff3ab8a664dc4fd6110a30877b153b2ae39d89b95e44d943964736f6c63430008110033";

type ProblemFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProblemFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProblemFactory__factory extends ContractFactory {
  constructor(...args: ProblemFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ProblemFactory";
  }

  deploy(
    _gateFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ProblemFactory> {
    return super.deploy(
      _gateFactory,
      overrides || {}
    ) as Promise<ProblemFactory>;
  }
  getDeployTransaction(
    _gateFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_gateFactory, overrides || {});
  }
  attach(address: string): ProblemFactory {
    return super.attach(address) as ProblemFactory;
  }
  connect(signer: Signer): ProblemFactory__factory {
    return super.connect(signer) as ProblemFactory__factory;
  }
  static readonly contractName: "ProblemFactory";
  public readonly contractName: "ProblemFactory";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProblemFactoryInterface {
    return new utils.Interface(_abi) as ProblemFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProblemFactory {
    return new Contract(address, _abi, signerOrProvider) as ProblemFactory;
  }
}
