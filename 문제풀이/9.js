var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
var car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.tax());
var Word = /** @class */ (function () {
    function Word() {
        var word = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            word[_i] = arguments[_i];
        }
        var number = [];
        var string = [];
        word.forEach(function (data) {
            if (typeof data === "string") {
                string.push(data);
            }
            else {
                number.push(data);
            }
        });
        this.num = number;
        this.str = string;
    }
    return Word;
}());
var obje = new Word("kim", 3, 5, "park");
console.log(obje.num);
console.log(obje.str);
