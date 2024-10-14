const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`Source Number: `, (num) => {
  const result = arr.find((element, index) => {
    if (element == num) return result;
    console.log(result);
  });
});
