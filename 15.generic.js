function 함수(x) {
    return x[0]; //unkown 타입이 반환된다.
}
var a = 함수([4, 2]);
//generic : 파라미터로 타입을 입력해서 사용 <>을 이용
//장점 : 확장성이 높음
function 함수1(x) {
    return x[0]; //unkown 타입이 반환된다.
}
var b = 함수1([4, 2]);
//아래의 경우 그냥 generic을 사용하면 x-1에서 에러가 발생한다. 그 이유는 <number> 대신 다른게 들어올 수도 있어서인데 이때 exptends문법을 사용한다.
//extends 문법으로 들어오는 타입을 제한할 수 있다.
//내가 만든 타입도 number 위치에 올 수 있다.
function 함수2(x) {
    return x - 1; //unkown 타입이 반환된다.
}
var c = 함수2(100);
