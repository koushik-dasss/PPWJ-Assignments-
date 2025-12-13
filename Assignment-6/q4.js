// Create a class named BankAccount with the following properties:
// • accountNumber
// • holderName
// • balance
// Use a getter method to access the current balance of the account.
// Use a setter method to update the balance (through deposit or
// withdrawal). Ensure that:
// • Deposit increases the balance.
// • Withdrawal decreases the balance only if sufficient funds are
// available.
// Create at least two BankAccount objects with different holders and
// perform deposit and withdrawal operations. Display the final bal-
// ance of each account using the getter method.
class BankAccount {
    constructor(accountNumber , holderName , balance){
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this._balance = balance; 
    }
// Using this._balance instead of this.balance is necessary to avoid infinite recursion.
// If we write this.balance = balance inside the constructor, it will trigger the setter,
// and inside the setter if we again write this.balance = amount, it calls the setter again.
// This causes the setter to call itself repeatedly → infinite recursion → 
// RangeError: Maximum call stack size exceeded.
//
// Same for the getter: If get balance() returns this.balance, it calls the getter again.
// Since the getter/setter are linked to the property name "balance", 
// accessing this.balance inside them re-invokes the same getter/setter.
// Therefore we store the actual value in a different internal variable (_balance)
// and expose it safely through getter/setter.
    get balance(){
        return this._balance;
    }
    set balance(amount){
        this._balance = amount;
    }
    deposit(amount){
        if(amount > 0){
            this._balance+=amount;
            console.log("Deposited : "+ amount);
            console.log("Current balance is : "+ this._balance);
        }
    }
    withdraw(amount){
        if(amount>this._balance){
            console.log("Insufficient balance.");
        }else{
            this._balance -= amount;
            console.log("Withdrawn : " + amount);
            console.log("Current balance is : " + this._balance);
        }
    }
}
let acc1 = new BankAccount(696969,"Koushik Das", 5000);
let acc2 = new BankAccount(143143,"Allec Pandey", 0);
acc1.deposit(5000); // 10000
acc1.withdraw(6000); // 4000
acc2.deposit(69); // 69
acc2.withdraw(6969); // insuff. balance 
console.log("Final balance in acc1 : "+ acc1.balance); // 4000
console.log("Final balance in acc2 : "+ acc2.balance); // 69

