// A university wants to manage students and their grades. Write a
// function studentReport(name, ...marks) that:
// •Accepts the student’s name and marks as parameters.
// •Calculates the average using an inner function.
// •Displays grade status as Pass if average ≥40, else Fail
function studentReport(name , ...marks){
    let sum = 0;
    function average(){
        for(let m of marks){
            sum+=m;
        }
        return sum/marks.length;
    }
    let avg = average();
    let status = (avg>=40)?"Pass":"Fail";
    console.log("Name of the student : ", name);
    console.log("Marks of the student : " , marks);
    console.log("Average mark of the student :" , avg);
    console.log("Status of the student  :" , status);
}
studentReport("Koushik",50,60,70,90,80);