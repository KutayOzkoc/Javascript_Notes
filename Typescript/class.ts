import { Vehicle } from './car';
import {Point} from './car';


class car implements Vehicle {  

    constructor(private _location?: Point, private _color?: string) {  }

    travelTo(point: Point): void {
        console.log(`taksi X: ${this._location.x} Y: ${this._location.y} dan X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
    }

    get location() {
        return this._location;
    }

    set location(value: Point) {
        if(value.x<0 || value.y <0) {
            throw new Error('koordinat bilgileri negatif olamaz');
        }
        this._location = value;
    }
}

let car1: car = new car({ x: 2, y: 5 });
car1.travelTo({ x: 1, y: 2 });

let currentLocation = car1.location;
car1.location = { x: 2, y: 5 };
