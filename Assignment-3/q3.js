// A teacher maintains an array of student roll numbers for her class.
// She wants to check:
// - The index position of a student with roll number 23.
// - Whether a student with roll number 100 exists in the list or not.
// Write a JavaScript program that uses appropriate array methods
// to solve both tasks and display the results.
let rollNumbers = [13,23,7,11,67,89,45,26]; // storing random roll numbers of a class in an array
console.log("Roll Numbers are : ", rollNumbers);
console.log("Index position of roll 23 is:",rollNumbers.indexOf(23));
console.log("Does roll 100 exists ?" , rollNumbers.includes(100));


