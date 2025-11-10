// A cinema booking system is being developed to calculate the
// ticket price for customers based on their age. The system should
// also categorize customers into groups. The rules are as follows:
// -If the age is below 12, the customer is a Child and the ticket price
// is Rs.5.
// -If the age is 12 to below 18, the customer is a Teen and the ticket
// price is Rs.10.
// -If the age is 18 to below 60, the customer is an Adult and the
// ticket price is Rs.20.
// -If the age is 60 or above, the customer is a Senior and the ticket
// price is Rs.15.
// Write a JavaScript program that: -Takes the user’s age as input.
// -Calculates the correct ticket price based on the rules. -Determines
// the user’s category (Child, Teen, Adult, Senior). -Displays both
// the ticket price and the category clearly to the user.
let age  = parseInt(prompt("Enter the age of the person : "));
if(age<12){
    console.log("The customer is a child. ");
    console.log("The ticket price is Rs. 5.");
}else if(age<18){
    console.log("The customer is a teen.");
    console.log("The ticket price is Rs. 10.");
}else if(age<60){
    console.log("The customer is an adult.");
    console.log("The ticket price is Rs. 20.");
}else if(age>=60){
    console.log("The customer is a senior.");
    console.log("The ticket price is Rs. 15.");
}