var SquareA = /** @class */ (function () {
    function SquareA(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
    SquareA.prototype.draw = function () {
        var _a;
        var newDiv = document.createElement("div");
        newDiv.style.width = "".concat(this.x, "px");
        newDiv.style.height = "".concat(this.y, "px");
        newDiv.style.backgroundColor = this.color;
        newDiv.style.position = "absolute";
        newDiv.style.top = "".concat(Math.floor(Math.random() * 450), "px");
        newDiv.style.left = "".concat(Math.floor(Math.random() * 450), "px");
        (_a = document.querySelector("#canvas")) === null || _a === void 0 ? void 0 : _a.appendChild(newDiv);
    };
    return SquareA;
}());
var 네모s = new SquareA(30, 30, "red");
네모s.draw();
네모s.draw();
네모s.draw();
네모s.draw();
