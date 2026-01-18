class Vehicle{
    constructor(color,currentSpeed,maxSpeed){
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }
    move(){
        console.log("Moving at "+ this.currentSpeed);
    }
    accelerate(amount){
        this.currentSpeed+=amount;
        if(this.currentSpeed>this.maxSpeed){
            this.currentSpeed = this.maxSpeed;
        }
    }
}
class Motorcycle extends Vehicle{
    constructor(color,currentSpeed,maxSpeed,fuel){
        super(color,currentSpeed,maxSpeed);
        this.fuel = fuel;
    }
    doWheelie(){
        console.log("Driving on one wheel!");
    }
}
let bike = new Motorcycle("blue",0,200,"petrol");
console.log(bike.color);
bike.accelerate(50);
bike.move();
bike.doWheelie();


