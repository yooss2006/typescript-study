//object에 타입지정하는 방법은 type키워드와 interface키워드가 있다.

//type 키워드 이용
type Square = {
  color: string;
  width: number;
};
let 네모: Square = { color: "red", width: 100 };

//interface 키워드 이용
interface Square2 {
  color: string;
  width: number;
}
let 세모: Square2 = { color: "red", width: 100 };

//interface의 장점 1 : extends로 복사 가능
//중복되는 타입을 복사해서 사용가능하다.
interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}
//type도 유사한 기능이 있음
//&기호는 왼쪽도 만족하고 오른쪽도 만족하는 타입을 생성하는 것이다. 복사는 아님
type Animal = { name: string };
type Cat = { age: number } & Animal;

//type과 interface의 차이 : interface는 중복선언 가능 type은 중복선언 불가능
interface Color {
  name: string;
}
interface Color {
  size: number;
}
//중복선언가능한 모습이고 {name:string, size:number}로 합쳐진다.
//외부 라이브러리에서 interface를 많이 사용한다.
