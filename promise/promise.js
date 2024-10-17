const number = document.querySelector(".number");
const btnPromise = document.querySelector("#promise");

let quant = 0;

btnPromise.addEventListener("click", (evt) => {
  number.innerHTML = "Loading...";
  quant = Math.floor(Math.random() * 10);
  promise(quant)
    .then((result) => {
      number.innerHTML = result;
      number.classList.remove("odd");
      number.classList.add("even");
    })

    .catch((result) => {
      number.innerHTML = result;
      number.classList.remove("even");
      number.classList.add("odd");
    });
});

const promise = (quant) => {
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
  return myPromise;
};

number.innerHTML = "Waiting...";
