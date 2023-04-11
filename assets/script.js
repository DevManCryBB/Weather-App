var apiKey = "9c249410be92c2fa518fe16ca01c7790"
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid={9c249410be92c2fa518fe16ca01c7790}"
var city;
var searchButton = document.getElementById

fetch(queryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });

// searchButton.on("click", function (event) {
//     event.preventDefault();
// });

// inplace of "weather"
// forecast?lat={47.6062}&lon={122.3321}