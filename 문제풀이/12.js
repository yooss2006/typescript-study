var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Userppp = /** @class */ (function () {
    function Userppp() {
        this.z = 30;
    }
    Userppp.prototype.함수 = function () {
        Userppp.x = 10;
    };
    Userppp.x = 10;
    Userppp.y = 20;
    return Userppp;
}());
var UserpppCopy = /** @class */ (function (_super) {
    __extends(UserpppCopy, _super);
    function UserpppCopy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserpppCopy.prototype.함수2 = function () {
        this.z = 20;
    };
    return UserpppCopy;
}(Userppp));
var userppp = new Userppp();
Userppp.y;
//private static은 클래스 내부에서 클래스.변수로만 불러올 수 있음
//public static은 클래스 외부에서 아무때나 클래스.변수로 불러올 수 있음
//protected는 복사한 클래스에서 해당 변수를 사용할 수 있는 키워드이다.
var Userpp = /** @class */ (function () {
    function Userpp() {
    }
    Userpp.addOne = function (num) {
        return (Userpp.x += num);
    };
    Userpp.printX = function () {
        console.log(x);
    };
    Userpp.x = 10;
    Userpp.y = 20;
    return Userpp;
}());
Userpp.addOne(3); //이렇게 하면 x가 3 더해져야함
Userpp.addOne(4); //이렇게 하면 x가 4 더해져야함
Userpp.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
