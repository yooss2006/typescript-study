//함수에서의 타입지정
//(매개변수는 이 안에서 지정한다. : 타입)
//반환할 타입은 () :옆에서 정의한다.
//매개변수를 지정하지 않으면 :any가 자동으로 들어감
function 함수(x: number): number {
  return x * 2;
}
// 함수("kim")은 에러 발생
함수(2); //파라미터가 필수로 들어가야한다.

//만약 파라미터입력을 옵션으로 두고싶다면 ?를 이용한다.
//?란 number | undefined를 의미한다.
function 함수p(x?: number) {}

//실수로 뭔가 return 하는 것을 방지한다.
function 함수2(x: number): void {}
