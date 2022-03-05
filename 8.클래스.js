//constructor 지정시 costructor 밖 필드에 타입을 지정해야 사용할 수 있다.
var Person = /** @class */ (function () {
    function Person(a) {
        this.data = 0;
        this.name = a;
    }
    //여기가 프로토타입 함수 지점
    Person.prototype.함수 = function (a) {
        console.log("안녕" + a);
    };
    return Person;
}());
var 사람1 = new Person("kim");
var 사람2 = new Person("park");
사람1.함수("ㅋㅋ");
