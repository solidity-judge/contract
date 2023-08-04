import { Signer, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Problem, ProblemInterface } from "../Problem";
type ProblemConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Problem__factory extends ContractFactory {
    constructor(...args: ProblemConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Problem>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Problem;
    connect(signer: Signer): Problem__factory;
    static readonly contractName: "Problem";
    readonly contractName: "Problem";
    static readonly bytecode = "0x608060405234801561001057600080fd5b506121fd806100206000396000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c8063845170ec116100cd578063af640d0f11610081578063cf5303cf11610066578063cf5303cf14610426578063d088ca3a14610446578063de22c8d41461044f57600080fd5b8063af640d0f14610401578063bf65eba81461040a57600080fd5b8063a169d122116100b2578063a169d12214610320578063a6c3e6b9146103d2578063aba6fe46146103f857600080fd5b8063845170ec146102fa578063896077c51461030d57600080fd5b8063334f0f59116101245780636e4b8333116101095780636e4b8333146102c1578063754d1d54146102d457806381894def146102e757600080fd5b8063334f0f59146101df5780636470a639146101f257600080fd5b806307e491f514610156578063195199f61461016b57806329dcb0cf1461017e5780632f6c7ccc1461019a575b600080fd5b61016961016436600461173a565b610471565b005b61016961017936600461177c565b61058c565b61018760075481565b6040519081526020015b60405180910390f35b6006546101ba9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610191565b6101696101ed366004611892565b610648565b610278610200366004611933565b600860205260009081526040902080546001820154600290920154909173ffffffffffffffffffffffffffffffffffffffff908116919081169062ffffff7401000000000000000000000000000000000000000082048116917701000000000000000000000000000000000000000000000090041685565b6040805195865273ffffffffffffffffffffffffffffffffffffffff9485166020870152939092169284019290925262ffffff918216606084015216608082015260a001610191565b6101696102cf36600461194e565b61087a565b6101696102e23660046119c3565b6109bb565b6101696102f5366004611a10565b610bac565b61016961030836600461177c565b610c26565b61016961031b366004611892565b610ce5565b61027861032e366004611933565b73ffffffffffffffffffffffffffffffffffffffff908116600090815260086020908152604091829020825160a08101845281548082526001830154861693820184905260029092015494851693810184905262ffffff740100000000000000000000000000000000000000008604811660608301819052770100000000000000000000000000000000000000000000009096041660809091018190529094919391565b6000546101ba9062010000900473ffffffffffffffffffffffffffffffffffffffff1681565b61018760015481565b61018760045481565b6104136105dc81565b60405161ffff9091168152602001610191565b6005546101ba9073ffffffffffffffffffffffffffffffffffffffff1681565b61018760025481565b61046261045d36600461177c565b610cff565b60405161019193929190611aa8565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff1633146104fd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6d73672e73656e646572206e6f7420617574686f72000000000000000000000060448201526064015b60405180910390fd5b60026000815461050c90611b1e565b909155506001805482916003916000918261052683611b1e565b91905055815260200190815260200160002081816105449190611c2b565b9050507fd47d89603b5f65c5893b4a688ddfc6f68a145f773ac60d9a23bc5d316f069fad600254610573610dc8565b604051610581929190611e47565b60405180910390a150565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff163314610613576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6d73672e73656e646572206e6f7420617574686f72000000000000000000000060448201526064016104f4565b60078190556040518181527fdb00f0341e024be397e058a193a27b85cc3e7f921640be77ddf155c9f8d37c5a90602001610581565b6009805490600061065883611b1e565b919050555060006106ec600060095460405160200161067991815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152828252805160209182012073ffffffffffffffffffffffffffffffffffffffff8a16918401919091529101604051602081830303815290604052805190602001201884610f6e565b905082156107c55773ffffffffffffffffffffffffffffffffffffffff84811660009081526008602090815260409091206001810180547fffffffffffffffffffffffff00000000000000000000000000000000000000001693851693909317909255835190840120905481146107bf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f696e76616c696420736f6c7574696f6e2068617368000000000000000000000060448201526064016104f4565b5061081c565b73ffffffffffffffffffffffffffffffffffffffff848116600090815260086020526040902060020180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169183169190911790555b6040805173ffffffffffffffffffffffffffffffffffffffff8681168252851515602083015283168183015290517fc7db9c128a69cb8d6973c2af190a7c471a2f3004971dafc7643d4beab74461c59181900360600190a150505050565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff163314610901576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f6d73672e73656e646572206e6f7420617574686f72000000000000000000000060448201526064016104f4565b60026000815461091090611b1e565b9091555060005b8181101561096e5782828281811061093157610931611ecf565b90506020028101906109439190611efe565b600082815260036020526040902061095b8282611c2b565b50610967905081611b1e565b9050610917565b5060018190556002547fd47d89603b5f65c5893b4a688ddfc6f68a145f773ac60d9a23bc5d316f069fad906109a1610dc8565b6040516109af929190611e47565b60405180910390a15050565b600054610100900460ff16158080156109db5750600054600160ff909116105b806109f55750303b1580156109f5575060005460ff166001145b610a81576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016104f4565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558015610adf57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b60048590556005805473ffffffffffffffffffffffffffffffffffffffff8086167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179092556006805492851692909116919091179055610b42846110d6565b8015610ba557600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050505050565b8015610bef5773ffffffffffffffffffffffffffffffffffffffff8083166000908152600860205260409020600190810154610beb92859291166111ba565b5050565b73ffffffffffffffffffffffffffffffffffffffff808316600090815260086020526040812060020154610beb92859291166111ba565b6001600754421115610c94576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f6f6e6c79206265666f726520646561646c696e6500000000000000000000000060448201526064016104f4565b3360008181526008602090815260409182902085905581518381529081018590527f3f7e81f1c8e479a52b2ec36c9a3df4d700ade5e5540b8303ebedfdd9aceeedc2910160405180910390a1505050565b610cf0838383610648565b610cfa8383610bac565b505050565b600360205260009081526040902080548190610d1a90611b56565b80601f0160208091040260200160405190810160405280929190818152602001828054610d4690611b56565b8015610d935780601f10610d6857610100808354040283529160200191610d93565b820191906000526020600020905b815481529060010190602001808311610d7657829003601f168201915b5050505060018301546002909301549192917bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16905083565b606060015467ffffffffffffffff811115610de557610de56117ce565b604051908082528060200260200182016040528015610e4e57816020015b60408051606080820183528152600060208083018290529282015282527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff909201910181610e035790505b50905060005b8151811015610f6a5760008181526003602052604090819020815160608101909252805482908290610e8590611b56565b80601f0160208091040260200160405190810160405280929190818152602001828054610eb190611b56565b8015610efe5780601f10610ed357610100808354040283529160200191610efe565b820191906000526020600020905b815481529060010190602001808311610ee157829003601f168201915b5050509183525050600182015460208201526002909101547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166040909101528251839083908110610f4e57610f4e611ecf565b602002602001018190525080610f6390611b1e565b9050610e54565b5090565b60008084471015610fdb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f437265617465323a20696e73756666696369656e742062616c616e636500000060448201526064016104f4565b8251600003611046576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f437265617465323a2062797465636f6465206c656e677468206973207a65726f60448201526064016104f4565b8383516020850187f5905073ffffffffffffffffffffffffffffffffffffffff81166110ce576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f437265617465323a204661696c6564206f6e206465706c6f790000000000000060448201526064016104f4565b949350505050565b600054610100900460ff1661116d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201527f6e697469616c697a696e6700000000000000000000000000000000000000000060648201526084016104f4565b6000805473ffffffffffffffffffffffffffffffffffffffff90921662010000027fffffffffffffffffffff0000000000000000000000000000000000000000ffff909216919091179055565b600154600090818167ffffffffffffffff8111156111da576111da6117ce565b604051908082528060200260200182016040528015611203578160200160208202803683370190505b50905060005b8281101561147b5760008181526003602052604080822081516060810190925280548290829061123890611b56565b80601f016020809104026020016040519081016040528092919081815260200182805461126490611b56565b80156112b15780601f10611286576101008083540402835291602001916112b1565b820191906000526020600020905b81548152906001019060200180831161129457829003601f168201915b5050509183525050600182015460208201526002909101547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1660409091015290506000806112fc88846115a1565b9150915081156113e5576005546040517ffabc0e7c00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063fabc0e7c9061135e9086908590600401611f3c565b602060405180830381865afa15801561137b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061139f9190611f6a565b8585815181106113b1576113b1611ecf565b602002602001019060028111156113ca576113ca611f8b565b908160028111156113dd576113dd611f8b565b905250611429565b60028585815181106113f9576113f9611ecf565b6020026020010190600281111561141257611412611f8b565b9081600281111561142557611425611f8b565b9052505b600085858151811061143d5761143d611ecf565b6020026020010151600281111561145657611456611f8b565b036114675761146487611b1e565b96505b5050508061147490611b1e565b9050611209565b5073ffffffffffffffffffffffffffffffffffffffff8616600090815260086020526040812090836114af86612710611fba565b6114b99190612000565b9050861561150e576002820180547fffffffffffffffffff000000ffffffffffffffffffffffffffffffffffffffff167401000000000000000000000000000000000000000062ffffff84160217905561155a565b6002820180547fffffffffffff000000ffffffffffffffffffffffffffffffffffffffffffffff167701000000000000000000000000000000000000000000000062ffffff8416021790555b7f513cda15eb3e6a8b83c0c5a3f01aa7e254cf058c407754a4f5bb210bc77803ee8882898660405161158f9493929190612014565b60405180910390a15050505050505050565b60006060611686846064856040015160656115bc91906120c4565b6115c6919061210b565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166105dc6309c5eabe60e01b87600001516040516024016116049190612146565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526116af565b909250905081156116a857808060200190518101906116a59190612159565b90505b9250929050565b6000606060008060008661ffff1667ffffffffffffffff8111156116d5576116d56117ce565b6040519080825280601f01601f1916602001820160405280156116ff576020820181803683370190505b50905060008087516020890160008d8df191503d925086831115611721578692505b828152826000602083013e909890975095505050505050565b60006020828403121561174c57600080fd5b813567ffffffffffffffff81111561176357600080fd5b82016060818503121561177557600080fd5b9392505050565b60006020828403121561178e57600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff811681146117b957600080fd5b919050565b803580151581146117b957600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611844576118446117ce565b604052919050565b600067ffffffffffffffff821115611866576118666117ce565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b6000806000606084860312156118a757600080fd5b6118b084611795565b92506118be602085016117be565b9150604084013567ffffffffffffffff8111156118da57600080fd5b8401601f810186136118eb57600080fd5b80356118fe6118f98261184c565b6117fd565b81815287602083850101111561191357600080fd5b816020840160208301376000602083830101528093505050509250925092565b60006020828403121561194557600080fd5b61177582611795565b6000806020838503121561196157600080fd5b823567ffffffffffffffff8082111561197957600080fd5b818501915085601f83011261198d57600080fd5b81358181111561199c57600080fd5b8660208260051b85010111156119b157600080fd5b60209290920196919550909350505050565b600080600080608085870312156119d957600080fd5b843593506119e960208601611795565b92506119f760408601611795565b9150611a0560608601611795565b905092959194509250565b60008060408385031215611a2357600080fd5b611a2c83611795565b91506116a5602084016117be565b60005b83811015611a55578181015183820152602001611a3d565b50506000910152565b60008151808452611a76816020860160208601611a3a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b606081526000611abb6060830186611a5e565b90508360208301527bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83166040830152949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611b4f57611b4f611aef565b5060010190565b600181811c90821680611b6a57607f821691505b602082108103611ba3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f821115610cfa57600081815260208120601f850160051c81016020861015611bd05750805b601f850160051c820191505b81811015611bef57828155600101611bdc565b505050505050565b600081357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff81168114611c2557600080fd5b92915050565b81357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1833603018112611c5d57600080fd5b8201803567ffffffffffffffff811115611c7657600080fd5b60208136038184011315611c8957600080fd5b611c9d82611c978654611b56565b86611ba9565b6000601f831160018114611cf15760008415611cbb57508482018301355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b178655611d8a565b6000868152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0851690835b82811015611d41578785018601358255938501936001909101908501611d20565b5085821015611d7e577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88760031b161c198585890101351681555b505060018460011b0186555b5050840135600184015550610beb9050611da660408401611bf7565b600283017bffffffffffffffffffffffffffffffffffffffffffffffffffffffff82167fffffffff000000000000000000000000000000000000000000000000000000008254161781555050565b6000815160608452611e096060850182611a5e565b9050602083015160208501527bffffffffffffffffffffffffffffffffffffffffffffffffffffffff60408401511660408501528091505092915050565b600060408201848352602060408185015281855180845260608601915060608160051b870101935082870160005b82811015611ec1577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa0888703018452611eaf868351611df4565b95509284019290840190600101611e75565b509398975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa1833603018112611f3257600080fd5b9190910192915050565b604081526000611f4f6040830185611df4565b8281036020840152611f618185611a5e565b95945050505050565b600060208284031215611f7c57600080fd5b81516003811061177557600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b8082028115828204841417611c2557611c25611aef565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60008261200f5761200f611fd1565b500490565b60006080820173ffffffffffffffffffffffffffffffffffffffff87168352602062ffffff87168185015285151560408501526080606085015281855180845260a08601915082870193506000805b828110156120b4578551600381106120a2577f4e487b710000000000000000000000000000000000000000000000000000000083526021600452602483fd5b84529484019492840192600101612063565b50919a9950505050505050505050565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff82811682821681810283169291811582850482141761210257612102611aef565b50505092915050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8084168061213a5761213a611fd1565b92169190910492915050565b6020815260006117756020830184611a5e565b60006020828403121561216b57600080fd5b815167ffffffffffffffff81111561218257600080fd5b8201601f8101841361219357600080fd5b80516121a16118f98261184c565b8181528560208385010111156121b657600080fd5b611f61826020830160208601611a3a56fea26469706673582212207f6435b8b2f74235f7756b021e8081dbcdcb4f35eca90ddd1ab66e567e43d0d964736f6c63430008110033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: ({
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
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
    static createInterface(): ProblemInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Problem;
}
export {};
