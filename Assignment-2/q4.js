// Imagine a school sports event: Students will be selected for a special
// relay race only if their roll number is divisible by both 3 and 5. So
// if a student’s roll number is 30, 45, 60, they qualify. If it’s just
// divisible by 3 or just by 5, they don’t qualify. This is exactly how
// the program works — it checks if a number meets both conditions
// at once.Use modulus and conditional operator.
let roll = prompt("Enter student's roll number : ");
if(roll%3===0 && roll%5===0){
    console.log("Roll number "+ roll + " is selected.");
}else{
    console.log("Roll number "+ roll + " is not selected.");
    
}