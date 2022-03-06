//뭔갈 return 하지 않을경우 never 타입을 사용할 수 있다. = void랑 유사
//조건 1. return이 없어야 한다.
//조건 2. endpoint가 없어야한다. 함수 실행이 끝나면 안된다.
function naver(): never {
  //never 타입을 붙일 수 있는 경우
  //1. 에러가 발생하여 코드 중간에 멈춘 경우
  throw new Error();
  //2. 무한 루프인 경우
  while (true) {}
}

//never타입은 코드를 이상하게 짜면 등장한다. 따라서 never이 등장하면 왜 등장했는지만 알면된다.
//1. 파라미터가 naver 타입이 되는 경우
function 함수n(parameter: string) {
  if (typeof parameter === "string") {
    parameter + 1;
  } else {
    //else는 등장할 수 없는 부분이다 아래 parameter에 마우스를 올리면 해당 변수는 naver 타입이다.
    parameter;
  }
}

//2. 함수 표현식이 아무것도 return 하지 않고 끝날경우 never타입이 자동으로 return 타입에 할당된다.
//함수선언문은 void타입이 할당됨
function 함수선언문() {
  throw new Error();
}
let 함수표현식식 = function () {
  throw new Error();
};
