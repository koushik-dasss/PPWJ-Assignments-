// Using the Person class from Q2, add a method called fullname,
// which returns the concatenated value of firstname and lastname
// when invoked. Create values for person1 and person2 using two
// friends’ first and last names. Using the fullname method within
// the class, return the full name of one or both people.
class Person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    fullname(){
        return this.firstname + " " + this.lastname; 
    }
}
let friend1 = new Person("Koushik","Das");
let friend2 = new Person("John","Cena");
console.log(friend1.fullname());
console.log(friend2.fullname());

