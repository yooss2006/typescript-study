// 1. 다음 변수 4개에 타입을 지정해봅시다.
// let user = 'kim';
// let age = undefined;
// let married = false;
// let 철수 = [user, age, married];

let user: string = "kim";
let age: undefined | number = 10;
let married: boolean = false;
let 철수: unknown[] = [user, age, married];

//2. 학교라는 변수에 타입지정해보십시오.
// let 학교 = {
//         score : [100, 97, 84],
//         teacher : 'Phil',
//         friend : 'John'
//     }
//     학교.score[4] = false;
//     학교.friend = ['Lee' , 학교.teacher]

let 학교: {
  score: (boolean | number)[];
  teacher: string;
  friend: string | string[];
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
