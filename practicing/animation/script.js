const leftButton = document.querySelector("#leftButton");
const stop = document.querySelector("#stop");
const pause = document.querySelector("#pause");
const rightButton = document.querySelector("#rightButton");
const car = document.querySelector("#car");

let animation = null;
let maxSize = null;
let direction = 1;

const init = () => {
  car.style = "position:relative; left:0px; width:100px;";
  maxSize = window.innerWidth - parseInt(car.style.width);
};

const startAnimation = () => {
  let leftPosition = parseInt(car.style.left);
  if (leftPosition >= maxSize || leftPosition <= 0) {
    direction *= -1;
  }
  car.style.left = leftPosition + 8 * direction + "px";
};

leftButton.addEventListener("click", (evt) => {
  clearInterval(animation);
  direction = -1;
  animation = setInterval(startAnimation, 10);
});

stop.addEventListener("click", (evt) => {
  clearInterval(animation);
  direction = 0;
  car.style.left = "0px";
});

pause.addEventListener("click", (evt) => {
  clearInterval(animation);
});

rightButton.addEventListener("click", (evt) => {
  clearInterval(animation);
  if (car.style.left == "0px") direction = -1;
  else direction = 1;
  animation = setInterval(startAnimation, 10);
});

window.addEventListener("load", init);
window.addEventListener("resize", () => {
  maxSize = window.innerWidth - parseInt(car.style.width);
});
