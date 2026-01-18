class Student{
    constructor(name,rollNumber,marks){
        this._name = name;
        this.rollNumber = rollNumber;
        this._marks = marks;
    }
    get name(){
        return this._name;
    }
    get marks(){
        return this.marks;
    }
    set name(newName){
        this._name = newName
    }
    set marks(newMarks){
        if(newMarks >= 0 && newMarks <= 100){
            this._marks = newMarks;
        }else{
            console.log("Marks should be between 0 and 100.");
        }
    }
    displayInfo(){
        return "Name : "+ this._name + " Marks : "+ this._marks + " Roll Number : "+ this.rollNumber;
    }
    result(){
        this._marks>=40 ? "Pass" : "Fail" ;
    }
}
let students = [new Student("Koushik", 14, 60), new Student("Roman", 15 , 32), new Student("TSG",16,89), new Student("Alex",12,56) , new Student("Raman",16,12)];
console.log("Original students list : ");
for(let stu of students){
    console.log(stu.displayInfo() | " Result : " , stu.result());
}
students[0].name = "DJ Alok";
students[4].marks = 78;
for(let stu of students){
    console.log(stu.displayInfo() | "Result : ", stu.result());
}