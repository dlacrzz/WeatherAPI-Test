// Add an event listener to the form to handle the form submission
document.getElementById('weatherForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way and refreshing the page

    var city = document.getElementById('cityInput').value; // Get the city name entered by the user
    var apiKey = 'b2b02f68834360ebc586a5c014d332f0'; // OpenWeatherMap API key (replace with your own)
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`; // Construct the API URL

    // Make a fetch request to the OpenWeatherMap API
    fetch(apiUrl)
        .then(response => response.json()) // Convert the response to JSON
        .then(data => {
            var weatherResult = document.getElementById('weatherResult'); // Get the element to display the weather results
            // Update the innerHTML of the weatherResult element with the weather data
            weatherResult.innerHTML = `
                <h2>${data.name}</h2> <!-- Display the city name -->
                <p>Temperature: ${data.main.temp} °F</p> <!-- Display the temperature in Fahrenheit -->
                <p>Weather: ${data.weather[0].description}</p> <!-- Display the weather description -->
                <p>Humidity: ${data.main.humidity}%</p> <!-- Display the humidity percentage -->
                <p>Wind Speed: ${data.wind.speed} mph</p> <!-- Display the wind speed in miles per hour -->
                <p> Sea Level: ${data.main.sea_level} </p>
            `;
        })
        .catch(() => {
            // Display an error message if something goes wrong with the API call
            document.getElementById('weatherResult').innerHTML = `<p>Something went wrong. Please try again.</p>`;
        });
});
