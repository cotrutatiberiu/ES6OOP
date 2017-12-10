class Vehicle{
    constructor(){
        this.gpsEnabled=true;
    }
}

class Drone extends Vehicle{

}

class Car extends Vehicle{
    constructor(){
        super();
        //Daca vreau sa modific trebuie dupa SUPER
        //this.gpsEnabled=false;
    }
}

let c = new Car();
console.log(c.gpsEnabled);