// Q6 A school maintains records of each student using objects. A student
// object contains:
// - name
// - age
// - marks (stored as an array of numbers)
// Your task is to:
// - Add a new mark to the student’s marks array (representing the
// score in a new exam).
// - Find and print the highest mark obtained by the student.
let student = {
    name : "Koushik",
    age : 21 ,
    marks:[70,60,80,50]
};
console.log("The initial  student object is : "  , student); // initial object 
student.marks.push(90); // added a new mark 
console.log("The final  student object is : "  , student); // cuurent object after adding new mark
let highest = Math.max(...student.marks); // highest mark from the array of marks of the object , using spread operator 
console.log("The highest mark from the array of marks of the student object is :" , highest); 

// using traditional for loop for finding max element of the marks array of the object student 
// let max = student.marks[0];
// for(let i=0 ; i < student.marks.length ; i++){
//     if(student.marks[i]>max){
//         max=student.marks[i];
//     }
// }
// console.log(max);

