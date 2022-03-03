// function 함수(x:number|string){
//     return x+1;
// }
// 함수(123);
//위 함수는 실행이 안된다. 그 이유는 x:number|string이 유니온 타입이기 때문이다.
//type이 하나로 확정되지 않았을 경우 narrowing을 사용한다.
//narrowing 하는 방법
//typeof는 해당 변수가 어떤 타입인지 검사할 수 있다.
//else를 반드시 사용하자.
function 함수(x) {
    if (typeof x === "string") {
        return x + "1";
    }
    else {
        return x + 1;
    }
}
함수(123);
//검사종류
//typeof 변수
//속성명 in 오프젝트자료
//인스턴스 instanceof 부모
//assertion 타입 덮어쓰기
function 함수2(x) {
    var arr = [];
    arr[0] = x;
}
//assertion 문법은 유니온 타입의 문법에서 덮어쓸 때 사용한다. 단순히 타입 변경문법은 아님
//무슨 타입이 들어올지 100% 확실할때만 사용하는 문법
