//함수 표현식을 사용해야 함수 type alias를 사용할 수 있다.
var 함수표현식 = function (a) {
    return 4;
};
var 회원정보 = {
    name: "kim",
    age: 35,
    plus: function (a) {
        return a + 1;
    },
    changeName: function () {
        console.log("안녕");
    },
};
