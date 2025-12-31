// A travel booking website asks users to enter their age in a text field.
// Sometimes users type things like ”twenty”, ”25 years”, or ”30”.
// Task:
// •Write JavaScript code to validate the input using parseInt()
// or isNaN() so that only valid numbers are accepted.
// •If the input is invalid, display a message: “Please enter a valid
// number.”
let age = parseInt(prompt("Enter an age : ")); // validation of input using parseInt() , example -  25 years => 25 , any input is taken into an integer (if integer is a part of the entire input ). Converts the input into an integer if possible , 25.89 => 25 is  a valid age .

if(isNaN(age)){ // validation of input using isNan() which returns boolean value of true when the input is NaN(NOT A NUMBER) and false when input is not a NaN(it's a number) . 
    console.log("Please enter a valid  number.");
}else{
    console.log(age+" is a valid age.");
}