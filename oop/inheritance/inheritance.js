const carArmy = document.querySelector("#f-typeArmy");
const carNormal = document.querySelector("#f-typeNormal");
const shielding = document.querySelector("#f-shielding");
const ammunition = document.querySelector("#f-ammunition");
const placeholderNormal = document.querySelector("#f-name");
const placeholderDor = document.querySelector("#f-dor");
const buttonAdd = document.querySelector("#add-car");
const cars = document.querySelector(".cars");

let arrCars = [];

carArmy.addEventListener("click", (evt) => {
  shielding.removeAttribute("disabled");
  ammunition.removeAttribute("disabled");
  placeholderNormal.value = "";
  placeholderDor.value = "";
  placeholderNormal.setAttribute("placeholder", "Army");
  placeholderDor.setAttribute("placeholder", "1");
});

carNormal.addEventListener("click", (evt) => {
  shielding.value = 0;
  ammunition.value = 0;
  shielding.setAttribute("disabled", "disabled");
  ammunition.setAttribute("disabled", "disabled");
  placeholderNormal.value = "";
  placeholderDor.value = "";
  placeholderNormal.setAttribute("placeholder", "Normal");
  placeholderDor.setAttribute("placeholder", "4");
});

const showCars = () => {
  cars.innerHTML = "";
  arrCars.map((car) => {
    const div = document.createElement("div");
    div.setAttribute("class", "car");
    div.innerHTML = car.name;
    cars.appendChild(div);
    console.log("add?");
  });
};

buttonAdd.addEventListener("click", () => {
  if (carNormal.checked) {
    const c = new Car(placeholderNormal.value, placeholderDor.value);
    arrCars.push(c);
  } else {
    const c = new Army(
      placeholderNormal.value,
      placeholderDor.value,
      shielding.value,
      ammunition.value
    );
    arrCars.push(c);
  }
  showCars();
  placeholderNormal.value = "";
  placeholderDor.value = "";
});

class Car {
  constructor(name, dor) {
    this.name = name;
    this.dor = dor;
    this.on = false;
    this.speed = 0;
    this.color = undefined;
  }
  start = () => {
    this.on = true;
  };
  turnOff = () => {
    this.on = false;
  };
  setColor = (color) => {
    this.color = color;
  };
}

class Army extends Car {
  constructor(name, dor, shielding = 0, ammunition = 0) {
    super(name, dor);
    this.shielding = shielding;
    this.ammunition = ammunition;
    this.setColor("Green");
  }
  shoot = () => {
    if (this.ammunition > 0) this.ammunition--;
  };
}

const Army01 = new Army("Player", 1, 100, 2000);
