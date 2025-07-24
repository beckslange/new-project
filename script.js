let now = new Date();
let weekday = document.querySelector(".weekday");
let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let day = days[now.getDay()];
weekday.innerHTML = `${day}`;
let time = document.querySelector(".time");
let hours = now.getHours();
let minutes = now.getMinutes();
let ampm = hours >= 12 ? "PM" : "AM";
hours = hours % 12;
hours = hours ? hours : 12;
minutes = minutes < 10 ? "0" + minutes : minutes;

time.innerHTML = `${hours}:${minutes} ${ampm}`;

time.innerHTML = `${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  let h1 = document.querySelector(".current-city");
  if (searchInput.value) {
    h1.innerHTML = `${searchInput.value}`;
  } else {
    h1.innerHTML = null;
  }
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function displayTemp(response) {
  let cityElement = document.querySelector(".current-city");
  cityElement.innerHTML = response.data.city;

  let temperatureElement = document.querySelector(".current-temperature-value");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let city = searchInput.value;

  let apiKey = "tfo33b89af42954f2d60430a801e1b3c";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(displayTemp);
}
