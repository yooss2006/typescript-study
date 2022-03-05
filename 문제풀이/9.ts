class Car {
  model: string;
  price: number;
  constructor(model: string, price: number) {
    this.model = model;
    this.price = price;
  }
  tax(): number {
    return this.price / 10;
  }
}
let car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.tax());

class Word {
  num: number[];
  str: string[];
  constructor(...word: (number | string)[]) {
    let number: number[] = [];
    let string: string[] = [];
    word.forEach((data) => {
      if (typeof data === "string") {
        string.push(data);
      } else {
        number.push(data);
      }
    });
    this.num = number;
    this.str = string;
  }
}
let obje = new Word("kim", 3, 5, "park");
console.log(obje.num);
console.log(obje.str);
