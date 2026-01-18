// Design and implement a program in JavaScript to demonstrate the
// concept of inheritance. Follow the steps below:
// 1. Create a base class Vehicle with:
// • Fields: color, currentSpeed, maxSpeed.
// • Methods:
// – move() – prints the message "moving at
// <currentSpeed>".
// – accelerate(amount) – increases the currentSpeed
// by the given amount.
// 2. Create a subclass Motorcycle that extends Vehicle and in-
// cludes:
// • An additional field fuel.
// • A new method doWheelie() that prints "Driving on
// one wheel!".
// 3. Instantiate an object of Motorcycle with appropriate values
// and perform the following:
// • Print the color of the motorcycle (inherited property).
// • Accelerate the motorcycle by 50 units using the
// accelerate() method.
// • Call the move() method to display the updated speed.
// • Call the subclass-specific method doWheelie().
// 4. Display the program output to verify inheritance and subclass
// extension.
// Expected Output Example:
// Black
// moving at 50
// Driving on one wheel!
class Vehicle{
    constructor(color,currentSpeed,maxSpeed){ // field initialization 
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }
    // base class specific methods 
    move(){
        console.log("Moving at : "+ this.currentSpeed);
    }
    accelerate(amount){
        this.currentSpeed+=amount;
        // additional conditional for keeping the speed at par  as maxSpeed (always the currentSpeed should be less than maxSpeed)
        if(this.currentSpeed>this.maxSpeed){
            this.currentSpeed=this.maxSpeed;
        }
    }
}
class Motorcycle extends Vehicle{ // sub class of Vehicle class 
    constructor(color,currentSpeed,maxSpeed,fuel){
        super(color,currentSpeed,maxSpeed); // parent constructor call using super() keyword 
        this.fuel = fuel;
    }
    // sub-class(derived class) specific method 
    doWheelie(){
        console.log("Driving on one wheel!");
    }
}
let bike = new Motorcycle("Black",0,200,"Petrol"); // object creation of sub-class
console.log(bike.color); // inherited property of base class used by the object 
bike.accelerate(50); // method called to increase the speed (method inherited from base class)
bike.move(); // method called to display the current speed (method inherited from base class)
bike.doWheelie(); // sub-class specific method called
