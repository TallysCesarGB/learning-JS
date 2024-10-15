const Person = {
  name: "",
  age: 0,
  getName: () => {
    return this.name;
  },
  getAge: () => {
    return this.age;
  },
  setName: (name) => {
    this.name = name;
  },
  setAge: (age) => {
    this.age = age;
  },
};

const buttonAdd = document.querySelector("#btn-add");
const result = document.querySelector(".result");
