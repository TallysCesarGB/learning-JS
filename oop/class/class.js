class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  setName(name) {
    this.name = name;
  }
  setAge(age) {
    this.age = age;
  }
  info() {
    console.log(`Name: ${this.name}`);
    console.log(`Age.: ${this.age}`);
    console.log(`===================`);
  }
}
let people = [];

const buttonAdd = document.querySelector("#btn-add");
const result = document.querySelector(".result");

const showPeople = () => {
  result.innerHTML = "";
  people.map((p) => {
    const div = document.createElement("div");
    div.setAttribute("class", "person");
    div.innerHTML = `Name: ${p.getName()}
        Age: ${p.getAge()}`;
    result.appendChild(div);
  });
};

buttonAdd.addEventListener("click", (evt) => {
  const p = new Person(
    document.querySelector("#f-name").value,
    document.querySelector("#f-age").value
  );
  people.push(p);
  document.querySelector("#f-name").value = "";
  document.querySelector("#f-age").value = "";
  document.querySelector("#f-name").focus();
  showPeople();
});
