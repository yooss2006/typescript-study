interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}
let 상품: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

interface Basket {
  product: string;
  price: number;
}
interface Cart extends Basket {
  card?: boolean;
}
let 장바구니: Basket[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];
let 장바구니2: Cart[] = [{ product: "청소기", price: 7000, card: false }];

interface Pminterface {
  plus(x: number, y: number): number;
  minus(x: number, y: number): number;
}
let pmObj: Pminterface = {
  plus(x, y) {
    return x + y;
  },
  minus(x, y) {
    return x - y;
  },
};
console.log(pmObj.plus(10, 2));
console.log(pmObj.minus(10, 2));
