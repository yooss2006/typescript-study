//타입스크립트의 장점중에 객체지향 언어에서만 가지는 문법을 사용할 수 있다.
//1. public 모든 자식들이 사용가능, public 키워드는 생략해도 강제로 부여되는 속성, 항상 있음
//2. private class {} 안에서만 수정, 이용이 가능하다. object에서 수정하는 것을 막는다.
var Users = /** @class */ (function () {
    function Users(a) {
        this.familyName = "kim";
        this.name = this.familyName + a;
    }
    //   object에서 private가 된 속성을 바꾸고싶다면 메서드를 이용한다.
    Users.prototype.이름변경함수 = function () {
        this.familyName = "pack";
    };
    return Users;
}());
var 유저 = new Users("park");
console.log(유저);
//public 키워드 사용시 this.을 축약이 가능하다.
var Persons = /** @class */ (function () {
    //public name은 이 자리에 들어온 파라미터는 자식의 name속성에 기입해주세요라는 의미이다.
    function Persons(name) {
        this.name = name;
    }
    return Persons;
}());
var soo = new Persons("zz");
