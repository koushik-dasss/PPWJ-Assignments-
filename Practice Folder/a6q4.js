class BankAccount{
    constructor(accountNumber,holderName,balance){
        this.accountNumber=accountNumber;
        this.holderName=holderName;
        this._balance = balance;
    }
    get balance(){
        return this._balance;
    }
    set balance(amount){
        this._balance = amount;
    }
    deposit(amount){
        if(amount>0){
            this._balance+=amount;
            console.log(amount+ " deposited.");
            console.log("Current balance : "+ this._balance);
        }else{
            console.log("Insuff. balance to be deposited.");
        }
    }
    withdrawl(amount){
        if(amount>this._balance){
            console.log("Insuff. balance");
        }else{
            this._balance-=amount;
            console.log(amount+ " withdrawn.");
            console.log("Current balance : "+ this._balance);
        }
    }
}
let acc1 = new BankAccount(123,"Koushik",40000);
let acc2 = new BankAccount(456,"Roman",50000);
acc1.deposit(50000);
acc1.withdrawl(100000);
acc1.deposit(0);
acc1.withdrawl(90000);
acc2.deposit(0);
acc2.deposit(10000);
acc2.withdrawl(70000);
acc2.withdrawl(60000);
console.log(acc1.balance);
console.log(acc2.balance);

