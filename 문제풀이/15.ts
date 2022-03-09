let food: [string, number, boolean] = ["동서녹차", 4000, true];

let arrz: [string, number, ...boolean[]] = [
  "동서녹차",
  4000,
  true,
  false,
  true,
  true,
  false,
  true,
];

function 함수(...x: [string, boolean, ...(string | number)[]]) {}
함수("ㅋㅋㅋ", true, 5);

function 문자숫자분류기(...x: (number | string)[]): [number[], string[]] {
  let num: number[] = [];
  let char: string[] = [];
  x.forEach((data) => {
    if (typeof data == "string") {
      char.push(data);
    } else {
      num.push(data);
    }
  });
  return [num, char];
}
console.log(문자숫자분류기("b", 5, 6, 8, "a"));
