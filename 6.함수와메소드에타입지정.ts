//함수에 넣을 타입 지정과 반환하는 타입을 지정하는 방법
type 함수타입 = (a: string) => number;

//함수 표현식을 사용해야 함수 type alias를 사용할 수 있다.
let 함수표현식: 함수타입 = function (a) {
  return 4;
};

type 회원정보타입 = {
  name: "kim";
  age: number;
  plus: (a: number) => number;
  changeName: () => void;
};

let 회원정보: 회원정보타입 = {
  name: "kim",
  age: 35,
  plus(a) {
    return a + 1;
  },
  changeName: () => {
    console.log("안녕");
  },
};
