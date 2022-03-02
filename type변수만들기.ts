//타입 설정이 번거롭다면 변수처럼 만들어두고 사용하기가 가능하다.
//타입은 재정의가 불가능하다.
//일반 변수와 차별화하기 위해 대문자 시작을 많이 사용함
//타입변수 만드는 방법 = type alias
type Animal = string | number | undefined;
//let 동물 :string|number|undefined;
let 동물: Animal;

type Animal2 = { name: string; age: number };
// let 동물2 :{name:string, age:number};
let 동물2: Animal2;

// 타입스크립트를 사용하면 object 자료수정을 막을 수 있다.
type Data = {
  readonly name: string;
};
const 자료: Data = {
  name: "타입스크립트",
};
// 자료.name = "자바스크립트" 오류발생

//속성 몇개가 선택사항이라면
//name? 이 가능하다.
type Square = {
  color?: string;
  width: number;
};

let 네모2: Square = {
  //color를 넣지않아도 됨
  width: 100,
};

//union 타입으로 합치기 가능
type Name = string;
type Age = number;
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };
type NewType = PositionX & PositionY;
//&를 이용하면 object도 합치기 가능하다. {x:number, y:number}
//extend라고 한다.

//object속성 중 지정할 내용이 너무 많을 시
//글자로된 모든 object 속성 타입은 string을 가진다는 의미이다.
type ObjectType = {
  [key: string]: string;
};
let objTest: ObjectType = {
  name: "kim",
  age: "13",
};
