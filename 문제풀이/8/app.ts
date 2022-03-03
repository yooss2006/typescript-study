let image = document.querySelector("#image");
let btn = document.querySelector("#button");
btn?.addEventListener("click", () => {
  console.log("zz");
  if (image instanceof HTMLImageElement) {
    image.src = "img/2.jpg";
  }
});

let link = document.querySelectorAll(".naver");
link.forEach((a) => {
  if (a instanceof HTMLAnchorElement) {
    a.href = "https://kakao.com";
  }
});
