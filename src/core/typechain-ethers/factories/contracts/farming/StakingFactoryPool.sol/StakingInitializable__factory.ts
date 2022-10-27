/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  StakingInitializable,
  StakingInitializableInterface,
} from "../../../../contracts/farming/StakingFactoryPool.sol/StakingInitializable";

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
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EmergencyWithdraw",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "poolLimitPerUser",
        type: "uint256",
      },
    ],
    name: "NewPoolLimit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardPerBlock",
        type: "uint256",
      },
    ],
    name: "NewRewardPerBlock",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "startBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endBlock",
        type: "uint256",
      },
    ],
    name: "NewStartAndEndBlocks",
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
        indexed: false,
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "RewardsStop",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokenRecovery",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "lastRewardBlock",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stakedTokenSupply",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "accTokenPerShare",
        type: "uint256",
      },
    ],
    name: "UpdatePool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "PRECISION_FACTOR",
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
    name: "STAKING_FACTORY",
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
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "emergencyRewardWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "hasUserLimit",
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
        name: "_stakedToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_rewardPerBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_rewardEndBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_poolLimitPerUser",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_numberBlocksForUserLimit",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_multisig",
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
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingReward",
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
    name: "pool",
    outputs: [
      {
        internalType: "bool",
        name: "isInitialized",
        type: "bool",
      },
      {
        internalType: "address",
        name: "stakedToken",
        type: "address",
      },
      {
        internalType: "bool",
        name: "userLimit",
        type: "bool",
      },
      {
        internalType: "address",
        name: "rewardToken",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "startBlock",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "rewardEndBlock",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "lastRewardBlock",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "numberBlocksForUserLimit",
        type: "uint64",
      },
      {
        internalType: "uint256",
        name: "poolLimitPerUser",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accTokenPerShare",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardPerBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalStaked",
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
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
    ],
    name: "recoverToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stopReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
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
        internalType: "bool",
        name: "_userLimit",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "_poolLimitPerUser",
        type: "uint256",
      },
    ],
    name: "updatePoolLimitPerUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_rewardPerBlock",
        type: "uint256",
      },
    ],
    name: "updateRewardPerBlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_rewardEndBlock",
        type: "uint256",
      },
    ],
    name: "updateStartAndEndBlocks",
    outputs: [],
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
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
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
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5061001a33610027565b6001805533608052610077565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b608051611ce46100996000396000818161031501526104bf0152611ce46000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806392e8990e116100ad578063ccd34cd511610071578063ccd34cd51461034a578063db2e21bc14610367578063f2fde38b1461036f578063f40f0f5214610382578063feaea5861461039557600080fd5b806392e8990e146102d25780639513997f146102ea578063a0b40905146102fd578063aac551e114610310578063b6b55f251461033757600080fd5b80632e1a7d4d116100f45780632e1a7d4d14610277578063662a2cb51461028a578063715018a61461029d57806380dc0672146102a55780638da5cb5b146102ad57600080fd5b806301f8a9761461012657806316f0115b1461013b5780631959a002146102285780632aa2c38114610264575b600080fd5b61013961013436600461195b565b6103a8565b005b6002546003546004546005546006546007546008546101aa9660ff808216976001600160a01b036101008404811698600160a81b90940490921696918116956001600160401b03600160a01b90920482169584831695600160401b8604841695600160801b900490931693928c565b604080519c15158d526001600160a01b039b8c1660208e0152991515998c01999099529890961660608a01526001600160401b0394851660808a015292841660a089015290831660c08801529190911660e0860152610100850152610120840152610140830191909152610160820152610180015b60405180910390f35b61024f610236366004611990565b6009602052600090815260409020805460019091015482565b6040805192835260208301919091520161021f565b6101396102723660046119b2565b61046b565b61013961028536600461195b565b610752565b610139610298366004611a26565b6108e8565b610139610983565b6101396109b9565b6000546001600160a01b03165b6040516001600160a01b03909116815260200161021f565b6102da610a41565b604051901515815260200161021f565b6101396102f8366004611a52565b610aa0565b61013961030b366004611a82565b610cbe565b6102ba7f000000000000000000000000000000000000000000000000000000000000000081565b61013961034536600461195b565b610de0565b610359678ac7230489e8000081565b60405190815260200161021f565b610139610fbb565b61013961037d366004611990565b611060565b610359610390366004611990565b6110fb565b6101396103a3366004611aae565b611215565b6000546001600160a01b031633146103db5760405162461bcd60e51b81526004016103d290611ad8565b60405180910390fd5b600354600160a01b90046001600160401b0316431061042f5760405162461bcd60e51b815260206004820152601060248201526f141bdbdb081a185cc81cdd185c9d195960821b60448201526064016103d2565b60078190556040518181527f0c4d677eef92893ac7ec52faf8140fc6c851ab4736302b4f3a89dfb20696a0df906020015b60405180910390a150565b60025460ff16156104b45760405162461bcd60e51b8152602060048201526013602482015272105b1c9958591e481a5b9a5d1a585b1a5e9959606a1b60448201526064016103d2565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461051a5760405162461bcd60e51b815260206004820152600b60248201526a4e6f7420666163746f727960a81b60448201526064016103d2565b83851061055f5760405162461bcd60e51b8152602060048201526013602482015272496e76616c696420737461727420626c6f636b60681b60448201526064016103d2565b6000876001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561059f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c39190611b0d565b60ff169050601e811061060f5760405162461bcd60e51b815260206004820152601460248201527304d757374206265206c657373207468616e2033360641b60448201526064016103d2565b600280546001600160a01b03808c16610100026001600160a81b03199092169190911760011790915560038054918a166001600160a01b031990921691909117905561065a86611496565b600380546001600160401b0392909216600160a01b0267ffffffffffffffff60a01b1990921691909117905561068f85611496565b6004805467ffffffffffffffff19166001600160401b03929092169190911790556106b986611496565b600480546001600160401b0392909216600160401b0267ffffffffffffffff60401b199092169190911790556007879055831561073e576002805460ff60a81b1916600160a81b179055600584905561071183611496565b600480546001600160401b0392909216600160801b0267ffffffffffffffff60801b199092169190911790555b61074782611060565b505050505050505050565b600260015414156107755760405162461bcd60e51b81526004016103d290611b30565b600260015533600090815260096020526040902080548211156107da5760405162461bcd60e51b815260206004820152601b60248201527f416d6f756e7420746f20776974686472617720746f6f2068696768000000000060448201526064016103d2565b6107e2611502565b6006546001820154825460009190678ac7230489e8000090610805908590611b7d565b61080f9190611b9c565b6108199190611bbe565b9050831561086657825461082e908590611bbe565b835560088054859190600090610845908490611bbe565b90915550506002546108669061010090046001600160a01b03163386611607565b801561088357600354610883906001600160a01b03163383611607565b8254678ac7230489e800009061089a908490611b7d565b6108a49190611b9c565b600184015560405184815233907f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a94243649060200160405180910390a25050600180555050565b6000546001600160a01b031633146109125760405162461bcd60e51b81526004016103d290611ad8565b6001600160a01b0381166109685760405162461bcd60e51b815260206004820152601c60248201527f576974686472617720746f20746865207a65726f20616464726573730000000060448201526064016103d2565b60035461097f906001600160a01b03168284611607565b5050565b6000546001600160a01b031633146109ad5760405162461bcd60e51b81526004016103d290611ad8565b6109b76000611752565b565b6000546001600160a01b031633146109e35760405162461bcd60e51b81526004016103d290611ad8565b6109ec43611496565b6004805467ffffffffffffffff19166001600160401b039290921691821790556040519081527ffed9fcb0ca3d1e761a4b929792bb24082fba92dca81252646ad306d3068065669060200160405180910390a1565b600254600090600160a81b900460ff161580610a8f5750600454600354610a82916001600160401b03600160801b909104811691600160a01b900416611bd5565b6001600160401b03164310155b15610a9a5750600090565b50600190565b6000546001600160a01b03163314610aca5760405162461bcd60e51b81526004016103d290611ad8565b600354600160a01b90046001600160401b03164310610b1e5760405162461bcd60e51b815260206004820152601060248201526f141bdbdb081a185cc81cdd185c9d195960821b60448201526064016103d2565b808210610b845760405162461bcd60e51b815260206004820152602e60248201527f4e6577207374617274426c6f636b206d757374206265206c6f7765722074686160448201526d6e206e657720656e64426c6f636b60901b60648201526084016103d2565b814310610bec5760405162461bcd60e51b815260206004820152603060248201527f4e6577207374617274426c6f636b206d7573742062652068696768657220746860448201526f616e2063757272656e7420626c6f636b60801b60648201526084016103d2565b610bf582611496565b600380546001600160401b0392909216600160a01b0267ffffffffffffffff60a01b19909216919091179055610c2a81611496565b6004805467ffffffffffffffff19166001600160401b0392909216919091179055610c5482611496565b600480546001600160401b0392909216600160401b0267ffffffffffffffff60401b1990921691909117905560408051838152602081018390527f7cd0ab87d19036f3dfadadb232c78aa4879dda3f0c994a9d637532410ee2ce0691015b60405180910390a15050565b6000546001600160a01b03163314610ce85760405162461bcd60e51b81526004016103d290611ad8565b600254600160a81b900460ff16610d2f5760405162461bcd60e51b815260206004820152600b60248201526a135d5cdd081899481cd95d60aa1b60448201526064016103d2565b8115610d90576005548111610d865760405162461bcd60e51b815260206004820152601860248201527f4e6577206c696d6974206d75737420626520686967686572000000000000000060448201526064016103d2565b6005819055610dad565b6002805460ff60a81b1916600160a81b8415150217905560006005555b6005546040519081527f241f67ee5f41b7a5cabf911367329be7215900f602ebfc47f89dce2a6bcd847c90602001610cb2565b60026001541415610e035760405162461bcd60e51b81526004016103d290611b30565b6002600155336000908152600960205260409020610e1f610a41565b6002805460ff60a81b1916600160a81b9215158302179081905560ff919004161580610e5857506005548154610e559084611c00565b11155b610ea45760405162461bcd60e51b815260206004820152601b60248201527f4465706f7369743a20416d6f756e742061626f7665206c696d6974000000000060448201526064016103d2565b610eac611502565b600654815415610f0b5760008260010154678ac7230489e80000838560000154610ed69190611b7d565b610ee09190611b9c565b610eea9190611bbe565b90508015610f0957600354610f09906001600160a01b03163383611607565b505b8215610f57578154610f1e908490611c00565b825560088054849190600090610f35908490611c00565b9091555050600254610f579061010090046001600160a01b03163330866117a2565b8154678ac7230489e8000090610f6e908390611b7d565b610f789190611b9c565b600183015560405183815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a250506001805550565b60026001541415610fde5760405162461bcd60e51b81526004016103d290611b30565b60026001908155336000908152600960205260408120805482825592810191909155908015611023576002546110239061010090046001600160a01b03163383611607565b60405181815233907f5fafa99d0643513820be26656b45130b01e1c03062e1266bf36f88cbd3bd96959060200160405180910390a2505060018055565b6000546001600160a01b0316331461108a5760405162461bcd60e51b81526004016103d290611ad8565b6001600160a01b0381166110ef5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103d2565b6110f881611752565b50565b6001600160a01b0381166000908152600960205260408120600854600654600454600160401b90046001600160401b03164311801561113957508115155b156111dc5760045460009061115e90600160401b90046001600160401b0316436118fe565b6007549091506000906111719083611b7d565b9050600084611188678ac7230489e8000084611b7d565b6111929190611b9c565b61119c9085611c00565b90508560010154678ac7230489e800008288600001546111bc9190611b7d565b6111c69190611b9c565b6111d09190611bbe565b98975050505050505050565b60018301548354678ac7230489e80000906111f8908490611b7d565b6112029190611b9c565b61120c9190611bbe565b95945050505050565b6000546001600160a01b0316331461123f5760405162461bcd60e51b81526004016103d290611ad8565b6001600160a01b0381166112955760405162461bcd60e51b815260206004820152601b60248201527f5265636f76657220746f20746865207a65726f2061646472657373000000000060448201526064016103d2565b6002546001600160a01b038381166101009092041614156113085760405162461bcd60e51b815260206004820152602760248201527f4f7065726174696f6e733a2043616e6e6f74207265636f766572207374616b6560448201526632103a37b5b2b760c91b60648201526084016103d2565b6003546001600160a01b03838116911614156113765760405162461bcd60e51b815260206004820152602760248201527f4f7065726174696f6e733a2043616e6e6f74207265636f76657220726577617260448201526632103a37b5b2b760c91b60648201526084016103d2565b6040516370a0823160e01b81523060048201526000906001600160a01b038416906370a0823190602401602060405180830381865afa1580156113bd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113e19190611c18565b9050806114405760405162461bcd60e51b815260206004820152602760248201527f4f7065726174696f6e733a2043616e6e6f74207265636f766572207a65726f2060448201526662616c616e636560c81b60648201526084016103d2565b61144b838383611607565b604080516001600160a01b038481168252602082018490528516917f12908d7ca4e5f7eaa347942be653a85ee08a103570143e4a7309fca3243bdf60910160405180910390a2505050565b60006001600160401b038211156114fe5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203660448201526534206269747360d01b60648201526084016103d2565b5090565b600454600160401b90046001600160401b03164311156109b757600854801561158a5760045460009061154590600160401b90046001600160401b0316436118fe565b6007549091506000906115589083611b7d565b90508261156d678ac7230489e8000083611b7d565b6115779190611b9c565b6006546115849190611c00565b60065550505b61159343611496565b6004805467ffffffffffffffff60401b1916600160401b6001600160401b03938416810291909117918290556006546040805192909304909316815260208101849052908101919091527ff5d2d72d9b25d6853afd7d0554a113b705234b6a68bb36b7f14366299463241190606001610460565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b179052915160009283928716916116939190611c31565b6000604051808303816000865af19150503d80600081146116d0576040519150601f19603f3d011682016040523d82523d6000602084013e6116d5565b606091505b50915091508180156116ff5750805115806116ff5750808060200190518101906116ff9190611c6c565b61174b5760405162461bcd60e51b815260206004820152601f60248201527f5472616e7366657248656c7065723a205452414e534645525f4641494c45440060448201526064016103d2565b5050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080856001600160a01b0316604051806060016040528060258152602001611c8a6025913980516020909101206040516001600160a01b038089166024830152871660448201526064810186905260840160408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516118329190611c31565b6000604051808303816000865af19150503d806000811461186f576040519150601f19603f3d011682016040523d82523d6000602084013e611874565b606091505b509150915081801561189e57508051158061189e57508080602001905181019061189e9190611c6c565b6118f65760405162461bcd60e51b8152602060048201526024808201527f5472616e7366657248656c7065723a205452414e534645525f46524f4d5f46416044820152631253115160e21b60648201526084016103d2565b505050505050565b6004546000906001600160401b031682116119245761191d8383611bbe565b9050611955565b6004546001600160401b0316831061193e57506000611955565b60045461191d9084906001600160401b0316611bbe565b92915050565b60006020828403121561196d57600080fd5b5035919050565b80356001600160a01b038116811461198b57600080fd5b919050565b6000602082840312156119a257600080fd5b6119ab82611974565b9392505050565b600080600080600080600080610100898b0312156119cf57600080fd5b6119d889611974565b97506119e660208a01611974565b965060408901359550606089013594506080890135935060a0890135925060c08901359150611a1760e08a01611974565b90509295985092959890939650565b60008060408385031215611a3957600080fd5b82359150611a4960208401611974565b90509250929050565b60008060408385031215611a6557600080fd5b50508035926020909101359150565b80151581146110f857600080fd5b60008060408385031215611a9557600080fd5b8235611aa081611a74565b946020939093013593505050565b60008060408385031215611ac157600080fd5b611aca83611974565b9150611a4960208401611974565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600060208284031215611b1f57600080fd5b815160ff811681146119ab57600080fd5b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615611b9757611b97611b67565b500290565b600082611bb957634e487b7160e01b600052601260045260246000fd5b500490565b600082821015611bd057611bd0611b67565b500390565b60006001600160401b03808316818516808303821115611bf757611bf7611b67565b01949350505050565b60008219821115611c1357611c13611b67565b500190565b600060208284031215611c2a57600080fd5b5051919050565b6000825160005b81811015611c525760208186018101518583015201611c38565b81811115611c61576000828501525b509190910192915050565b600060208284031215611c7e57600080fd5b81516119ab81611a7456fe7472616e7366657246726f6d28616464726573732c616464726573732c75696e7432353629a264697066735822122046937f93ebd1405110f1d0f71df75c8cfe8fb7f8209f6a274cf3c436c6ab8c0764736f6c634300080c0033";

type StakingInitializableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakingInitializableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StakingInitializable__factory extends ContractFactory {
  constructor(...args: StakingInitializableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StakingInitializable> {
    return super.deploy(overrides || {}) as Promise<StakingInitializable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StakingInitializable {
    return super.attach(address) as StakingInitializable;
  }
  override connect(signer: Signer): StakingInitializable__factory {
    return super.connect(signer) as StakingInitializable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingInitializableInterface {
    return new utils.Interface(_abi) as StakingInitializableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakingInitializable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StakingInitializable;
  }
}
