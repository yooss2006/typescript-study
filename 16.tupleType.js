var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//tuple 타입 : 자료의 순서, 위치까지 고려하는 타입지정방법
var 멍멍 = ["dog", true];
//시작과 끝이 아닌 부분에 ?를 사용하면 위치가 애매하기에 뒤에서부터 ?를 삽입할 수 있다.
var 왈왈 = ["dog", true];
//튜플을 이용한 레스트 파라미터
function 함수() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
}
함수(1, "zz");
//spread 연산자를 튜플로 타입지정하는 방법
var arr = [1, 2, 3];
var arr2 = __spreadArray([4, 5], arr, true);
