//keyof
interface Person {
  age: number;
  name: string;
}

type PersonKeys = keyof Person; //키 값을 뽑아와 "age" | "name" 처럼 유니온 타입으로 만듬

interface Person2 {
  [key: string]: number;
}

type PersonKeys2 = keyof Person; // string | number

//타입 변환
type Model = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};

type TypeChanger<MyType> = {
  [key in keyof MyType]: string;
  // keyof MyType = "color" | "model" | "price"
  //"color" | "model" | "price" 에 해당하는 속성이 있으면 모두 string으로 바꿔줘라.
};

type NewType = TypeChanger<Model>;
