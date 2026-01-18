class Person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
let name1 = new Person("Koushik"," Das");
let name2 = new Person("Roman"," Reigns");
console.log("Hello "+ name1.firstname + name1.lastname);
console.log("Hello "+ name2.firstname + name2.lastname);

