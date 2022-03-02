// 1. object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
var obj = {
    name: "유순상",
    age: 26,
    good: true,
};
var testObj = { name: "kim", phone: 123, email: "abc@naver.com" };
var obj5 = {
    name: "dd",
    phone: 32,
    email: "dsd",
    minor: true,
};
