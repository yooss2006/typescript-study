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
//클래스 복사
var 원본 = /** @class */ (function () {
    function 원본() {
        this.x = 10;
    }
    return 원본;
}());
var 복사본 = /** @class */ (function (_super) {
    __extends(복사본, _super);
    function 복사본() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return 복사본;
}(원본));
//protected : class{}안에서만 사용가능
//extends로 복사하면 복사한 class{}안에서도 사용가능, private는 안된다.
var 프로텍트 = /** @class */ (function () {
    function 프로텍트() {
        this.x = 10;
    }
    return 프로텍트;
}());
var 프로텍트복사본 = /** @class */ (function (_super) {
    __extends(프로텍트복사본, _super);
    function 프로텍트복사본() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    프로텍트복사본.prototype.doThis = function () {
        this.x = 20;
    };
    return 프로텍트복사본;
}(프로텍트));
var 프로텍트트 = new 프로텍트복사본();
//static : 부모 클래스에 직접 부여되서 부모만 사용가능하다. 자식에게 물려주지 않음
//class로 부터 생성되는 object가 사용할 필요가 없는 변수들을 만들어놓고 싶을 때 사용
//private, protected, public와 같이 사용가능하다.
var 스태틱 = /** @class */ (function () {
    function 스태틱() {
        this.intro = 스태틱.skill + "전문가입니다."; //this.skill도 안된다.
    }
    스태틱.skill = "js";
    return 스태틱;
}());
스태틱.skill; //이렇게만 불러올 수 있다.
스태틱.skill = "ts"; //이렇게 접근해서 static 키워드가 적용된 변수를 수정할 수 있다.
