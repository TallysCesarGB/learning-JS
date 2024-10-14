let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const fla19 = [
  "Diego Alves.... |",
  "Rafinha........ |",
  "Rodrigo Caio... |",
  "Pablo Marí..... |",
  "Felipe Luis.... |",
  "Wilian Arão.... |",
  "Gerson......... |",
  "Everton Ribeiro |",
  "Arrascaeta..... |",
  "Bruno Henrique. |",
  "Gabigol........ |",
];

const double = (element) => element * 2;

console.log(arrayNum.map(double));

console.log(fla19.map((element) => element + "| - Flamengo - 2019 "));
