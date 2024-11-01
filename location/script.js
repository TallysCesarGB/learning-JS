const lat = document.querySelector("#lat");
const long = document.querySelector("#long");

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position, error);
} else {
  console.log("Geolocation is not supported by your browser");
}

function position(position) {
  lat.textContent = position.coords.latitude;
  long.textContent = position.coords.longitude;
}

function error(err) {
  console.log("Error occurred: ", err);
}
