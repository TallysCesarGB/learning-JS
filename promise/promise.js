const number = document.querySelector(".number");

const quant = Math.floor(Math.random() * 10);
console.log(quant);

const myPromise = new Promise((even, odd) => {
  const condition = quant % 2 == 0 ? true : false;
  const time = 3000;

  setTimeout(() => {
    if (condition) {
      even("Vai da bom...");
    } else {
      odd("Xiiiiii....");
    }
  }, time);
});

myPromise.then((result) => {
  number.innerHTML = result;
  number.classList.remove("odd");
  number.classList.add("even");
});

myPromise.catch((result) => {
  number.innerHTML = result;
  number.classList.remove("even");
  number.classList.add("odd");
});

number.innerHTML = "Loading...";
