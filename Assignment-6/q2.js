// Create a class named Person which includes a constructor for
// the properties: firstname,lastname.Create a variable and assign it
// to a new Person object using your friend’s first name and last
// name.Add a second variable for another friend, also using their
// first and last names.Output both friends into the console with a
// greeting message: "Hello, Firstname Lastname".
class Person{
    constructor(firstname ,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
let friend1 = new Person("Koushik","Das");
let friend2 = new Person("Roman","Reigns");
console.log("Hello, "+ friend1.firstname + " "+ friend1.lastname);
console.log("Hello, "+ friend2.firstname+ " "+ friend2.lastname);



