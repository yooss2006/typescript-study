//js 파일의 변수를 지금 ts에서 사용하고 싶을 때 사용, 어딘가에 변수 a가 있다 에러내지말라는 의미
declare let aaaa: number;
//js로 만든 라이브러리를 사용할때 변수, 함수를 declare로 재정의해서 사용해야한다.

//타입스크립트 파일은 모두 전역파일로 다른 ts파일을 참조할 수 있는다.
//이를 원하지 않는다면 export{}를 선언하자.
export {};
declare global {}
