// A classroom has an attendance list:
// let students = ["Ali", "Meera", "Ravi", "Ali", "Sara"];
// Task:
// •Check whether all students’ names are strings using every().
// •Replace the first two names with Guest1 and Guest2 using
// copyWithin().
let students = ["Ali", "Meera", "Ravi", "Ali", "Sara"];
let allStrings = students.every(item => typeof item === "string");
console.log("All are strings ?", allStrings);
students.copyWithin(0,2,4);// elements from 0-2(exclusive) is replaced by elements from 2-4(exclusive)
console.log(students); // modified array 
students[0]="Guest1";
students[1]="Guest2";
console.log(students);

