import {Vehicle} from "./vehicle.js";

export class Drone extends Vehicle{
    constructor(license,model){
        //to vehicle
        super(license,model);
        this.airTime=null;
        this.base=null;
    }
}