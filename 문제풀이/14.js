function 갯수출력함수(x) {
    return x.length;
}
console.log(갯수출력함수("hello"));
console.log(갯수출력함수(["hello", "my"]));
var data = '{"name" : "dog", "age" : 1 }';
function obj변환기(x) {
    return JSON.parse(x);
}
var result = obj변환기(data);
console.log(result);
var Person3 = /** @class */ (function () {
    function Person3(a) {
        this.name = a;
    }
    return Person3;
}());
var ab = new Person3(5);
var abc = new Person3("ABC");
ab.name; //any 타입이 되었넹
abc.name; //any 타입이 되었넹
