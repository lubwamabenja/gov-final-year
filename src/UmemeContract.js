export const umemeAddress = '0xa57610f9B0a62C71bb64368F2d6D7A56a571b0A3';

export const umemeABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'email',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'i_type',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'method',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'date',
        type: 'string',
      },
    ],
    name: 'registerPayment',
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
        name: 'i_custNo',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'i_propNo',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'i_serialNo',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'i_userId',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'i_email',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'i_amount',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'method',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'date',
        type: 'string',
      },
    ],
    name: 'registerUmemePayment',
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
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'email',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'umeme',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'water',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'taxes',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'penalties',
        type: 'uint256',
      },
    ],
    name: 'updateBalance',
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
    name: 'getAllPayments',
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
            name: 'email',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'i_type',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'method',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'date',
            type: 'string',
          },
        ],
        internalType: 'struct Structures.Payment[]',
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
        internalType: 'string',
        name: 'i_email',
        type: 'string',
      },
    ],
    name: 'getBalance',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'email',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'umeme',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'water',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'taxes',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'penalties',
            type: 'uint256',
          },
        ],
        internalType: 'struct Structures.Balance',
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
        name: 'i_email',
        type: 'string',
      },
    ],
    name: 'getPayment',
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
            name: 'email',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'i_type',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'method',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'date',
            type: 'string',
          },
        ],
        internalType: 'struct Structures.Payment',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getUmemePayments',
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
            name: 'customerNo',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'propertNo',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'serialNo',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'userId',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'email',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'amout',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'method',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'date',
            type: 'string',
          },
        ],
        internalType: 'struct Umeme.UmemePayment[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
