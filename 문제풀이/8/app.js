var image = document.querySelector("#image");
var btn = document.querySelector("#button");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    console.log("zz");
    if (image instanceof HTMLImageElement) {
        image.src = "img/2.jpg";
    }
});
var link = document.querySelectorAll(".naver");
link.forEach(function (a) {
    if (a instanceof HTMLAnchorElement) {
        a.href = "https://kakao.com";
    }
});
