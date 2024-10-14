const fullName = (...names) => {
  let name = "";
  for (let n of names) {
    name += n + " ";
  }
  return name;
};

console.log(fullName("Charopinho", "Gonzaga", "Nascimento"));
