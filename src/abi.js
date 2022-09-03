export const userAddress = '0x00246432DD8E12C01F5404173E1a2938CA00Ac05';
export const payAddress = '0x00650821118030F3f9201AeABE7C094862A5f632';

export const userABI = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'fname',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'lname',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'password',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'email',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'role',
        type: 'string',
      },
    ],
    name: 'registerUser',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'tin',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'email',
        type: 'string',
      },
    ],
    name: 'updateTin',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'tin',
        type: 'string',
      },
    ],
    name: 'getUserByTin',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'fname',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'lname',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'email',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'TIN',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'password',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'role',
            type: 'string',
          },
          {
            internalType: 'bool',
            name: 'active',
            type: 'bool',
          },
        ],
        internalType: 'struct Citizen.User',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getUsers',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'fname',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'lname',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'email',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'TIN',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'password',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'role',
            type: 'string',
          },
          {
            internalType: 'bool',
            name: 'active',
            type: 'bool',
          },
        ],
        internalType: 'struct Citizen.User[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'i_counter',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'tin',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'password',
        type: 'string',
      },
    ],
    name: 'login',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export const payABI = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'service',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'date',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'email',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'bank',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'tin',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'comm',
        type: 'uint256',
      },
    ],
    name: 'stampTransaction',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tid',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'blk',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'hash',
        type: 'string',
      },
    ],
    name: 'updateTxHash',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getCounter',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getTransactions',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'service',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'date',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'email',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'bank',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'TIN',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'block_hash',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'hash',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'commision',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'isTx',
            type: 'bool',
          },
          {
            internalType: 'string',
            name: 'state',
            type: 'string',
          },
        ],
        internalType: 'struct UgandaPay.Transaction[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'getTx',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'service',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'date',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'email',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'bank',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'TIN',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'block_hash',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'hash',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'commision',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'isTx',
            type: 'bool',
          },
          {
            internalType: 'string',
            name: 'state',
            type: 'string',
          },
        ],
        internalType: 'struct UgandaPay.Transaction',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'i_counter',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
