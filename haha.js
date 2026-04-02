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

  toValidate(acccno) {
    if (Object.hasOwn(this.accounts, acccno)) {
      return true;
    } else {
      return false;
    }
  }

  // 3. withdraw(accNo, amount) → decrease balance (only if sufficient balance)

  toWithdraw(accno, amount) {
    let isValid = this.toValidate(accno);
    if (isValid) {
      let account = this.accounts[accno];

      if (amount <= account["balance"]) {
        account["balance"] -= amount;
        return `${amount} successfully withdrawed from ${account.name}, balance is ${account["balance"]}`;
      } else {
        return "insufficent amount";
      }
    } else {
      return "accout not found";
    }
  }

  // 2. deposit(accNo, amount) → increase balance
  toDeposit(accno, amount) {
    let isValid = this.toValidate(accno);

    if (isValid) {
      let account = this.accounts[accno];
      account["balance"] += amount;
      return `${amount} successfully depoisted to  ${account.name}, balance is ${account["balance"]}`;
    } else {
      return "Account no found";
    }
  }

  // 4. checkBalance(accNo) → display balance

  checkBalance(accno) {
    if (this.toValidate(accno)) {
      let account = this.accounts[accno];
      return account["balance"];
    } else {
      return "account not found";
    }
  }

  // 5. fundTransfer(fromAcc, toAcc, amount)
  //    → transfer money if both accounts exist and balance is sufficient

 fundTransfer(fromAcc, toAcc, amount) {

  if (fromAcc === toAcc) {
    return "Cannot transfer to same account";
  }

  if (amount <= 0) {
    return "Invalid amount";
  }

  let isValidFromAcc = this.toValidate(fromAcc);
  let isValidToAcc = this.toValidate(toAcc);

  if (isValidFromAcc && isValidToAcc) {
    let fromAccount = this.accounts[fromAcc];
    let toAccount = this.accounts[toAcc];

    if (amount <= fromAccount.balance) {
      fromAccount.balance -= amount;
      toAccount.balance += amount;

      return {
        fromBalance: fromAccount.balance,
        toBalance: toAccount.balance
      };
    } else {
      return "Insufficient balance";
    }
  } else {
    return "Account not found";
  }
}
}

let BankObj = new Bank();

// let isValid = BankObj.toValidate(1004);

// isValid?console.log("acc present"):console.log("not acc is found or presernt")

// let withdrawAccount = BankObj.toWithdraw(1004,2000);

// console.log(withdrawAccount);

// let depoistedAccount = BankObj.toDeposit(1001,2500);
// // console.log(depoistedAccount);

// let checkBalanceAcc = BankObj.checkBalance(1001);
// console.log(checkBalanceAcc);

console.log(BankObj.fundTransfer(1002, 1002, 1000));
