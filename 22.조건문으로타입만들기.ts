type Age<T> = T;
let abcd: Age<string>;

//T extends string 왼쪽이 오른쪽에 속해있는지 확인
type Ages<T> = T extends string ? T : unknown;
let abcde: Age<string>;

type FirstItem<T> = T extends number[] ? T : any;
let qwe: FirstItem<[1, 2, 3]>;

//infer 왼쪽에서 타입을 뽑아 변수 R에 저장해주세요. infer와 같은 위치에 타입을 뽑아준다.
//아래의 경우 string[]에서 string부분만 뽑는 방법이다.
type Agess<T> = T extends (infer R)[] ? R : unknown;
type a = Agess<string[]>;
