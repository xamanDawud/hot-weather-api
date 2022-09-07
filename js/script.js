const api_key = "effb4d4d2b170e3961e84cc65f7d760f";

let loadWeatherData = (city) => {
    fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
        )
        .then((res) => res.json())
        .then((data) => displayData(data));
};

const displayData = (data) => {
    let cityName = document.getElementById("cityName");
    cityName.innerText = data.name;
    // console.log(data.name);
};

loadWeatherData("london");