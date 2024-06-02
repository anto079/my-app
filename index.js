let apiKey = "2t553f9381106a3576b3bf8c8coa7bc4";
let searchInputElement = document.querySelector("#search-input");

function search(event) {
  event.preventDefault();

  let city = searchInputElement.value;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  let cityElement = document.querySelector("#current-city");

  let currentTemperature = document.querySelector(".current-temperature-value");

  axios.get(apiUrl).then((response) => {
    let temperature = Math.round(response.data.temperature.current);
    currentTemperature.innerHTML = temperature;
    cityElement.innerHTML = response.data.city;
  });
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
