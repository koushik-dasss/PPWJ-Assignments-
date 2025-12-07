// You are tasked with creating a Bank Account system using func-
// tions. Define a function bankAccount(balance) that returns an
// object with methods:
// •deposit(amount) – adds money.
// •withdraw(amount) – subtracts money if balance is sufficient.
// •checkBalance() – displays current balance.
// Use closures to maintain account balance securely
function bankAccount(balance){
    return {
        deposit(amount){
            balance+=amount;
            console.log("Deposited "+ amount +". Current balance is : "+ balance);
        },
        withdraw(amount){
            if(balance<amount){
                console.log("Insufficient balance in the account.");
            }else{
                balance-=amount;
                console.log("Withdrawn "+ amount +". Current balance is : "+ balance);
            }
        },
        checkBalance(){
            console.log("Current balance is :"+ balance);
        }
    };
}
let acc = bankAccount(50000000);
acc.deposit(100000000);
acc.withdraw(2000000);
acc.checkBalance();