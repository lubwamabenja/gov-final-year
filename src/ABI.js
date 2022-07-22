export const address = '0x6CF63277F81fFE733Bbc7C8463170f7fA7147C9a';

export const ABI = [
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
        name: 'i_tin',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'i_companyName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'i_email',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'i_phone',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'i_pass',
        type: 'string',
      },
    ],
    name: 'registerCompany',
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
        name: 'i_nin',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'i_fname',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'i_lname',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'i_email',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'i_phone',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'i_pass',
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
            name: 'userType',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'tin',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'companyName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'nin',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'fName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'lName',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'email',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'phone',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'password',
            type: 'string',
          },
          {
            internalType: 'bool',
            name: 'active',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'isLoggedIn',
            type: 'bool',
          },
        ],
        internalType: 'struct Individual.User[]',
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
      {
        internalType: 'string',
        name: 'i_password',
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
  {
    inputs: [
      {
        internalType: 'string',
        name: 'i_email',
        type: 'string',
      },
    ],
    name: 'logout',
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
