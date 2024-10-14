const sum = function (...values) {
  let sum = 0;
  for (let v of values) {
    sum += v;
  }
  return sum;
};

console.log(sum(1, 2, 3, 4, 5));
