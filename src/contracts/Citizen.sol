// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7;

contract Citizen {
  //Structure for User
  struct User {
    uint256 id;
    string fname;
    string lname;
    string email;
    string TIN;
    string password;
  }

  uint256 public i_counter;
  mapping(string => User) private users;
  mapping(string => User) private email_mappings;

  constructor() {
    i_counter = 1;
  }

  /**
   * @dev register a citizen
   * @param fname First Name
   * @param lname Last Name
   * @param password Password
   * @param email
   * @return boolean
   *
   */

  function registerUser (
    string memory fname,
    string memory lname,
    string memory password,
    string memory email
  ) external returns (boolean) {

    require(email_mappings[email].email !== email ,"User email Exists");
    email_mappings[email] = User(i_counter,fname,lname,email,"",password);


  }
}
