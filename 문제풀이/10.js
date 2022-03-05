var 상품 = {
    brand: "Samsung",
    serialNumber: 1360,
    model: ["TV", "phone"],
};
var 장바구니 = [
    { product: "청소기", price: 7000 },
    { product: "삼다수", price: 800 },
];
var 장바구니2 = [{ product: "청소기", price: 7000, card: false }];
var pmObj = {
    plus: function (x, y) {
        return x + y;
    },
    minus: function (x, y) {
        return x - y;
    },
};
console.log(pmObj.plus(10, 2));
console.log(pmObj.minus(10, 2));
