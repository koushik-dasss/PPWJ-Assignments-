// You are required to build a Student Management System in
// JavaScript using Object-Oriented Programming concepts.Create a
// class named Student with the following properties inside the con-
// structor(name,rollNumber,marks)
// Implement getter and setter methods for:name and marks Ensure
// that the marks setter only accepts values between 0 and 100.Add
// the following methods inside the class:
// • displayInfo() → should return the student’s name, roll num-
// ber, and marks
// • result() → should return ”Pass” if marks 40, otherwise ”Fail”
// • Create at least five Student objects and store them in an
// array.
// • Use a for. . . of loop to display each student’s details and
// pass/fail status in the console.
// Update at least two students’ information (one name and one
// marks) using the setter methods, and again use a for. . . of loop
// to display the updated list.
class Student{
    constructor(name,rollNumber,marks){
        this._name = name; // internal property(variable) name changed as setter and getter method will override the same property name inside class's constructor and call themseleves again and again causing infinite recursion => stack overflow 
        this.rollNumber = rollNumber;
        this._marks = marks;
    }
    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }
    get marks(){
        return this._marks;
    }
    set marks(newMarks){
        if(newMarks >= 0 && newMarks<= 100){
            this._marks = newMarks;
        }else{
            console.log("Marks must be between 0 and 100.");
        }
    }
    displayInfo(){
        return "Name : "+ this._name + " Roll no. : " + this.rollNumber + " Marks : "+ this._marks;
    }
    result(){
        return this._marks >=40 ? "Pass" : "Fail"; 
    }
}
let students = [
        new Student("Koushik",1,100),
        new Student("KD",2,50),
        new Student("Roman",3,75),
        new Student("John",4,80),
        new Student("Cena",5,26)
    ]; // array of objects
console.log("Original Students List : ");
for(let stu of students){
    console.log(stu.displayInfo(), "| Result:", stu.result());
}
students[0].name = "Aman Kumar";
students[4].marks = 78;
console.log("Updated Students List : ");
for(let stu of students){
    console.log(stu.displayInfo(), "| Result:", stu.result());
}


