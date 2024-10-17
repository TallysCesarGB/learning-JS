const clock = document.querySelector(".hour");
const date = document.querySelector(".date");

const d = new Date();

let day = d.getDate();
day = day < 10 ? `0${day}` : day;

let month = d.getMonth() + 1;
month = month < 10 ? `0${month}` : month;

let year = d.getFullYear();

const fullDate = `${day}:${month}:${year}`;

date.innerHTML = fullDate;

const up = () => {
  const d = new Date();

  let hour = d.getHours();
  hour = hour < 10 ? `0${hour}` : hour;

  let minutes = d.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  let seconds = d.getSeconds();
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  const fullClock = `${hour}:${minutes}:${seconds}`;
  clock.innerHTML = fullClock;
};

setInterval(up, 1000);

console.log(day);
console.log(month);
