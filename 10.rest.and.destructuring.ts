//rest 파라미터 : 함수에 몇개에 파라미터가 들어갈지 모를 떄
// ...a 와 같이 사용하며 다른 파라미터가 있다면 맨 뒤에 있어야한다. x, ...a
function rest함수(...a: (number | boolean)[]) {
  console.log(a);
}
rest함수(1, 5, 6, 5, 5, true);

//... 문법은 spread operator라는 문법이다.
// 함수 안에서 사용시 rest파라미터이며 배열이나 object 앞에서 사용시 괄호는 벗기는 문법이다.

//destructuring 문법;
let [x, y] = ["안녕", 100];
// let { student: student, age1: age1 } = { student: true, age1: 20 };
let { student, age1 } = { student: true, age1: 20 }; //위 코드의 축약이다.

let objtest = { student: true, age1: 20 };
// function 함수s(a,b){
//     console.log(a,b)
// }
// 함수s(objtest.student, objtest.age1);
function 함수s({ student, age1 }: { student: boolean; age1: number }) {
  //destructuring 문법으로 변환
  console.log(student, age1);
}
함수s(objtest);
