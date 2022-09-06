export const userAddress = '0x00246432DD8E12C01F5404173E1a2938CA00Ac05';
export const payAddress = '0x61FFE0a5657bAC7F0805acAE36Ed1fa472B8F416';
export const bankAddress = '0x7B0bf50e4Ec7c933708eFDeB763F37DfA91C453e';
export const entityAddress = '0xF6aFC4064D32BcbAD79A7AFD1216bac9182EAEc0';
export const reconcileAddress = '0x9956385EB4bFE95370f9E1dC8C4b505c5c6C01bc';

export const entityABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
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
    inputs: [
      {
        internalType: 'string',
        name: 'serv',
        type: 'string',
      },
    ],
    name: 'getService',
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
            internalType: 'string',
            name: 'TIN',
            type: 'string',
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
            name: 'account',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'email',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'user',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'bank',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'date',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'time',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'hash',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'block_no',
            type: 'string',
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
        internalType: 'struct ServiceProvider.Transaction[]',
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
            internalType: 'string',
            name: 'TIN',
            type: 'string',
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
            name: 'account',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'email',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'user',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'bank',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'date',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'time',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'hash',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'block_no',
            type: 'string',
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
        internalType: 'struct ServiceProvider.Transaction',
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
  {
    inputs: [
      {
        internalType: 'string',
        name: 'tin',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'service',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'email',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'user',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'account',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'bank',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'date',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'time',
        type: 'string',
      },
    ],
    name: 'stampTransaction',
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
        internalType: 'uint256',
        name: 'tid',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'block_no',
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
];

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
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
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
            name: 'time',
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
            name: 'time',
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
      {
        internalType: 'string',
        name: 'time',
        type: 'string',
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
];

export const bankABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
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
            internalType: 'string',
            name: 'TIN',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'email',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'user',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'bank_name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'date',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'time',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'serv',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'commision',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'hash',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'block_no',
            type: 'string',
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
        internalType: 'struct Bank.Transaction[]',
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
            internalType: 'string',
            name: 'TIN',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'email',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'user',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'bank_name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'date',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'time',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'serv',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'commision',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'hash',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'block_no',
            type: 'string',
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
        internalType: 'struct Bank.Transaction',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'bank',
        type: 'string',
      },
    ],
    name: 'getbank',
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
        name: 'email',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'user',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'bank_name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'serv',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'comm',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'date',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'time',
        type: 'string',
      },
    ],
    name: 'stampTransaction',
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
        internalType: 'uint256',
        name: 'tid',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'block_no',
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
];

export const reconcileABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'commission',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'tin',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'ug_hash',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'bank_hash',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'service_hash',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'bank',
        type: 'string',
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
        name: 'time',
        type: 'string',
      },
    ],
    name: 'addReconciled',
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
    name: 'getBanks',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'bank',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        internalType: 'struct Reconciliation.Bank[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getEntities',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'entity',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
        ],
        internalType: 'struct Reconciliation.Entity[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getReconciled',
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
    name: 'getTotalCommission',
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
    name: 'getTotalRevenue',
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
            internalType: 'uint256',
            name: 'commision',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'tin',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'service',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'bank',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'ug_hash',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'bank_hash',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'service_hash',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'date',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'time',
            type: 'string',
          },
          {
            internalType: 'bool',
            name: 'isTx',
            type: 'bool',
          },
        ],
        internalType: 'struct Reconciliation.Transaction[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
