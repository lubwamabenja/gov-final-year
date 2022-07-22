// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.7;

import './Structures.sol';
import './Balances.sol';
import './Payments.sol';

contract Umeme is Structures, Balances, Payments {
  struct UmemePayment {
    uint256 id;
    string customerNo;
    string propertNo;
    string serialNo;
    string userId;
    string email;
    uint256 amout;
    string method;
    string date;
  }

  //payment mappings
  mapping(string => UmemePayment) u_payments;

  //all payments
  UmemePayment[] private allUmemePayments;

  //payment counter
  uint256 private i_counter;

  constructor() {
    i_counter = 1;
  }

  function registerUmemePayment(
    string memory i_custNo,
    string memory i_propNo,
    string memory i_serialNo,
    string memory i_userId,
    string memory i_email,
    uint256 i_amount,
    string memory method,
    string memory date
  ) external returns (bool) {
    UmemePayment memory u_payment = UmemePayment(
      i_counter,
      i_custNo,
      i_propNo,
      i_serialNo,
      i_userId,
      i_email,
      i_amount,
      method,
      date
    );
    //update all umeme payments
    allUmemePayments.push(u_payment);
    //update umeme payments
    u_payments[i_email] = u_payment;

    registerPayment(i_email, 'umeme', i_amount, method, date);

    //update balance
    Balance memory balance = balance_mappings[i_email];
    updateBalance(i_email, i_amount, balance.water, balance.taxes, balance.penalties);

    return true;
  }

  function getUmemePayments() external view returns (UmemePayment[] memory) {
    return allUmemePayments;
  }
}
