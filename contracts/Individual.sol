// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7;

import './Ownable.sol';

contract Individual is Ownable {
  //Modifiers

  modifier ninAvailable(string memory nin) {
    User memory i_user = nin_mappings[nin];
    require(!i_user.active, 'User with NIN  already exists');
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

  modifier userEmailExists(string memory i_email) {
    User memory i_user = email_mappings[i_email];
    require(!i_user.active, 'User with Email Does Not Exist');
    _;
  }

  struct User {
    uint256 id;
    string nin;
    string fName;
    string lName;
    string email;
    string phone;
    string password;
    bool active;
    bool isLoggedIn;
  }
  //state variables
  //nin mappings
  mapping(string => User) nin_mappings;

  //phone mappings
  mapping(string => User) phone_mappings;

  //email mappings
  mapping(string => User) email_mappings;

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
    User memory i_user = User(i_counter, i_nin, i_fname, i_lname, i_email, i_phone, i_pass, true, true);
    //save to array
    allUsers.push(i_user);
    //save to nin mappings
    nin_mappings[i_nin] = i_user;

    //save to email mappings
    email_mappings[i_email] = i_user;

    //save to phone mappings
    phone_mappings[i_phone] = i_user;

    i_counter += 1;
    return true;
  }

  function login(string memory i_email, string memory i_password)
    external
    view
    userEmailExists(i_email)
    returns (bool)
  {
    User memory i_user = email_mappings[i_email];
    require(
      keccak256(abi.encodePacked(i_user.password)) != keccak256(abi.encodePacked(i_password)),
      ' Wrong Password '
    );
    return true;
  }

  function logout(string memory i_email) external view userEmailExists(i_email) returns (bool) {
    User memory i_user = email_mappings[i_email];
    i_user.isLoggedIn = false;
    return true;
  }

  function getUsers() external view returns (User[] memory) {
    return allUsers;
  }

  function getUserByEmail(string memory i_email) external view returns (User memory) {
    User memory i_user = email_mappings[i_email];
    return i_user;
  }
}
