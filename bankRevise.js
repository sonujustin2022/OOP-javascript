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

toValidate(accNo){
    return Object.hasOwn(this.accounts,accNo);

}


  // 2. deposit(accNo, amount) → increase balance


toDeposit(accNo,amount){

    if(this.toValidate(accNo)){
        if(isNaN(amount) || amount<=0){
            return "not valid amount"
        }

        let account = this.accounts[accNo];

        account.balance += amount;
        return account.balance;

    }else {
        return "account not found"
    }

}  

  // 3. withdraw(accNo, amount) → decrease balance (only if sufficient balance)


  toWithdraw(accNo,amount){

    if(!this.toValidate(accNo)){
        return "account not found"
    }

    if(isNaN(amount)|| amount<=0){
        return "invalid number"
    }

    let account = this.accounts[accNo];

    if(amount<=account.balance){
        account['balance'] -= amount;
        return account.balance;

    }else{
        return "insufficent amount"
    }

  }


  // 4. checkBalance(accNo) → display balance

  // 5. fundTransfer(fromAcc, toAcc, amount)
  //    → transfer money if both accounts exist and balance is sufficient
}

let bankOb = new Bank();

// let validate = bankOb.toValidate(1005);

// validate?console.log("validation succesfull"):console.log("validation not successfull")

// let toDeposit = bankOb.toDeposit(1004,3000);
// console.log(toDeposit);

let toWithDraw = bankOb.toWithdraw(1004,5000);
console.log(toWithDraw);