function 갯수출력함수<Type extends string | string[]>(x: Type): number {
  return x.length;
}
console.log(갯수출력함수<string>("hello"));
console.log(갯수출력함수<string[]>(["hello", "my"]));

interface Animals {
  name: string;
  age: number;
}

let data = '{"name" : "dog", "age" : 1 }';

function obj변환기<Type>(x: string): Type {
  return JSON.parse(x);
}
let result = obj변환기<Animals>(data);
console.log(result);

class Person3<TT> {
  name: TT;
  constructor(a: TT) {
    this.name = a;
  }
}
let ab = new Person3<number>(5);
let abc = new Person3<string>("ABC");
ab.name; //any 타입이 되었넹
abc.name; //any 타입이 되었넹
