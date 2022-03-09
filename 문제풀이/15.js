var food = ["동서녹차", 4000, true];
var arrz = [
    "동서녹차",
    4000,
    true,
    false,
    true,
    true,
    false,
    true,
];
function 함수() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
}
함수("ㅋㅋㅋ", true, 5);
function 문자숫자분류기() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var num = [];
    var char = [];
    x.forEach(function (data) {
        if (typeof data == "string") {
            char.push(data);
        }
        else {
            num.push(data);
        }
    });
    return [num, char];
}
console.log(문자숫자분류기("b", 5, 6, 8, "a"));
