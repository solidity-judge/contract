/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UserGateFactory,
  UserGateFactoryInterface,
} from "../UserGateFactory";

const _abi = [
  {
    inputs: [],
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
        name: "",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "solution",
        type: "address",
      },
    ],
    name: "verifySolution",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a0604052306080523480156200001557600080fd5b50600154600160a81b900460ff16158080156200003d575060018054600160a01b900460ff16105b806200007357506200005a306200015860201b620010721760201c565b15801562000073575060018054600160a01b900460ff16145b620000db5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b6001805460ff60a01b1916600160a01b179055801562000109576001805460ff60a81b1916600160a81b1790555b801562000151576001805460ff60a81b191681556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5062000167565b6001600160a01b03163b151590565b6080516124d96200019f6000396000818161063b015281816106ed01528181610b5a01528181610c0c0152610d5c01526124d96000f3fe608060405260043610620000d75760003560e01c806352d1902d116200007d5780638da5cb5b11620000545780638da5cb5b1462000279578063c4d66de814620002a8578063e30c397814620002cd57600080fd5b806352d1902d14620001dc57806356ac0cc214620002035780635c60da1b146200024a57600080fd5b8063386036f911620000b2578063386036f914620001625780634e71e0c814620001ad5780634f1ef28614620001c557600080fd5b8063078dfbe714620000dc5780630ef3a37814620001035780633659cfe6146200013d575b600080fd5b348015620000e957600080fd5b5062000101620000fb36600462001781565b620002fc565b005b3480156200011057600080fd5b506200012862000122366004620017cb565b620004f1565b60405190151581526020015b60405180910390f35b3480156200014a57600080fd5b50620001016200015c36600462001803565b62000624565b3480156200016f57600080fd5b506200018762000181366004620018eb565b62000832565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200162000134565b348015620001ba57600080fd5b506200010162000a2b565b62000101620001d636600462001941565b62000b43565b348015620001e957600080fd5b50620001f462000d42565b60405190815260200162000134565b3480156200021057600080fd5b50620001876200022236600462001803565b60336020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b3480156200025757600080fd5b50603254620001879073ffffffffffffffffffffffffffffffffffffffff1681565b3480156200028657600080fd5b50600054620001879073ffffffffffffffffffffffffffffffffffffffff1681565b348015620002b557600080fd5b5062000101620002c736600462001803565b62000e30565b348015620002da57600080fd5b50600154620001879073ffffffffffffffffffffffffffffffffffffffff1681565b60005473ffffffffffffffffffffffffffffffffffffffff16331462000383576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b8115620004ab5773ffffffffffffffffffffffffffffffffffffffff8316151580620003ac5750805b62000414576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f4f776e61626c653a207a65726f2061646472657373000000000000000000000060448201526064016200037a565b6000805460405173ffffffffffffffffffffffffffffffffffffffff808716939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff85167fffffffffffffffffffffffff000000000000000000000000000000000000000091821617909155600180549091169055505050565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff85161790555b505050565b73ffffffffffffffffffffffffffffffffffffffff8083166000908152603360205260408120549091168062000584576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f6761746520666f722075736572206e6f7420637265617465640000000000000060448201526064016200037a565b6040517f2a76892200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff848116600483015260009190831690632a76892290602401602060405180830381865afa158015620005f5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200061b9190620019aa565b11949350505050565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163003620006eb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c000000000000000000000000000000000000000060648201526084016200037a565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16620007617f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff161462000806576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f7879000000000000000000000000000000000000000060648201526084016200037a565b62000811816200108e565b604080516000808252602082019092526200082f9183919062001111565b50565b3360008181526033602052604081205490919073ffffffffffffffffffffffffffffffffffffffff1615620008c4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f6761746520666f72207573657220616c7265616479206372656174656400000060448201526064016200037a565b60008184604051602401620008db92919062001a36565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167ff399e22e000000000000000000000000000000000000000000000000000000001790525190915030908290620009649062001738565b6200097192919062001a36565b604051809103906000f0801580156200098e573d6000803e3d6000fd5b5073ffffffffffffffffffffffffffffffffffffffff8381166000908152603360205260409081902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001692841692909217909155519093507ffc2f18eccba57a9e2d5741d67801b39c93a664aead385f4e844e48808c92febd9062000a1c9084908790879062001a67565b60405180910390a15050919050565b60015473ffffffffffffffffffffffffffffffffffffffff1633811462000aaf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c657220213d2070656e64696e67206f776e657260448201526064016200037a565b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016300362000c0a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c000000000000000000000000000000000000000060648201526084016200037a565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1662000c807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff161462000d25576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f7879000000000000000000000000000000000000000060648201526084016200037a565b62000d30826200108e565b62000d3e8282600162001111565b5050565b60003073ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161462000e0b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c000000000000000060648201526084016200037a565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b6001547501000000000000000000000000000000000000000000900460ff161580801562000e7a57506001805474010000000000000000000000000000000000000000900460ff16105b8062000ead5750303b15801562000ead57506001805474010000000000000000000000000000000000000000900460ff16145b62000f3b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016200037a565b600180547fffffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffff1674010000000000000000000000000000000000000000179055801562000fc257600180547fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff1675010000000000000000000000000000000000000000001790555b62000fcc6200131c565b603280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8416179055801562000d3e57600180547fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff1681556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b60005473ffffffffffffffffffffffffffffffffffffffff1633146200082f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016200037a565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156200114757620004ec83620013f5565b8273ffffffffffffffffffffffffffffffffffffffff166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015620011cf575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252620011cc91810190620019aa565b60015b6200125d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f74205555505300000000000000000000000000000000000060648201526084016200037a565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc81146200130e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c6555554944000000000000000000000000000000000000000000000060648201526084016200037a565b50620004ec83838362001501565b6001547501000000000000000000000000000000000000000000900460ff16620013c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016200037a565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001633179055565b73ffffffffffffffffffffffffffffffffffffffff81163b6200149b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e74726163740000000000000000000000000000000000000060648201526084016200037a565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6200150c8362001532565b6000825111806200151a5750805b15620004ec576200152c838362001581565b50505050565b6200153d81620013f5565b60405173ffffffffffffffffffffffffffffffffffffffff8216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6060620015a983836040518060600160405280602781526020016200247d60279139620015b0565b9392505050565b606073ffffffffffffffffffffffffffffffffffffffff84163b62001658576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e7472616374000000000000000000000000000000000000000000000000000060648201526084016200037a565b6000808573ffffffffffffffffffffffffffffffffffffffff168560405162001682919062001aac565b600060405180830381855af49150503d8060008114620016bf576040519150601f19603f3d011682016040523d82523d6000602084013e620016c4565b606091505b5091509150620016d6828286620016e0565b9695505050505050565b60608315620016f1575081620015a9565b825115620017025782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200037a919062001aca565b61099d8062001ae083390190565b803573ffffffffffffffffffffffffffffffffffffffff811681146200176b57600080fd5b919050565b803580151581146200176b57600080fd5b6000806000606084860312156200179757600080fd5b620017a28462001746565b9250620017b26020850162001770565b9150620017c26040850162001770565b90509250925092565b60008060408385031215620017df57600080fd5b620017ea8362001746565b9150620017fa6020840162001746565b90509250929050565b6000602082840312156200181657600080fd5b620015a98262001746565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600067ffffffffffffffff808411156200186e576200186e62001821565b604051601f85017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715620018b757620018b762001821565b81604052809350858152868686011115620018d157600080fd5b858560208301376000602087830101525050509392505050565b600060208284031215620018fe57600080fd5b813567ffffffffffffffff8111156200191657600080fd5b8201601f810184136200192857600080fd5b620019398482356020840162001850565b949350505050565b600080604083850312156200195557600080fd5b620019608362001746565b9150602083013567ffffffffffffffff8111156200197d57600080fd5b8301601f810185136200198f57600080fd5b620019a08582356020840162001850565b9150509250929050565b600060208284031215620019bd57600080fd5b5051919050565b60005b83811015620019e1578181015183820152602001620019c7565b50506000910152565b6000815180845262001a04816020860160208601620019c4565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff83168152604060208201526000620019396040830184620019ea565b600073ffffffffffffffffffffffffffffffffffffffff80861683526060602084015262001a996060840186620019ea565b9150808416604084015250949350505050565b6000825162001ac0818460208701620019c4565b9190910192915050565b602081526000620015a96020830184620019ea56fe608060405260405161099d38038061099d8339810160408190526100229161044e565b61002e82826000610035565b5050610578565b61003e83610100565b6040516001600160a01b038416907f1cf3b03a6cf19fa2baba4df148e9dcabedea7f8a5c07840e207e5c089be95d3e90600090a260008251118061007f5750805b156100fb576100f9836001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100e9919061050e565b836102a360201b6100291760201c565b505b505050565b610113816102cf60201b6100551760201c565b6101725760405162461bcd60e51b815260206004820152602560248201527f455243313936373a206e657720626561636f6e206973206e6f74206120636f6e6044820152641d1c9858dd60da1b60648201526084015b60405180910390fd5b6101e6816001600160a01b0316635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156101b3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101d7919061050e565b6102cf60201b6100551760201c565b61024b5760405162461bcd60e51b815260206004820152603060248201527f455243313936373a20626561636f6e20696d706c656d656e746174696f6e206960448201526f1cc81b9bdd08184818dbdb9d1c9858dd60821b6064820152608401610169565b806102827fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d5060001b6102de60201b6100711760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b60606102c88383604051806060016040528060278152602001610976602791396102e1565b9392505050565b6001600160a01b03163b151590565b90565b60606001600160a01b0384163b6103495760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610169565b600080856001600160a01b0316856040516103649190610529565b600060405180830381855af49150503d806000811461039f576040519150601f19603f3d011682016040523d82523d6000602084013e6103a4565b606091505b5090925090506103b58282866103bf565b9695505050505050565b606083156103ce5750816102c8565b8251156103de5782518084602001fd5b8160405162461bcd60e51b81526004016101699190610545565b80516001600160a01b038116811461040f57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561044557818101518382015260200161042d565b50506000910152565b6000806040838503121561046157600080fd5b61046a836103f8565b60208401519092506001600160401b038082111561048757600080fd5b818501915085601f83011261049b57600080fd5b8151818111156104ad576104ad610414565b604051601f8201601f19908116603f011681019083821181831017156104d5576104d5610414565b816040528281528860208487010111156104ee57600080fd5b6104ff83602083016020880161042a565b80955050505050509250929050565b60006020828403121561052057600080fd5b6102c8826103f8565b6000825161053b81846020870161042a565b9190910192915050565b602081526000825180602084015261056481604085016020870161042a565b601f01601f19169190910160400192915050565b6103ef806105876000396000f3fe60806040523661001357610011610017565b005b6100115b610027610022610074565b610127565b565b606061004e83836040518060600160405280602781526020016103936027913961014b565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff163b151590565b90565b60006100b47fa3f0ad74e5423aebfd80d3ef4346578335a9a72aeaee59ff6cb3582b35133d505473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff16635c60da1b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156100fe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061012291906102cb565b905090565b3660008037600080366000845af43d6000803e808015610146573d6000f35b3d6000fd5b606073ffffffffffffffffffffffffffffffffffffffff84163b6101f6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f60448201527f6e7472616374000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6000808573ffffffffffffffffffffffffffffffffffffffff168560405161021e9190610325565b600060405180830381855af49150503d8060008114610259576040519150601f19603f3d011682016040523d82523d6000602084013e61025e565b606091505b509150915061026e828286610278565b9695505050505050565b6060831561028757508161004e565b8251156102975782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ed9190610341565b6000602082840312156102dd57600080fd5b815173ffffffffffffffffffffffffffffffffffffffff8116811461004e57600080fd5b60005b8381101561031c578181015183820152602001610304565b50506000910152565b60008251610337818460208701610301565b9190910192915050565b6020815260008251806020840152610360816040850160208701610301565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016919091016040019291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220337770a8c7d35689421cd7c10364ca61a1c4e30c6b2d7c86862592dfc69821d064736f6c63430008110033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a264697066735822122033e538500f461b024d9756f6bae89ae32363e6c1fa536bb1f964ab848286bbe164736f6c63430008110033";

type UserGateFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UserGateFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UserGateFactory__factory extends ContractFactory {
  constructor(...args: UserGateFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "UserGateFactory";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UserGateFactory> {
    return super.deploy(overrides || {}) as Promise<UserGateFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UserGateFactory {
    return super.attach(address) as UserGateFactory;
  }
  connect(signer: Signer): UserGateFactory__factory {
    return super.connect(signer) as UserGateFactory__factory;
  }
  static readonly contractName: "UserGateFactory";
  public readonly contractName: "UserGateFactory";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UserGateFactoryInterface {
    return new utils.Interface(_abi) as UserGateFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UserGateFactory {
    return new Contract(address, _abi, signerOrProvider) as UserGateFactory;
  }
}
