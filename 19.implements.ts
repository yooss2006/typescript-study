//implements는 class가 지정한 속성을 가지고 있는지 확인하기 위해 사용한다.
//단순히 체크용이라 반영되진 않음
interface BusType {
  model: string;
  price: number;
}

class Bus implements BusType {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
}
let 붕붕이 = new Bus("morning");
