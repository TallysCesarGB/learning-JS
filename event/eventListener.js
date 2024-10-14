const campo1 = document.querySelector("#campo1");
const escalar = document.querySelector("#escalar");
const campoEscalado = document.querySelector("#campoEscalado");

const jogadores = [...document.querySelectorAll(".jogador")];
const banco = [...document.querySelectorAll(".curso:not(.selecao")];

jogadores.map((element) => {
  element.addEventListener("click", (evt) => {
    const jogador = evt.target;
    jogador.classList.toggle("selecao");
    campoEscalado.appendChild(jogador);
  });
});

banco.map((element) => {
  element.addEventListener("click", (evt) => {
    const suplente = evt.target;
    campo1.appendChild(suplente);
  });
});

// escalar.addEventListener("click", () => {
//   const vaiJogar = [...document.querySelectorAll(".selecao")];
//   vaiJogar.map((j) => {
//     campo1.appendChild(j);
//   });
// });
