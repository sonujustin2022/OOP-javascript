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

  toValidate(acccno){
    if(Object.hasOwn(this.accounts,acccno)){
        return true;
    }else {
        return false;
    }
  }

  // 2. withdraw(accNo, amount) → increase balance

  toWithdraw(accno,amount){
    let isValid = this.toValidate(accno);
    if(isValid){
        let account = this.accounts[accno];
        
        if(amount<=account['balance']){
            account['balance'] -= amount;
            return account['balance'] ;

        }else{
            return "insufficent amount"
        }

    }else{
        return "account not found";
    }
  }

}

let BankObj = new Bank();

// let isValid = BankObj.toValidate(1004);

// isValid?console.log("acc present"):console.log("not acc is found or presernt")

let withdrawAccount = BankObj.toWithdraw(1001,2000);

console.log(withdrawAccount);