class Vehicle{
    constructor(licenseNum){
        this.licenseNum=licenseNum;
    }
}

class Drone extends Vehicle{

}

class Car extends Vehicle{
    constructor(licenseNum){
        super(licenseNum);
        console.log("asdad");
    }
}

let c = new Car("A123");
console.log(c.licenseNum);

//Daca vehicle nu are constructor tot trebuie super in Car