const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const primeNumbers = numbers.filter((num, i) => {
  let count = 0;
  let control = 1;
  while (control < num[i]) {
    if (num % control == 0) {
      count++;
      if (count > 2) break;
    }
    control++;
    if (count == 2) return num;
  }
});

console.log(numbers);
console.log(primeNumbers);
