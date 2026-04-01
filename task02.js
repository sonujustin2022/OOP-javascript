
class employee{
    constructor(name,age,salary,exp){
        this.name = name,
        this.age = age,
        this.salary = salary,
        this.exp = exp
    }

    //method

    printDetails(){
        console.log(this.name,this.age,this.salary,this.salary);
    }
}

let emp01 = new employee("Athul",34,45000,2.5);
let emp02 = new employee("Rahul",25,10000,1);

emp02.printDetails();