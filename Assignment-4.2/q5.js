// In a school, marks of students in different subjects are often stored
// in a 2D array (rows represent students and columns represent sub-
// jects). The teacher wants a program that can calculate the total
// marks obtained by each student across all subjects. This helps in
// quickly evaluating students’ performance.
// Write a JavaScript program that:
// 1. Stores the marks of 3 students in 3 subjects using a 2D array.
// 2. Uses nested for loops to calculate the total marks of each
// student.
// 3. Prints the total marks of each student.
let marks =  [[80,97,78],[99,89,65],[100,76,89]]; // 2D array of marks of 3 students in 3 subjects
for(let i = 0 ; i < marks.length ; i++){ // getting into the outer array , rows = student's name = sequence = i+1 as index of array starts from 0 
    let total = 0;
    for(let j = 0 ; j<marks[i].length ; j++){ // getting intgo the inner  array , columns = marks 
        total += marks[i][j]; // total marks of a student in 3 subjects 
    }
    console.log("Student "+(i+1)+"'s total marks is : "+ total); // inside loop as total marks of each student is required to be printed in the console , if the total will be out of loop then the total marks of only the last student will be printed 
} 