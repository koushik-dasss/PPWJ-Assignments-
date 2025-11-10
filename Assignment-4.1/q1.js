// A government portal is being developed to check whether a citizen
// is eligible to vote in elections. The system should take the person’s
// age as input. If the age is 18 or above, the system should display
// a message: ”You are eligible to vote.” Otherwise, it should display:
// ”You are not eligible to vote yet.”
// Write a JavaScript program to implement this eligibility check using
// comparison operators and an if-else statement.
let age = parseInt(prompt("Enter the age of the person "));// user input of age 
if(age>=18){
    console.log("You are eligible to vote.");
}else{
    console.log("You are not eligible to vote.");
}