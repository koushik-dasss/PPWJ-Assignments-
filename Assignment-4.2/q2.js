// 2.In some mobile banking and authentication systems, a user’s se-
// curity PIN may need to be reversed for encryption or verification
// purposes. For example, if the PIN entered is 1234, the system
// generates a reversed PIN 4321 before applying encryption.
// Write a JavaScript program that performs the following:
// 1. Takes an integer input (the user’s PIN code) from the user.
// 2. Uses a for loop to reverse the digits of the entered number.
// 3. Displays:
// •The original number (PIN),
// •The reversed number (Reversed PIN).
let code = parseInt(prompt("Enter the code :"));
let rev = 0 , temp = code;
while(temp!=0){
    rev=rev*10+(temp%10);
    temp=parseInt(temp/10);
}
console.log("The original PIN is :"+ code);
console.log("The reversed PIN is :"+ rev);


