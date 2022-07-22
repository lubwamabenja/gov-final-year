// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7;

import './Ownable.sol';
import './Balances.sol';
import './Payments.sol';

contract User is Ownable, Balances, Payments {
  //Modifiers

  modifier ninAvailable(string memory nin) {
    User memory i_user = nin_mappings[nin];
    require(!i_user.active, 'User with NIN  already exists');
    _;
  }
  modifier tinAvailable(string memory i_tin) {
    User memory i_company = tin_mappings[i_tin];
    require(!i_company.active, 'Company with TIN  already exists');
    _;
  }

  modifier phoneAvailable(string memory i_phone) {
    User memory i_user = phone_mappings[i_phone];
    require(!i_user.active, 'User with Phone Number already exists');
    _;
  }

  modifier emailAvailable(string memory i_email) {
    User memory i_user = email_mappings[i_email];
    require(!i_user.active, 'User with Email already exists');
    _;
  }

  // modifier userEmailExists (string memory i_email){
  //     User memory i_user = email_mappings[i_email];
  //     require(!i_user.active, "User with Email Does Not Exist");
  //     _;
  // }

  //state variables
  //nin mappings
  mapping(string => User) nin_mappings;

  //phone mappings
  mapping(string => User) phone_mappings;

  //email mappings
  mapping(string => User) email_mappings;

  //tin mappings
  mapping(string => User) tin_mappings;

  //company Name mappings
  // mapping(string  => User) companyName_mappings;

  //list all users
  User[] private allUsers;

  uint256 private i_counter;

  constructor() {
    i_counter = 1;
  }

  function registerUser(
    string memory i_nin,
    string memory i_fname,
    string memory i_lname,
    string memory i_email,
    string memory i_phone,
    string memory i_pass
  ) external ninAvailable(i_nin) emailAvailable(i_email) phoneAvailable(i_phone) returns (bool) {
    User memory i_user = User(
      i_counter,
      'individual',
      '',
      '',
      i_nin,
      i_fname,
      i_lname,
      i_email,
      i_phone,
      i_pass,
      true,
      true
    );
    //save to array
    allUsers.push(i_user);
    //save to nin mappings
    nin_mappings[i_nin] = i_user;

    //save to email mappings
    email_mappings[i_email] = i_user;

    //save to phone mappings
    phone_mappings[i_phone] = i_user;

    //initialize balance
    balance_mappings[i_email] = Balance(i_email, 0, 0, 0, 0);

    i_counter += 1;
    return true;
  }

  function registerCompany(
    string memory i_tin,
    string memory i_companyName,
    string memory i_email,
    string memory i_phone,
    string memory i_pass
  ) external tinAvailable(i_tin) emailAvailable(i_email) phoneAvailable(i_phone) returns (bool) {
    User memory i_company = User(
      i_counter,
      'company',
      i_tin,
      i_companyName,
      '',
      '',
      '',
      i_email,
      i_phone,
      i_pass,
      true,
      true
    );
    //save to array
    allUsers.push(i_company);
    //save to nin mappings
    tin_mappings[i_tin] = i_company;

    //save to email mappings
    email_mappings[i_email] = i_company;

    //save to phone mappings
    phone_mappings[i_phone] = i_company;

    i_counter += 1;
    return true;
  }

  function login(string memory i_email, string memory i_password) external view returns (bool) {
    User memory i_user = email_mappings[i_email];
    require(
      keccak256(abi.encodePacked(i_user.password)) == keccak256(abi.encodePacked(i_password)),
      ' Wrong Email or Password '
    );
    return true;
  }

  // function logout(string memory i_email) external view  returns(bool) {
  //     User memory i_user  = email_mappings[i_email];
  //     i_user.isLoggedIn = false;
  //     return true;
  // }

  // function getUsers() external view returns(User[] memory){
  //     return allUsers;
  // }

  function getProfile(string memory email) external view returns (User memory) {
    User memory user = email_mappings[email];
    return user;
  }
}
