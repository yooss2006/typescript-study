//d.ts파일은 타입을 정의해둔 보관용 파일이다.
export type Age = number;
export interface Person {
  name: string;
} //이런 것들이 들어감
//자동으로 글로벌 모듈이 아니기에 export를 사용해야함

// import {Age} from "test.d" 이렇게 불러올 수 있음
// Import * as a from "test.d"

// tsconfig.json에 "declaration":true 를 주면 ts파일마다 d.ts파일이 자동생성된다.
//ts 파일을 만들고 타입지정을 하게되면 어떤 타입을 지정했는지 d.ts에 받아적히게된다. 참고용

//tsconfig.json에 "typeRoots":["./경로"]를 주게되면 해당 폴더안의 타입들은 글로벌하게 이용 가능하다. d.ts파일도 마찬가지

//타입스크립트 공식홈페이지에서 원하는 라이브러리명을 입력하면 해당 타입 파일을 설치할 수 있다.
