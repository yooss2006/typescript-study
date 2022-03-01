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

//타입 설정이 번거롭다면 변수처럼 만들어두고 사용하기가 가능하다.
//일반 변수와 차별화하기 위해 대문자 시작을 많이 사용함
type Name = string | number;
let 이름7: Name = "kim";

//함수에서의 타입지정
//(매개변수는 이 안에서 지정한다. : 타입)
//반환할 타입은 () :옆에서 정의한다.
function 함수(x: number): number {
  return x * 2;
}
// 함수("kim")은 에러 발생

//배열의 요소의 타입도 지정이 가능하다. 튜플타입
//아래의 Member의 경우 첫번째 요소는 숫자, 두번째 요소는 boolean이 들어가야한다.
type Member = [number, boolean];
let john: Member = [10, true];

//object속성 중 지정할 내용이 너무 많을 시
//글자로된 모든 object 속성 타입은 string을 가진다는 의미이다.
type ObjTy = {
  [key: string]: string;
};
let objTest: ObjTy = {
  name: "kim",
  age: "13",
};

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
