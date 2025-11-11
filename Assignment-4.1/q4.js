// Imagine a school sports event: Students will be selected for a special
// relay race only if their roll number is divisible by both 3 and 5. So
// if a student’s roll number is 30, 45, 60, they qualify. If it’s just
// divisible by 3 or just by 5, they don’t qualify. This is exactly how
// the program works — it checks if a number meets both conditions
// at once.
let roll = parseInt(prompt("Enter the roll no. :"));
if(roll%3===0 && roll%5===0){
    console.log("The student with roll no. "+ roll + " is selected.");
}else{
    console.log("The student with roll no. "+ roll + " is not  selected.");
}

