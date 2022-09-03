import { ethers } from 'ethers';

import { userABI, userAddress, payABI, payAddress } from './abi';

// return the token from the session storage
export const getToken = () => localStorage.getItem('token') || null;

export const getEmail = () => localStorage.getItem('i_email') || null;

export const getTin = () => localStorage.getItem('i_tin') || null;

const privateKey = '48fe9e27d916b3187c78044fd7b0e2a65f06dbf8d21f2a4da19f27a9416e01ea';
const url = 'https://rinkeby.infura.io/v3/9121f4f2d407459fae297e052b1e022b';

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const getAuthContract = () => {
  let provider = new ethers.providers.JsonRpcProvider(url);
  let signer = new ethers.Wallet(privateKey, provider);
  let contract = new ethers.Contract(userAddress, userABI, signer);
  return contract;
};

export const getPayContract = () => {
  let provider = new ethers.providers.JsonRpcProvider(url);
  let signer = new ethers.Wallet(privateKey, provider);
  let contract = new ethers.Contract(payAddress, payABI, signer);
  return contract;
};
