function sumNum(...numbers) {
  let sum = 0;
  for (let n of numbers) {
    sum += n;
  }
  return sum;
}

let sum = sumNum(23, 65, 67, 12, 87);

console.log(sum);

console.log("=============");

function fullName(...name) {
  let fullName = "";
  for (let n of name) {
    fullName += " " + n;
  }
  return fullName;
}

let allNames = fullName("Pikachu", "De'Coimbra", "Arrascaeta", "Gelço");
console.log(allNames);
