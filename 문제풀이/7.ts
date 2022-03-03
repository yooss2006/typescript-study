type CutZero = (a: string) => string;
type RemoveDash = (a: string) => number;
type Common = (a: string, b: CutZero, c: RemoveDash) => number;

let cutZero: CutZero = function (a) {
  if (a[0] === "0") {
    return a.slice(1, a.length);
  } else {
    return a;
  }
};
let removeDash: RemoveDash = function (a) {
  let x = [];
  a.split("").forEach((data) => {
    if (data !== "-") {
      x.push(data);
    }
  });
  return Number(x.join(""));
};

let common: Common = function (a, b, c) {
  return c(b(a));
};
console.log(common("010-1111-2222", cutZero, removeDash));
