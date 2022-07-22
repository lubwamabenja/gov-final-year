import { ethers } from 'ethers';
import { ABI, address } from './UserContract';
import { umemeABI, umemeAddress } from './UmemeContract';

// return the token from the session storage
export const getToken = () => localStorage.getItem('token') || null;

export const getEmail = () => localStorage.getItem('i_email') || null;

export const getAuthContract = () => {
  const provider = new ethers.providers.JsonRpcProvider(
    'https://rinkeby.infura.io/v3/9121f4f2d407459fae297e052b1e022b'
  );
  const signer = new ethers.Wallet('ab6e71c8c01939f49eb256be099b70ea8793f7093903cb1e731b6b62049d4a24', provider);
  const contract = new ethers.Contract(address, ABI, signer);
  return contract;
};

export const getUmemeContract = () => {
  const provider = new ethers.providers.JsonRpcProvider(
    'https://rinkeby.infura.io/v3/9121f4f2d407459fae297e052b1e022b'
  );
  const signer = new ethers.Wallet('ab6e71c8c01939f49eb256be099b70ea8793f7093903cb1e731b6b62049d4a24', provider);
  const contract = new ethers.Contract(umemeAddress, umemeABI, signer);
  return contract;
};
