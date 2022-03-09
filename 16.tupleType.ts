//tuple 타입 : 자료의 순서, 위치까지 고려하는 타입지정방법
var 멍멍: [string, boolean] = ["dog", true];
//시작과 끝이 아닌 부분에 ?를 사용하면 위치가 애매하기에 뒤에서부터 ?를 삽입할 수 있다.
var 왈왈: [string, boolean, number?] = ["dog", true];

//튜플을 이용한 레스트 파라미터
function 함수(...x: [number, string]) {}
함수(1, "zz");

//spread 연산자를 튜플로 타입지정하는 방법
let arr = [1, 2, 3];
let arr2: [number, number, ...number[]] = [4, 5, ...arr];
