//제목은 유니온 타입이다 그 이유는 해당 id가 없으면 null이 있으면 해당 요소가 들어가기 때문이다.
var 제목 = document.querySelector("#title");
// 제목.innerHTML = "반가워요" // 오류발생
if (제목 != null) {
    제목.innerHTML = "반가워요";
}
//instanceof 연산자는 왼쪽의 object가 우측의 클래스의 자식인지를 체크하는 연산자이다.
if (제목 instanceof HTMLElement) {
    제목.innerHTML = "반가워요";
}
var 제목2 = document.querySelector("#title");
제목2.innerHTML = "반가워요";
//object에 붙이는 ?는 해당 요소가 있으면 해당요소를 없으면 undefind를 반환한다.
if ((제목 === null || 제목 === void 0 ? void 0 : 제목.innerHTML) != undefined) {
    제목.innerHTML = "반가워요";
}
var 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
    링크.href = "https://kakao.com";
}
var 버튼 = document.querySelector("#button");
if (버튼 instanceof HTMLAnchorElement) {
    버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener("click", function () { });
}
