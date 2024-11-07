const timer = document.querySelector("#timer");

const timerInitial = Date.now();

const counter = () => {
  let currentTime = Math.floor((Date.now() - timerInitial) / 1000);

  if (currentTime >= 86400) {
    timerInitial = Date.now();
    timer.textContent = "00:00:00";
    time = 0;
  }

  let time = currentTime;

  let ss = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  let mm = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  let hh = Math.floor(time / 3600)
    .toString()
    .padStart(2, "0");

  if (time < 60) timer.textContent = `00:00:${ss}`;
  else if (time > 60 && time < 3600) timer.textContent = `00:${mm}:${ss}`;
  else timer.textContent = `${hh}:${mm}:${ss}`;
  return currentTime;
};

setInterval(counter, 1000);
