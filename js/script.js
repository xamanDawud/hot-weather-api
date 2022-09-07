const api_key = "effb4d4d2b170e3961e84cc65f7d760f";

let loadWeatherData = (city) => {
    fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
        )
        .then((res) => res.json())
        .then((data) => displayData(data));
};

const displayData = (data) => {
    innerTextbyId("cityName", data.name);
    innerTextbyId("temp", data.main.temp);
    innerTextbyId("cloud", data.weather[0].main);
    // console.log(data.name);
};

function innerTextbyId(id, textValue) {
    let idd = document.getElementById(id);
    idd.innerText = textValue;
}
document.getElementById("search-btn").addEventListener("click", function() {
    let searchInput = document.getElementById("serarch-input");
    let searchValue = searchInput.value;
    loadWeatherData(searchValue);
    // console.log(searchValue);
});