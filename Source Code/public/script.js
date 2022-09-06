let weather = {
    apiKey: "df46250fb939023a1525d35d0c325d13",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { visibility } = data;
        var { icon, description } = data.weather[0];
        const { temp, feels_like,temp_min, temp_max, pressure, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name + ":";
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png";
        description = description[0].toUpperCase() + description.substring(1)
        document.querySelector(".description").innerText = description;
        document.querySelector(".wind").innerText = "Wind Speed: " + speed+" km/hr";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".minTemp").innerText = "Min Temperature: " + temp_min + "°C";
        document.querySelector(".maxTemp").innerText = "Max Temperature: " + temp_max + "°C";
        document.querySelector(".feelsLike").innerText = "Feels Like: " + feels_like + "°C";
        document.querySelector(".pressure").innerText = "Pressure: " + pressure + "Pa";
        document.querySelector(".vis").innerText = "Visibility: " + visibility + "m";
        // document.querySelector(".homeSection::before").style.background= "url('https://source.unsplash.com/1600x900/?dark') no-repeat center center/cover";
        window.stop();
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".searchBox button").addEventListener("click", function () {
    weather.search();
})
// window.stop();
// let ptr = document.querySelector(".search-bar").value;
// if (typeof ptr === 'string' || ptr instanceof String) {
//     console.log(ptr);
// }
// weather.fetchWeather(userInput);