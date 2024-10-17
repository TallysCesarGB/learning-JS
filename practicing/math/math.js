const eyes = [...document.querySelectorAll(".eye")];

let mouseY = 0;
let mouseX = 0;

window.addEventListener("mousemove", (evt) => {
  mouseY = evt.clientY;
  mouseX = evt.clientX;

  const rot = (Math.atan2(mouseX, mouseY) * 180) / Math.PI;

  eyes.map((eye) => {
    eye.style.transform = "rotate(" + rot + "deg)";
  });
});
