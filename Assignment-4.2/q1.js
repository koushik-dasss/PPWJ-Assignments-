// Suppose an ATM system requires users to enter a unique security
// code (an integer). The system calculates the sum of the digits of
// this code. To verify additional security, the system checks whether
// this sum is a prime number. A prime digit sum means the code
// passes an extra security filter.
// Write a JavaScript program that performs the following:
// 1. Takes an integer input (the security code) from the user.
// 2. Calculates the sum of its digits using a while loop.
// 3. Determines whether the digit sum is prime or not.
// 4. Displays:
// •The original number entered,
// •The sum of its digits,
// •Whether the sum is a prime number.
let code = parseInt(prompt("Enter a unique security code :"));
let sum = 0 , temp = code;
while(temp!=0){
    sum+=(temp%10);
    temp = parseInt(temp/10);
}
console.log("The original number entered is :" + code);
console.log("The sum of the digits of "+ code + " is : "+ sum);
let isPrime = true;
if(sum<2){
    isPrime = false;
}else{
    for(let i = 2 ; i*i<= sum ; i++){
        if(sum%i==0){
            isPrime = false;
            break;
        }
    }
}
if(isPrime){
    console.log(sum+" is a prime number.");
}else{
    console.log(sum+" is not a prime number.");
}


