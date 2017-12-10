class Vehicle{
    start(){
        console.log("starting");
    }
    static getCompanyName(){
        console.log("My Company");
    }
}

class Car extends Vehicle{
    start(){
        //Daca le vreau pe amandoua trebuie super
        super.start();
        console.log("Starting");
    }
    static getCompanyName(){
        //Daca le vreau pe amandoua trebuie super
        super.getCompanyName();
        //Overwrite inherit
        console.log("My other ocmpany");
    }
}
//Start in clasa overwrites inherit
let c=new Car();
c.start();

//Acces static method inheritance
//Doar pe clasa trebuie folosit
Car.getCompanyName();