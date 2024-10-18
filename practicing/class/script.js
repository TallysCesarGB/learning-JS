const totalAmountBalls = document.querySelector("#totalAmountBalls");
const amountOfBalls = document.querySelector("#amountOfBalls");
const buttonAddBalls = document.querySelector("#addBalls");
const buttonRemoveAllBalls = document.querySelector("#buttonRemove");
const screen = document.querySelector(".screen");

let widthScreen = screen.offsetWidth;
let heightScreen = screen.offsetHeight;

let balls = [];
let numBalls = 0;

class Ball {
  constructor(arrBalls, screen) {
    this.ballSize = Math.floor(Math.random() * 15) + 8;
    this.red = Math.floor(Math.random() * 256);
    this.green = Math.floor(Math.random() * 256);
    this.blue = Math.floor(Math.random() * 256);
    this.positionInX = Math.floor(
      Math.random() * (widthScreen - this.ballSize)
    );
    this.positionInY = Math.floor(
      Math.random() * (heightScreen - this.ballSize)
    );
    this.velocityX = Math.random() * (Math.random() * 5 + 1);
    this.velocityY = Math.random() * (Math.random() * 5 + 1);
    this.directionX = (Math.random() * 10) % 2 === 0 ? 1 : -1;
    this.directionY = (Math.random() * 10) % 2 === 0 ? 1 : -1;
    this.arrBalls = arrBalls;
    this.screen = screen;
    this.id = `${Date.now()}-${Math.floor(Math.random() * 1000000000000)}`;
    this.createsBall();
    this.control = setInterval(() => this.handle(), 10);
    this.iBall = document.getElementById(this.id);
    numBalls++;
    totalAmountBalls.textContent = numBalls;
  }
  myPositionInArr = () => {
    return this.arrBalls.indexOf(this);
  };

  createsBall = () => {
    const ball = document.createElement("div");
    ball.setAttribute("class", "ball");
    ball.setAttribute("id", this.id);
    ball.setAttribute(
      "style",
      `left: ${this.positionInX}px;
       top: ${this.positionInY}px;
       width: ${this.ballSize}px;
       height: ${this.ballSize}px;
       background-color: rgb(${this.red}, ${this.green}, ${this.blue})`
    );
    this.screen.appendChild(ball);
  };

  collisionLimit = () => {
    if (
      this.positionInX <= 0 ||
      this.positionInX + this.ballSize >= widthScreen
    ) {
      this.directionX *= -1;
    }
    if (
      this.positionInY <= 0 ||
      this.positionInY + this.ballSize >= heightScreen
    ) {
      this.directionY *= -1;
    }
  };

  handle = () => {
    this.collisionLimit();
    this.positionInX += this.directionX * this.velocityX;
    this.positionInY += this.directionY * this.velocityY;
    this.iBall.setAttribute(
      "style",
      `left: ${this.positionInX}px;
       top: ${this.positionInY}px;
       width: ${this.ballSize}px;
       height: ${this.ballSize}px;
       background-color: rgb(${this.red}, ${this.green}, ${this.blue});`
    );
    if (this.positionInX > widthScreen || this.positionInY > heightScreen) {
      this.remove();
    }
  };

  remove = () => {
    clearInterval(this.control);
    balls = balls.filter((ball) => ball.id != this.id);
    this.iBall.remove();
    numBalls--;
    totalAmountBalls.textContent = numBalls;
  };
}

window.addEventListener("resize", (evt) => {
  widthScreen = screen.offsetWidth;
  heightScreen = screen.offsetHeight;
});

buttonAddBalls.addEventListener("click", (evt) => {
  const amount = parseInt(amountOfBalls.value);
  for (let i = 0; i < amount; i++) {
    balls.push(new Ball(balls, screen));
  }
});

buttonRemoveAllBalls.addEventListener("click", (evt) => {
  balls.map((ball) => {
    ball.remove();
  });
});
