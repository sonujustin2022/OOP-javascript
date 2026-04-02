class Bank {
  // property
  accountDetails = {
    1000: {
      accno: 1000,
      userName: "userOne",
      password: "password1",
      balance: 5000,
    },
    1001: {
      accno: 1001,
      userName: "userTwo",
      password: "password2",
      balance: 7000,
    },
    1002: {
      accno: 1002,
      userName: "userThree",
      password: "password3",
      balance: 8000,
    },
    1003: {
      accno: 1003,
      userName: "userFour",
      password: "password4",
      balance: 6000,
    },
    1004: {
      accno: 1004,
      userName: "userFive",
      password: "password5",
      balance: 9000,
    },
  };





  //   methods
  // Validate account no : (check account no is there)

  toValidate(accNo){
    if(Object.hasOwn(this.accountDetails,accNo)){
        return true;
    }else {
        return false;
    }

  }



  // authenticate account only for those with valid account no (acccno, username & password)


  toAuthenticate(acccno,userName,password){

    let isValid = this.toValidate(acccno);

    if(isValid){
        let account = this.accountDetails[acccno];
        if(userName == account.userName && password == account.password){
            return true;
        }else {
            return false;
        } 

    }else{
        return false;
    }

  }


  // balance enquiry only for authenticated ones (accno, username & password)


}

  let bankObj = new Bank();

  let isValid = bankObj.toValidate(10023);

//   isValid?console.log("validation sucessfull"):console.log("validation not success")
let isAuthenticated = bankObj.toAuthenticate(1001,"userTwo","password2");

isAuthenticated?console.log("authnicsted"):console.log("not authnitcated")