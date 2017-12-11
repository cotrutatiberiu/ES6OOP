import { Car } from "../classes/car.js";
import { Drone } from "../classes/drone.js";
import { DataError } from "./data-error.js";

export class FleetDataService {
  constructor() {
    this.cars = [];
    this.drones = [];
    this.errors = [];
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
        default:
          //this in functie de car-ul incarcat din for
          let e = new DataError("Invalid vehicle type", data);
          this.errors.push(e);
      }
    }
  }
  //car e din parametru
  loadCar(car) {
    try {
      let c = new Car(car.license, car.model);
      c.miles = car.miles;
      c.make = car.make;
      return c;
    } catch (e) {
      this.errors.push(new DataError("error loading car", car));
    }
    //daca nu merge return c,return null atunci
    return null;
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
