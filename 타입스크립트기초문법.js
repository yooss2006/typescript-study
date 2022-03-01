//이 변수엔 문자 타입만 들어올 수 있다.
var 이름1 = "kim";
//글자로 이루어진 array임을 명시
var 이름2 = ["kim", "park"];
//name이라는 키의 값으로 문자가 들어옴을 명시, 꼭 name이라는 키와 값이 들어가야함
var 이름3 = { name: "kim" };
//name이 들어가지 않아도 됨
var 이름4 = {};
//여러개의 타입이 들어올 수 있게하기
var 이름5 = 10;
var 이름6 = 10;
var 이름7 = "kim";
//함수에서의 타입지정
//(매개변수는 이 안에서 지정한다. : 타입)
//반환할 타입은 () :옆에서 정의한다.
function 함수(x) {
    return x * 2;
}
var john = [10, true];
var objTest = {
    name: "kim",
    age: "13",
};
//클래스에서의 타입 지정
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
//any, unknown 타입
var anyT;
anyT = 10;
var unknownT;
unknownT = 20;
// let x: string = anyT;  오류 없음
// let y: string = unknownT; 오류 있음
var 문자;
문자 + 1;
var 숫자;
숫자 + 1;
var 문숫자;
// 문숫자+1; 오류 있음
var 언노운;
// 언노운+1; 오류 있음
