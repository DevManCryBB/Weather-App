var apiKey = "9c249410be92c2fa518fe16ca01c7790";
var city;
var searchButton = document.getElementById("generate");

function searchField() {
  var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
  fiveDay();
}

function fiveDay() {
  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;
  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i = 0; i < data.list.length; i += 8) {
        var forecastCard = `
<h1>Temp: ${data.list[i].main.temp}</h1>
<p class="someClass">Some other value: ${data.list[i].main}</p>
`;
        document.getElementById("forecast").innerHTML += forecastCard;
      }
      console.log(data);
    });
}
searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  city = document.getElementById("mySearch").value;
  searchField();
});
