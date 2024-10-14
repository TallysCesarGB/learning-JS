function* idMaker() {
  let newId = 1;
  while (true) {
    yield newId++;
  }
}

const interactor = idMaker();

console.log("=#=#=#=#=#=#=#=#=#=#=#=");
console.log(interactor.next().value);
console.log(interactor.next().done);

console.log(interactor.return.length);

console.log("=#=#=#=#=#=#=#=#=#=#=#=");
console.log(interactor.next().value);
console.log(interactor.next().done);

console.log(interactor.return.length);

console.log("=#=#=#=#=#=#=#=#=#=#=#=");
console.log(interactor.next().value);
console.log(interactor.next().done);

console.log(interactor.return.length);

console.log("=#=#=#=#=#=#=#=#=#=#=#=");
console.log(interactor.next().value);
console.log(interactor.next().done);

console.log(interactor.return.length);

console.log("=#=#=#=#=#=#=#=#=#=#=#=");
console.log(interactor.next().value);
console.log(interactor.next().done);

console.log(interactor.return.length);

console.log("=#=#=#=#=#=#=#=#=#=#=#=");
console.log(interactor.next().value);
console.log(interactor.next().done);

console.log(interactor.return.length);

console.log("=#=#=#=#=#=#=#=#=#=#=#=");
console.log(interactor.next().value);
console.log(interactor.next().done);

console.log(interactor.return.length);
