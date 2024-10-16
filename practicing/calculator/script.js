const keysNum = [...document.querySelectorAll(".number")];
const keysOp = [...document.querySelectorAll(".op")];
const keyResult = document.querySelector("#result");
const keyComma = document.querySelector("#comma");
const display = document.querySelector("#showDisplay");
const copy = document.querySelector("#copy");
const clear = document.querySelector("#clear");

let operation = false;
let comma = false;

keysNum.map((key) => {
  key.addEventListener("click", (evt) => {
    operation = false;
    if (evt.target.innerHTML == ".") {
      if (!comma) {
        comma = true;
        if (display.innerHTML == "0") {
          display.innerHTML = "0";
        }
        display.innerHTML += evt.target.innerHTML;
      }
    } else {
      if (display.innerHTML == "0") {
        display.innerHTML = "";
      }
      display.innerHTML += evt.target.innerHTML;
    }
  });
});

keysOp.map((key) => {
  key.addEventListener("click", (evt) => {
    comma = false;
    if (!operation) {
      operation = true;
      if (display.innerHTML == "0") {
        display.innerHTML = "";
      }
      if (evt.target.innerHTML == "x") {
        display.innerHTML += "*";
      } else {
        display.innerHTML += evt.target.innerHTML;
      }
    }
  });
});

clear.addEventListener("click", (evt) => {
  display.innerHTML = "0";
  operation = false;
  comma = false;
});

keyResult.addEventListener("click", (evt) => {
  operation = false;
  comma = false;
  const result = eval(display.innerHTML);
  display.innerHTML = result;
});

copy.addEventListener("click", (evt) => {
  navigator.clipboard.writeText(display.innerHTML);
});
