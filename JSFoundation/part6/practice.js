// Classes, Objects, and Inheritance
// Task 1: Class Inheritance

// Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".

// Task 2: Method Overriding in Inheritance

// Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving". Then, override the move() method in the Car class to return "The car is driving".

// Task 3: Static Methods in Classes

// Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise.

class Vehicle{
    constructor(make, model){
        this.make=make;
        this.model=model;
    }
    getDetails(){
        return `Make: ${this.make}, Model: ${this.model}`;
    }
    move(){
        return `The vehicle is moving`;
    }
    static isVehicle(obj){
        return obj instanceof Vehicle
    }
}
class Car extends Vehicle{
    startEngine(){
        return `Engine started`;
    }
    move(){
        return `The car is driving`;
    }
}

const myCar = new Car("Tata","Nano");
// console.log(myCar.getDetails());
// console.log(myCar.startEngine());
// console.log(myCar.move());
// console.log(Vehicle.isVehicle(myCar));
// console.log(Vehicle.isVehicle({}));


// Encapsulation, Polymorphism, Abstraction, and Getters/Setters
// Task 1: Encapsulation Using Getters and Setters

// Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.



// Task 2: Polymorphism with Method Overriding

// Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.
//Task 1
class BankAccount {
    constructor(balance=0){
        this._balance=balance;
        deposit(amount){
            this.amount=amount;
        }

        withdraw(amount){
            this.withdraw=withdraw;
        }
    }
}

