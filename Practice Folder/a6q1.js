class Student{
    constructor(name,rollNumber,marks){
        this._name = name;
        this.rollNumber = rollNumber;
        this._marks = marks;
    }
    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName
    }
    get marks(){
        return this._marks;
    }
    set marks(newMarks){
        if(newMarks >= 0 && newMarks <= 100){
            this._marks = newMarks;
        }else{
            console.log("Marks should be between 0 and 100.");
        }
    }
    displayInfo(){
        return "Name : "+ this._name + " Roll no. : " + this.rollNumber + " Marks : "+ this._marks;
    }
    result(){
        return this._marks >= 40 ? "Pass" : "Fail" ; 
    }

}
let students = [new Student("Koushik",12,40),new Student(), new Student(), new Student() , new Student()];
console.log("Original list is : ");
for(let stu of students){
    console.log(stu.displayInfo() , "| Result : ", stu.result());
}
students[3].marks = 78;
students[4].name = "Alexa";
console.log("Updated list is : ");

for(let stu of students){
    console.log(stu.displayInfo() , "| Result : ", stu.result());
}

