//타입 체크 시 null & undefined를 체크하는 경우가 매우 많다.
function un함수(a: string | undefined) {
  //a?:string 이렇게도 가능
  //a가 undefined일 경우 and 연산자에 의해 false값이 나오므로 if안의 연산 실행안됨
  //a가 문자열일 경우 and 연산자에 의해 둘다 true 이므로 if안의 연산 실행
  if (a && typeof a === "string") {
  }
}

type Fish = { swim: string };
type Bird = { fly: string };
function 함수fb(animal: Fish | Bird) {
  //animal이 Fish형인지 Bird형인지를 체크해야한다. 이때 typeOf는 사용할 수 없으므로 in 키워드를 사용한다.
  if ("swim" in animal) {
    return animal.swim;
  }
  return animal.fly;
}

// 오브젝트 instanceof 부모class
let 날짜 = new Date();
if (날짜 instanceof Date) {
}

//오브젝트 타입이 비슷하게 생겼을 경우 - 키는 같지만 값이 다름
//literal type을 넣어서 타입을 구분한다 예를들어 wheel로 바퀴수는 변하지 않는다.
type Cars = {
  wheel: "4개";
  color: string;
};
type Bike = {
  wheel: "2개";
  color: string;
};

function 함수(x: Cars | Bike) {
  if (x.wheel === "4개") {
    console.log("이 차는 " + x.color);
  } else {
    console.log("이 바이크는 " + x.color);
  }
}
