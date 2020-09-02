var car = /** @class */ (function () {
    function car(_location, _color) {
        this._location = _location;
        this._color = _color;
    }
    car.prototype.travelTo = function (point) {
        console.log("taksi X: " + this._location.x + " Y: " + this._location.y + " dan X: " + point.x + " Y: " + point.y + " konumuna gidiyor.");
    };
    Object.defineProperty(car.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            if (value.x < 0 || value.y < 0) {
                throw new Error('koordinat bilgileri negatif olamaz');
            }
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    return car;
}());
var car1 = new car({ x: 2, y: 5 });
car1.travelTo({ x: 1, y: 2 });
var currentLocation = car1.location;
car1.location = { x: 2, y: 5 };
