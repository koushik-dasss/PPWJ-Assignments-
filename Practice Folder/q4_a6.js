class BankAccount{
    constructor(accountNumber,holderName,balance){
        this.accountNumber=accountNumber;
        this.holderName=holderName;
        this._balance=balance;
    }
    get balance(){
        return this._balance;
    }
    set balance(amount){
        this._balance = amount;
    }
    deposit(amount){
        this._balance+=amount;
        console.log("Deposited amount : "+ amount);
        console.log("Balance after deposit : "+ this._balance);
    }
    withdrawl(amount){
        if(amount>this._balance){
            console.log("Insufficient balance.");
        }else{
            this._balance-=amount;
            console.log("Amount withdrawn : "+ amount);
            console.log("Balance after withdrawl "+ this._balance );
        }
    }
}
let acc1 = new BankAccount(123456,"Koushik Das",50000);
let acc2 = new BankAccount(123456,"Allec Daddy",14500);
acc1.deposit(50000);
acc1.withdrawl(40000);
acc2.deposit(0);
acc2.withdrawl(15000);
acc2.withdrawl(14500)
console.log("Final balance in acc1: "+ acc1.balance);
console.log("Final balance in acc2: "+ acc2.balance);

