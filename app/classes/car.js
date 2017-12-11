import {Vehicle} from "./vehicle.js";

export class Car extends Vehicle{
    constructor(license,model){
        //to vehicle
        super(license,model);
        this.miles=null;
        this.make=null;
    }
}