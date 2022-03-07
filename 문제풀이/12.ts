class Userppp {
  private static x = 10;
  public static y = 20;
  protected z = 30;
  함수() {
    Userppp.x = 10;
  }
}
class UserpppCopy extends Userppp {
  함수2() {
    this.z = 20;
  }
}
let userppp = new Userppp();
Userppp.y;
//private static은 클래스 내부에서 클래스.변수로만 불러올 수 있음
//public static은 클래스 외부에서 아무때나 클래스.변수로 불러올 수 있음
//protected는 복사한 클래스에서 해당 변수를 사용할 수 있는 키워드이다.

class Userpp {
  private static x = 10;
  public static y = 20;
  static addOne(num: number) {
    return (Userpp.x += num);
  }
  static printX(): void {
    console.log(x);
  }
}
Userpp.addOne(3); //이렇게 하면 x가 3 더해져야함
Userpp.addOne(4); //이렇게 하면 x가 4 더해져야함
Userpp.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함
