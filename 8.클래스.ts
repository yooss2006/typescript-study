//constructor 지정시 costructor 밖 필드에 타입을 지정해야 사용할 수 있다.

class Person {
  data: number = 0;
  name: string;
  constructor(a: string) {
    this.name = a;
  }

  //여기가 프로토타입 함수 지점
  함수(a: string) {
    console.log("안녕" + a);
  }
}

let 사람1 = new Person("kim");
let 사람2 = new Person("park");
사람1.함수("ㅋㅋ");
