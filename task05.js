class Bank {
  // property
  accounts = {
    1001: {
      accNo: 1001,
      name: "Sonu",
      balance: 5000,
    },
    1002: {
      accNo: 1002,
      name: "Rahul",
      balance: 10000,
    },
    1003: {
      accNo: 1003,
      name: "Anu",
      balance: 3000,
    },
    1004: {
      accNo: 1004,
      name: "Meera",
      balance: 7000,
    },
  };

  // methods to implement:

  // 1. validateAccount(accNo) → check if account exists

  // 2. deposit(accNo, amount) → increase balance

  // 3. withdraw(accNo, amount) → decrease balance (only if sufficient balance)

  // 4. checkBalance(accNo) → display balance

  // 5. fundTransfer(fromAcc, toAcc, amount)
  //    → transfer money if both accounts exist and balance is sufficient
}