import { Car } from "../classes/car.js";
import { Drone } from "../classes/drone.js";


export class FleetDataService {
    constructor() {
        this.cars = [];
        this.drones = [];
    }
    loadData(fleet) {
        for (let data of fleet) {
            switch (data.type) {
                case "car":
                    //this in functie de car-ul incarcat din for
                    //instantiate car
                    let car = this.loadCar(data);
                    this.cars.push(car);
                    break;
                case "drone":
                    this.drones.push(data);
                    break;
            }
        }
    }
    loadCar(car){
        let c= new Car(car.license,car.model);
        c.miles=car.miles;
        c.make=car.make;
        return c;
    }
    
}

//LOAD DATA SIMPLE v1
//Raw object fara integrarea clasei
// loadData(fleet) {
//     for (let data of fleet) {
//         switch (data.type) {
//             case "car":
//                 this.cars.push(data);
//                 break;
//             case "drone":
//                 this.drones.push(data);
//                 break;
//         }
//     }
// }