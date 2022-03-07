//클래스 복사
class 원본 {
  x = 10;
}
class 복사본 extends 원본 {}

//protected : class{}안에서만 사용가능
//extends로 복사하면 복사한 class{}안에서도 사용가능, private는 안된다.
class 프로텍트 {
  protected x = 10;
}
class 프로텍트복사본 extends 프로텍트 {
  doThis() {
    this.x = 20;
  }
}
let 프로텍트트 = new 프로텍트복사본();

//static : 부모 클래스에 직접 부여되서 부모만 사용가능하다. 자식에게 물려주지 않음
//class로 부터 생성되는 object가 사용할 필요가 없는 변수들을 만들어놓고 싶을 때 사용
//private, protected, public와 같이 사용가능하다.
class 스태틱 {
  static skill = "js";
  intro = 스태틱.skill + "전문가입니다."; //this.skill도 안된다.
}
스태틱.skill; //이렇게만 불러올 수 있다.
스태틱.skill = "ts"; //이렇게 접근해서 static 키워드가 적용된 변수를 수정할 수 있다.
