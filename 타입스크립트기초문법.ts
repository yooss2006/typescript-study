//이 변수엔 문자 타입만 들어올 수 있다.
let 이름1: string = "kim";
//글자로 이루어진 array임을 명시
let 이름2: string[] = ["kim", "park"];
//name이라는 키의 값으로 문자가 들어옴을 명시, 꼭 name이라는 키와 값이 들어가야함
let 이름3: { name: string } = { name: "kim" };
//name이 들어가지 않아도 됨
let 이름4: { name?: string } = {};

//여러개의 타입이 들어올 수 있게하기
let 이름5: string | number = 10;
let 이름6: string[] | number = 10;

//배열의 요소의 타입도 지정이 가능하다. 튜플타입
//아래의 Member의 경우 첫번째 요소는 숫자, 두번째 요소는 boolean이 들어가야한다.
type Member = [number, boolean];
let john: Member = [10, true];

//클래스에서의 타입 지정
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

//any, unknown 타입
let anyT: any;
anyT = 10;
let unknownT: unknown;
unknownT = 20;
// let x: string = anyT;  오류 없음
// let y: string = unknownT; 오류 있음

let 문자: string;
문자 + 1;
let 숫자: number;
숫자 + 1;
let 문숫자: string | number;
// 문숫자+1; 오류 있음
let 언노운: unknown;
// 언노운+1; 오류 있음
