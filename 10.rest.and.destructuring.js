//rest 파라미터 : 함수에 몇개에 파라미터가 들어갈지 모를 떄
// ...a 와 같이 사용하며 다른 파라미터가 있다면 맨 뒤에 있어야한다. x, ...a
function rest함수() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
rest함수(1, 5, 6, 5, 5, true);
//... 문법은 spread operator라는 문법이다.
// 함수 안에서 사용시 rest파라미터이며 배열이나 object 앞에서 사용시 괄호는 벗기는 문법이다.
//destructuring 문법;
var _a = ["안녕", 100], x = _a[0], y = _a[1];
// let { student: student, age1: age1 } = { student: true, age1: 20 };
var _b = { student: true, age1: 20 }, student = _b.student, age1 = _b.age1; //위 코드의 축약이다.
var objtest = { student: true, age1: 20 };
// function 함수s(a,b){
//     console.log(a,b)
// }
// 함수s(objtest.student, objtest.age1);
function 함수s(_a) {
    var student = _a.student, age1 = _a.age1;
    //destructuring 문법으로 변환
    console.log(student, age1);
}
함수s(objtest);
