export const abi = [
  {
    inputs: [
      { internalType: "uint256", name: "a", type: "uint256" },
      { internalType: "bool", name: "b", type: "bool" },
      { internalType: "address", name: "c", type: "address" },
    ],
    name: "multipleArgsFunc",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "noArgsFunc",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256[]", name: "nums", type: "uint256[]" }],
    name: "payableArrayFunc",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "text", type: "string" }],
    name: "payableStringFunc",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          { internalType: "uint256", name: "x", type: "uint256" },
          { internalType: "string", name: "y", type: "string" },
        ],
        internalType: "struct TestContract.TestStruct",
        name: "data",
        type: "tuple",
      },
    ],
    name: "structFunc",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "value",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];
