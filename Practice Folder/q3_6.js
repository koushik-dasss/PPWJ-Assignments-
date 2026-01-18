class Person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    fullname(){
        return this.firstname + " " + this.lastname;
    }
}
let name1 = new Person("Koushik"," Das");
let name2 = new Person("Roman"," Reigns");
console.log(name1.fullname()); // method => () is to be there , getter and setter has no ()
console.log(name2.fullname());

