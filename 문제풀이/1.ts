//1. 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
let 이름: string = "유순상";
let 나이: number = 26;
let 출생지역: string = "제천";

//2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
let 좋아하는음악: { 곡: string; 가수이름: string } = {
  곡: "겨울을 걷는다.",
  가수이름: "윤딴딴",
};

//3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
// let project = {
//     member : ['kim', 'park'],
//     days : 30,
//     started : true,
//   }

let project: { member: string[]; days: number; started: boolean } = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
