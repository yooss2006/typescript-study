// 1. 숫자여러개를 array 자료에 저장해놨는데
// - 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
// - 이걸 클리닝해주는 함수가 필요합니다.
// - **클리닝함수( ['1', 2, '3'] )** 이렇게 숫자와 문자가 섞인 array를 입력하면
// - **[1,2,3]** 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.

function 클리닝(x: (string | number)[]): number[] {
  x.forEach((data, i) => {
    if (typeof data === "string") {
      x[i] = Number(data);
    }
  });
  return x as number[];
}

// 2. 다음과 같은 함수를 만들어보십시오.
// ```
// let 철수쌤 = { subject : 'math' }
// let 영희쌤 = { subject : ['science', 'english'] }
// let 민수쌤 = { subject : ['science', 'art', 'korean'] }
// ```
// 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다.
// 과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
// 과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다.
// 철수쌤같은 선생님 object 자료를 집어넣으면
// 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
// 그리고 타입지정도 엄격하게 해보도록 합시다.

let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };

function 과목(x: { subject: string | string[] }) {
  if (typeof x.subject === "string") {
    return x.subject;
  } else {
    return x.subject.pop();
  }
}
