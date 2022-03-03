//변수에는 kim이라는 문자열만 들어갈 수 있다.
var 변수;
var 변수2;
//literaltype을 사용하는 이유
//1. 변수에 뭐가 들어올지 엄격하게 관리할 수 있음
//2. 자동완성이 잘된다.
function 리터럴함수(a) {
    return "이자리에 return도 제한 가능";
}
//함수의 파라미터를 제한할 수 있다.
리터럴함수("hello");
//literal type의 문제점
var 자료 = {
    name: "kim",
};
function 내함수(a) { }
내함수(자료.name);
// 내함수의 매개변수는 “kim”타입을 요구한다. 하지만 자료.name은 string 타입이기에 오류 발생
//해결책 1
//자료의 타입지정을 잘한다.
// var 자료 :{name:"kim"} = {
//     name: "kim",
//   };
//해결책 2
// assertion 문법 사용
// 내함수(자료.name as "kim");
//해결책 3
//as const : 이 object는 literal type 지정을 알아서 해달라는 뜻
//object의 값을 그대로 타입으로 저징해준다.
//object 속성들에 모두 readonly를 붙인다.
var 자료2 = {
    name: "kim",
};
