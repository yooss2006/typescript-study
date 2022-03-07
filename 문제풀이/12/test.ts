class SquareA {
  x;
  y;
  color;
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
  draw() {
    let newDiv = document.createElement("div");
    newDiv.style.width = `${this.x}px`;
    newDiv.style.height = `${this.y}px`;
    newDiv.style.backgroundColor = this.color;
    newDiv.style.position = "absolute";
    newDiv.style.top = `${Math.floor(Math.random() * 450)}px`;
    newDiv.style.left = `${Math.floor(Math.random() * 450)}px`;
    document.querySelector("#canvas")?.appendChild(newDiv);
  }
}

let 네모s = new SquareA(30, 30, "red");
네모s.draw();
네모s.draw();
네모s.draw();
네모s.draw();
