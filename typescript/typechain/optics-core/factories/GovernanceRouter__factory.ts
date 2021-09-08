/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GovernanceRouter,
  GovernanceRouterInterface,
} from "../GovernanceRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_localDomain",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "_recoveryTimelock",
        type: "uint256",
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
        name: "recoveryManager",
        type: "address",
      },
    ],
    name: "ExitRecovery",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recoveryManager",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "recoveryActiveAt",
        type: "uint256",
      },
    ],
    name: "InitiateRecovery",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "previousRouter",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "newRouter",
        type: "bytes32",
      },
    ],
    name: "SetRouter",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "previousGovernorDomain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "newGovernorDomain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "previousGovernor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newGovernor",
        type: "address",
      },
    ],
    name: "TransferGovernor",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousRecoveryManager",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newRecoveryManager",
        type: "address",
      },
    ],
    name: "TransferRecoveryManager",
    type: "event",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
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
            internalType: "bytes32",
            name: "to",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct GovernanceMessage.Call[]",
        name: "_calls",
        type: "tuple[]",
      },
    ],
    name: "callLocal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_destination",
        type: "uint32",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct GovernanceMessage.Call[]",
        name: "_calls",
        type: "tuple[]",
      },
    ],
    name: "callRemote",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "domains",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "exitRecovery",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "governor",
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
    name: "governorDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_origin",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_sender",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "handle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "inRecovery",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recoveryManager",
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
    name: "initiateRecoveryTimelock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "recoveryActiveAt",
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
    name: "recoveryManager",
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
    name: "recoveryTimelock",
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
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "routers",
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
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_router",
        type: "bytes32",
      },
    ],
    name: "setRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_router",
        type: "bytes32",
      },
    ],
    name: "setRouterLocal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
    ],
    name: "setXAppConnectionManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_newDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_newGovernor",
        type: "address",
      },
    ],
    name: "transferGovernor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newRecoveryManager",
        type: "address",
      },
    ],
    name: "transferRecoveryManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "xAppConnectionManager",
    outputs: [
      {
        internalType: "contract XAppConnectionManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b50604051620039b9380380620039b9833981016040819052620000349162000050565b60e09190911b6001600160e01b03191660805260a05262000087565b6000806040838503121562000063578182fd5b825163ffffffff8116811462000077578283fd5b6020939093015192949293505050565b60805160e01c60a0516138f7620000c2600039806104c45280610f8352508061083d52806108ae5280610fa75280611afd52506138f76000f3fe608060405234801561001057600080fd5b50600436106101825760003560e01c806363706be3116100d8578063de314b191161008c578063e8c6f83a11610066578063e8c6f83a146102bf578063f05151df146102d2578063ffa1ad74146102e757610182565b8063de314b191461029c578063e5429298146102a4578063e6b3d949146102ac57610182565b8063670a43c4116100bd578063670a43c4146102795780638d3638f414610281578063db2021ae1461028957610182565b806363706be31461025e57806366cf8fab1461026657610182565b806341bdc8b51161013a5780634fedbbb5116101145780634fedbbb5146102235780635585416c1461023657806356d5d4751461024b57610182565b806341bdc8b5146101ea5780634626abee146101fd578063485cc9551461021057610182565b80632ead72f61161016b5780632ead72f6146101ba578063316c92b6146101da5780633339df96146101e257610182565b80630c340a24146101875780630ce21995146101a5575b600080fd5b61018f6102fc565b60405161019c9190613354565b60405180910390f35b6101b86101b33660046131ec565b610318565b005b6101cd6101c8366004613144565b6103e2565b60405161019c9190613380565b6101b86103f4565b61018f610542565b6101b86101f836600461305c565b61055e565b6101b861020b3660046130b0565b610658565b6101b861021e366004613078565b610753565b6101b8610231366004613199565b6109e5565b61023e610bad565b60405161019c91906135f2565b6101b8610259366004613217565b610bd1565b6101b8610e64565b61023e61027436600461312c565b610f47565b6101cd610f81565b61023e610fa5565b6101b861029736600461317c565b610fc9565b61018f6110a2565b6101cd6110be565b6101b86102ba36600461305c565b6110c4565b6101b86102cd3660046131ec565b6111a3565b6102da611254565b60405161019c9190613375565b6102ef611275565b60405161019c919061367f565b60035473ffffffffffffffffffffffffffffffffffffffff1681565b610320611254565b6103835760035473ffffffffffffffffffffffffffffffffffffffff16331461037e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610375906133ce565b60405180910390fd5b6103d4565b60025473ffffffffffffffffffffffffffffffffffffffff1633146103d4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103759061354d565b6103de828261127a565b5050565b60056020526000908152604090205481565b6103fc611254565b15610433576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610375906134a8565b60025473ffffffffffffffffffffffffffffffffffffffff163314610484576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103759061354d565b600154156104be576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610375906134df565b6104e8427f000000000000000000000000000000000000000000000000000000000000000061130b565b600181905560025460405173ffffffffffffffffffffffffffffffffffffffff909116917f4c75781638d2c3a22c08e1295107f831b97683d017a1145733b743479a2ae225916105389190613380565b60405180910390a2565b60045473ffffffffffffffffffffffffffffffffffffffff1681565b610566611254565b6105c05760035473ffffffffffffffffffffffffffffffffffffffff1633146105bb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610375906133ce565b610611565b60025473ffffffffffffffffffffffffffffffffffffffff163314610611576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103759061354d565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b610660611254565b6106ba5760035473ffffffffffffffffffffffffffffffffffffffff1633146106b5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610375906133ce565b61070b565b60025473ffffffffffffffffffffffffffffffffffffffff16331461070b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103759061354d565b60005b8181101561074e5761074583838381811061072557fe5b9050602002810190610737919061368d565b61074090613744565b611388565b5060010161070e565b505050565b600054610100900460ff168061076c575061076c61144b565b8061077a575060005460ff16155b6107cf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806137d2602e913960400191505060405180910390fd5b600054610100900460ff1615801561083557600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b3360016108637f0000000000000000000000000000000000000000000000000000000000000000838361145c565b600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff86161790556108ac8561055e565b7f000000000000000000000000000000000000000000000000000000000000000063ffffffff16600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638d3638f46040518163ffffffff1660e01b815260040160206040518083038186803b15801561093b57600080fd5b505afa15801561094f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109739190613160565b63ffffffff16146109b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103759061343c565b5050801561074e57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055505050565b60035473ffffffffffffffffffffffffffffffffffffffff163314610a36576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610375906133ce565b610a3e611254565b15610a75576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610375906134a8565b6000610a8084611586565b90506000610a96610a9184866136e4565b6115d8565b9050600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639fa92f9d6040518163ffffffff1660e01b815260040160206040518083038186803b158015610b0057600080fd5b505afa158015610b14573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b389190613110565b73ffffffffffffffffffffffffffffffffffffffff1663fa31de018684846040518463ffffffff1660e01b8152600401610b7493929190613603565b600060405180830381600087803b158015610b8e57600080fd5b505af1158015610ba2573d6000803e3d6000fd5b505050505050505050565b60035474010000000000000000000000000000000000000000900463ffffffff1681565b600480546040517f5190bc5300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff90911691635190bc5391610c2691339101613354565b60206040518083038186803b158015610c3e57600080fd5b505afa158015610c52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c7691906130f0565b610cac576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037590613471565b8282610cb882826117ad565b610cee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037590613405565b6000610cfa84826117fa565b9050610d277fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000821661181e565b15610d6457610d5f610d5a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316611879565b6118c7565b610e5c565b610d8f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008216611960565b15610dc757610d5f610dc27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000083166119be565b6119d8565b610df27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008216611a63565b15610e2a57610d5f610e257fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316611a6c565b611a86565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610375906135bb565b505050505050565b60025473ffffffffffffffffffffffffffffffffffffffff163314610eb5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103759061354d565b600154610eee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037590613397565b60006001556002546040517f5397c02652a688dd1cac8544f233b3daaf96d7a9f974af80b70ab1538359e26191610f3d9173ffffffffffffffffffffffffffffffffffffffff90911690613354565b60405180910390a1565b60068181548110610f5757600080fd5b9060005260206000209060089182820401919006600402915054906101000a900463ffffffff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60035473ffffffffffffffffffffffffffffffffffffffff16331461101a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610375906133ce565b611022611254565b15611059576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610375906134a8565b600061106483611afb565b905061107183838361145c565b801561107d57506103de565b60006110918461108c85611b2a565b611b43565b905061109c81611b70565b50505050565b60025473ffffffffffffffffffffffffffffffffffffffff1681565b60015481565b60025473ffffffffffffffffffffffffffffffffffffffff163314611115576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103759061354d565b60025460405173ffffffffffffffffffffffffffffffffffffffff8084169216907f3b3f758030fa296b85e15008f79cd22af8ffd2a7dd360d8963dcaf8e9fa2b5ff90600090a3600280547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60035473ffffffffffffffffffffffffffffffffffffffff1633146111f4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610375906133ce565b6111fc611254565b15611233576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610375906134a8565b61123d828261127a565b60006112498383611d68565b905061074e81611b70565b60015460009080158015904283111590829061126d5750805b935050505090565b600081565b63ffffffff8216600081815260056020526040908190205490519091907fe1cc453e5e6d48a5e3dd7dc6c72117211d2bea20fbb91fd980ebc3e7f73fe546906112c69084908690613389565b60405180910390a2816112e2576112dc83611d90565b506103de565b806112f0576112f083611e37565b5063ffffffff91909116600090815260056020526040902055565b60008282018381101561137f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b90505b92915050565b606060006113998360000151611e97565b905060008173ffffffffffffffffffffffffffffffffffffffff1684602001516040516113c691906132ac565b6000604051808303816000865af19150503d8060008114611403576040519150601f19603f3d011682016040523d82523d6000602084013e611408565b606091505b509350905080611444576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037590613516565b5050919050565b600061145630611e9a565b15905090565b8061146c5761146a83611586565b505b60008161147a57600061147c565b825b60035460405191925073ffffffffffffffffffffffffffffffffffffffff80841692908216917f4daaa39e87dee84708195369c30e97baa0665dc8562ac10535a0f3a9329943aa916114ee9174010000000000000000000000000000000000000000900463ffffffff16908990613668565b60405180910390a36003805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff000000000000000000000000000000000000000063ffffffff90961674010000000000000000000000000000000000000000027fffffffffffffffff00000000ffffffffffffffffffffffffffffffffffffffff9093169290921794909416179092555050565b63ffffffff8116600090815260056020526040902054806115d3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161037590613584565b919050565b805160609060006002820167ffffffffffffffff811180156115f957600080fd5b50604051908082528060200260200182016040528015611623578160200160208202803683370190505b5090506116716000600160405160200161163d91906132c8565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052906117fa565b8160008151811061167e57fe5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009092166020928302919091018201526040516116c49160009161163d91869101613324565b816001815181106116d157fe5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009092166020928302919091019091015260005b8281101561179b57600085828151811061171b57fe5b60200260200101519050600061174e60008360000151846020015151856020015160405160200161163d9392919061327f565b90508084600285018151811061176057fe5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000909216602092830291909101909101525050600101611705565b506117a581611ea0565b949350505050565b60035460009063ffffffff848116740100000000000000000000000000000000000000009092041614801561137f57505063ffffffff919091166000908152600560205260409020541490565b81516000906020840161181564ffffffffff85168284611ef0565b95945050505050565b6000600161182b83611f51565b60ff16148015611382575060406118637fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416611f81565b6bffffffffffffffffffffffff16101592915050565b60006118848261181e565b156118bf576118b860015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000841690611f95565b90506115d3565b611382611fbb565b8060016118f8815b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000841690611fdf565b5060006119267fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000851661215f565b905060005b81518110156119595761195082828151811061194357fe5b6020026020010151611388565b5060010161192b565b5050505050565b600060025b60ff1661197183611f51565b60ff16148015611382575060256119a97fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416611f81565b6bffffffffffffffffffffffff161492915050565b60006119c982611960565b156118bf576118b8600261188f565b8060026119e4816118cf565b506000611a127fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008516612302565b90506000611a49611a447fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008716612333565b611e97565b90506000611a5683611afb565b9050610e5c83838361145c565b60006003611965565b6000611a7782611a63565b156118bf576118b8600361188f565b806003611a92816118cf565b506000611ac07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008516612302565b90506000611aef7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008616612333565b9050611959828261127a565b7f000000000000000000000000000000000000000000000000000000000000000063ffffffff90811691161490565b73ffffffffffffffffffffffffffffffffffffffff1690565b606061137f611b6b611b6660006002878760405160200161163d939291906132dd565b612364565b612399565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639fa92f9d6040518163ffffffff1660e01b815260040160206040518083038186803b158015611bda57600080fd5b505afa158015611bee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c129190613110565b905060005b60065481101561074e57600063ffffffff1660068281548110611c3657fe5b6000918252602090912060088204015460079091166004026101000a900463ffffffff1614611d60578173ffffffffffffffffffffffffffffffffffffffff1663fa31de0160068381548110611c8857fe5b90600052602060002090600891828204019190066004029054906101000a900463ffffffff166005600060068681548110611cbf57fe5b6000918252602080832060088304015463ffffffff6004600790941684026101000a909104168452830193909352604091820190205490517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b168152611d2d9392899101613603565b600060405180830381600087803b158015611d4757600080fd5b505af1158015611d5b573d6000803e3d6000fd5b505050505b600101611c17565b606061137f611b6b611d8b60006003878760405160200161163d939291906132dd565b6123dd565b63ffffffff811660009081526005602052604081208190555b6006548110156103de578163ffffffff1660068281548110611dc757fe5b6000918252602090912060088204015460079091166004026101000a900463ffffffff161415611e2c5760068181548110611dfe57fe5b90600052602060002090600891828204019190066004026101000a81549063ffffffff021916905550611e34565b600101611da9565b50565b600680546001810182556000919091527ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f6008820401805460079092166004026101000a63ffffffff818102199093169390921691909102919091179055565b90565b3b151590565b6040516060906000611eb584602084016123eb565b90506000611ec282611f81565b6bffffffffffffffffffffffff1690506000611edd83612463565b9184525082016020016040525092915050565b600080611efd8484612477565b9050604051811115611f0d575060005b80611f3b577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050611f4a565b611f468585856124e9565b9150505b9392505050565b60006113827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000083168260016124fc565b60181c6bffffffffffffffffffffffff1690565b60d81b7affffffffffffffffffffffffffffffffffffffffffffffffffffff9091161790565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000090565b6000611feb838361251d565b612158576000612009611ffd8561253f565b64ffffffffff16612545565b915050600061201e8464ffffffffff16612545565b604080517f5479706520617373657274696f6e206661696c65642e20476f742030780000006020808301919091527fffffffffffffffffffff0000000000000000000000000000000000000000000060b088811b8216603d8501527f2e20457870656374656420307800000000000000000000000000000000000000604785015285901b1660548301528251603e818403018152605e8301938490527f08c379a000000000000000000000000000000000000000000000000000000000909352606282018181528351608284015283519496509294508493839260a2019185019080838360005b8381101561211d578181015183820152602001612105565b50505050905090810190601f16801561214a5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5090919050565b606060006121917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000084166001806124fc565b905060006122026002806121c67fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008816611f81565b6bffffffffffffffffffffffff160360017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008816929190612619565b905060008260ff1667ffffffffffffffff8111801561222057600080fd5b5060405190808252806020026020018201604052801561225a57816020015b612247612f10565b81526020019060019003908161223f5790505b50905060005b600061228d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008516611f81565b6bffffffffffffffffffffffff1611156122f9576122aa836126a9565b8282815181106122b657fe5b6020908102919091010151526122cb836126d9565b8282815181106122d757fe5b6020026020010151602001819052506122ef83612718565b9250600101612260565b50949350505050565b60006113827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316600160046124fc565b60006113827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316600560206127a3565b6000611382612372836119be565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000016612911565b60606000806123a784611f81565b6bffffffffffffffffffffffff16905060405191508192506123cc848360200161298b565b508181016020016040529052919050565b600061138261237283611a6c565b6000604051828111156123fe5760206060fd5b506000805b845181101561245657600085828151811061241a57fe5b602002602001015190506124308184870161298b565b5061243a81611f81565b6bffffffffffffffffffffffff16929092019150600101612403565b506117a5600084836124e9565b600061246e82612ab7565b60200292915050565b8181018281101561138257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4f766572666c6f7720647572696e67206164646974696f6e2e00000000000000604482015290519081900360640190fd5b606092831b9190911790911b1760181b90565b60008160200360080260ff166125138585856127a3565b901c949350505050565b60008164ffffffffff166125308461253f565b64ffffffffff16149392505050565b60d81c90565b600080601f5b600f8160ff1611156125ad5760ff600882021684901c61256a81612aeb565b61ffff16841793508160ff1660101461258557601084901b93505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161254b565b50600f5b60ff8160ff1610156126135760ff600882021684901c6125d081612aeb565b61ffff16831792508160ff166000146125eb57601083901b92505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016125b1565b50915091565b60008061262586612b1b565b6bffffffffffffffffffffffff16905061263e86612b2f565b6126528561264c8489612477565b90612477565b1115612681577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009150506117a5565b61268b8186612477565b905061269f8364ffffffffff168286611ef0565b9695505050505050565b60006113827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000083168260206127a3565b6060611382611b6b60406126ec85612b59565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000861691906004612619565b6000816001612726816118cf565b50600061273285612b59565b604001905061181581806127677fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008916611f81565b6bffffffffffffffffffffffff160360017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008916929190612619565b600060ff82166127b557506000611f4a565b6127be84611f81565b6bffffffffffffffffffffffff166127d98460ff8516612477565b111561287b5761281a6127eb85612b1b565b6bffffffffffffffffffffffff1661280286611f81565b6bffffffffffffffffffffffff16858560ff16612b89565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181815283516024840152835190928392604490910191908501908083836000831561211d578181015183820152602001612105565b60208260ff1611156128d8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180613800603a913960400191505060405180910390fd5b6008820260006128e786612b1b565b6bffffffffffffffffffffffff169050600061290283612ce4565b91909501511695945050505050565b600061291c82612d2d565b61298757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f56616c696469747920617373657274696f6e206661696c656400000000000000604482015290519081900360640190fd5b5090565b600061299683612d6a565b6129eb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602881526020018061383a6028913960400191505060405180910390fd5b6129f483612d2d565b612a49576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180613862602b913960400191505060405180910390fd5b6000612a5484611f81565b6bffffffffffffffffffffffff1690506000612a6f85612b1b565b6bffffffffffffffffffffffff1690506000604051905084811115612a945760206060fd5b8285848460045afa5061269f612aa98761253f565b64ffffffffff1686856124e9565b60006020612add6020612ac985611f81565b6bffffffffffffffffffffffff1690612477565b81612ae457fe5b0492915050565b6000612afd60048360ff16901c612d7c565b60ff161760081b62ffff0016612b1282612d7c565b60ff1617919050565b60781c6bffffffffffffffffffffffff1690565b6000612b3a82611f81565b612b4383612b1b565b016bffffffffffffffffffffffff169050919050565b60006113827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000083166020806127a3565b60606000612b9686612545565b9150506000612ba486612545565b9150506000612bb286612545565b9150506000612bc086612545565b91505083838383604051602001808061388d603591397fffffffffffff000000000000000000000000000000000000000000000000000060d087811b821660358401527f2077697468206c656e6774682030780000000000000000000000000000000000603b84015286901b16604a82015260500160216137b182397fffffffffffff000000000000000000000000000000000000000000000000000060d094851b811660218301527f2077697468206c656e677468203078000000000000000000000000000000000060278301529290931b9091166036830152507f2e00000000000000000000000000000000000000000000000000000000000000603c82015260408051601d818403018152603d90920190529b9a5050505050505050505050565b7f80000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9091011d90565b6000612d388261253f565b64ffffffffff1664ffffffffff1415612d53575060006115d3565b6000612d5e83612b2f565b60405110199392505050565b6000612d7582612ee8565b1592915050565b600060f08083179060ff82161415612d985760309150506115d3565b8060ff1660f11415612dae5760319150506115d3565b8060ff1660f21415612dc45760329150506115d3565b8060ff1660f31415612dda5760339150506115d3565b8060ff1660f41415612df05760349150506115d3565b8060ff1660f51415612e065760359150506115d3565b8060ff1660f61415612e1c5760369150506115d3565b8060ff1660f71415612e325760379150506115d3565b8060ff1660f81415612e485760389150506115d3565b8060ff1660f91415612e5e5760399150506115d3565b8060ff1660fa1415612e745760619150506115d3565b8060ff1660fb1415612e8a5760629150506115d3565b8060ff1660fc1415612ea05760639150506115d3565b8060ff1660fd1415612eb65760649150506115d3565b8060ff1660fe1415612ecc5760659150506115d3565b8060ff1660ff1415612ee25760669150506115d3565b50919050565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009081161490565b60408051808201909152600081526060602082015290565b60008083601f840112612f39578182fd5b50813567ffffffffffffffff811115612f50578182fd5b6020830191508360208083028501011115612f6a57600080fd5b9250929050565b600082601f830112612f81578081fd5b813567ffffffffffffffff811115612f9557fe5b612fc660207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016136c0565b818152846020838601011115612fda578283fd5b816020850160208301379081016020019190915292915050565b600060408284031215613005578081fd5b6040516040810167ffffffffffffffff828210818311171561302357fe5b8160405282935084358352602085013591508082111561304257600080fd5b5061304f85828601612f71565b6020830152505092915050565b60006020828403121561306d578081fd5b813561137f8161377c565b6000806040838503121561308a578081fd5b82356130958161377c565b915060208301356130a58161377c565b809150509250929050565b600080602083850312156130c2578182fd5b823567ffffffffffffffff8111156130d8578283fd5b6130e485828601612f28565b90969095509350505050565b600060208284031215613101578081fd5b8151801515811461137f578182fd5b600060208284031215613121578081fd5b815161137f8161377c565b60006020828403121561313d578081fd5b5035919050565b600060208284031215613155578081fd5b813561137f8161379e565b600060208284031215613171578081fd5b815161137f8161379e565b6000806040838503121561318e578182fd5b82356130958161379e565b6000806000604084860312156131ad578081fd5b83356131b88161379e565b9250602084013567ffffffffffffffff8111156131d3578182fd5b6131df86828701612f28565b9497909650939450505050565b600080604083850312156131fe578182fd5b82356132098161379e565b946020939093013593505050565b60008060006060848603121561322b578283fd5b83356132368161379e565b925060208401359150604084013567ffffffffffffffff811115613258578182fd5b61326486828701612f71565b9150509250925092565b6005811061327857fe5b60f81b9052565b6000848252836020830152825161329d816040850160208701613750565b91909101604001949350505050565b600082516132be818460208701613750565b9190910192915050565b60006132d4828461326e565b50600101919050565b60006132e9828661326e565b5060e09290921b7fffffffff000000000000000000000000000000000000000000000000000000001660018301526005820152602501919050565b60f89190911b7fff0000000000000000000000000000000000000000000000000000000000000016815260010190565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b901515815260200190565b90815260200190565b918252602082015260400190565b60208082526016908201527f7265636f76657279206e6f7420696e6974696174656400000000000000000000604082015260600190565b60208082526014908201527f212063616c6c656420627920676f7665726e6f72000000000000000000000000604082015260600190565b6020808252600f908201527f21676f7665726e6f72526f757465720000000000000000000000000000000000604082015260600190565b6020808252818101527f58417070436f6e6e656374696f6e4d616e616765722062616420646f6d61696e604082015260600190565b60208082526008908201527f217265706c696361000000000000000000000000000000000000000000000000604082015260600190565b6020808252600b908201527f696e207265636f76657279000000000000000000000000000000000000000000604082015260600190565b6020808252601a908201527f7265636f7665727920616c726561647920696e69746961746564000000000000604082015260600190565b6020808252600b908201527f63616c6c206661696c6564000000000000000000000000000000000000000000604082015260600190565b6020808252601c908201527f212063616c6c6564206279207265636f76657279206d616e6167657200000000604082015260600190565b60208082526007908201527f21726f7574657200000000000000000000000000000000000000000000000000604082015260600190565b60208082526013908201527f2176616c6964206d657373616765207479706500000000000000000000000000604082015260600190565b63ffffffff91909116815260200190565b600063ffffffff85168252836020830152606060408301528251806060840152613634816080850160208701613750565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01691909101608001949350505050565b63ffffffff92831681529116602082015260400190565b60ff91909116815260200190565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc18336030181126132be578182fd5b60405181810167ffffffffffffffff811182821017156136dc57fe5b604052919050565b600067ffffffffffffffff8311156136f857fe5b602061370781828602016136c0565b8481528181019084845b87811015613738576137263683358901612ff4565b84529284019290840190600101613711565b50909695505050505050565b60006113823683612ff4565b60005b8381101561376b578181015183820152602001613753565b8381111561109c5750506000910152565b73ffffffffffffffffffffffffffffffffffffffff81168114611e3457600080fd5b63ffffffff81168114611e3457600080fdfe2e20417474656d7074656420746f20696e646578206174206f6666736574203078496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656454797065644d656d566965772f696e646578202d20417474656d7074656420746f20696e646578206d6f7265207468616e20333220627974657354797065644d656d566965772f636f7079546f202d204e756c6c20706f696e74657220646572656654797065644d656d566965772f636f7079546f202d20496e76616c696420706f696e74657220646572656654797065644d656d566965772f696e646578202d204f76657272616e2074686520766965772e20536c696365206973206174203078a2646970667358221220483ed5f1e836744bb42d665666429ae182496bb3fcc62b9e8b1c09371cdfbc8464736f6c63430007060033";

export class GovernanceRouter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _localDomain: BigNumberish,
    _recoveryTimelock: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GovernanceRouter> {
    return super.deploy(
      _localDomain,
      _recoveryTimelock,
      overrides || {}
    ) as Promise<GovernanceRouter>;
  }
  getDeployTransaction(
    _localDomain: BigNumberish,
    _recoveryTimelock: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _localDomain,
      _recoveryTimelock,
      overrides || {}
    );
  }
  attach(address: string): GovernanceRouter {
    return super.attach(address) as GovernanceRouter;
  }
  connect(signer: Signer): GovernanceRouter__factory {
    return super.connect(signer) as GovernanceRouter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GovernanceRouterInterface {
    return new utils.Interface(_abi) as GovernanceRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GovernanceRouter {
    return new Contract(address, _abi, signerOrProvider) as GovernanceRouter;
  }
}
