//src for sunny boston img
const urlSun ="./img/sunny.jpeg"
//src for rainy bostom img
const urlRain ="./img/rainy.jpeg"
//scr for windy boston img
const urlWind ="./img/windy.jpeg"
//src for snowy boston img
const urlSnow ="./img/snow.jpeg"
//src for clody boston img
const urlClody ="./img/clody.jpeg"

const weather = new Api;

window.addEventListener('load', (event) => {
    weather.getWeather().
    then(data => {
        let indicator = data.weather.weather[0].main;
        $("#weather").append(`${data.weather.weather[0].main}`);
        const temp = ((data.weather.main.temp-273) * (9/5) + 32).toFixed(2);
        $("#temp").append(`${temp}`);
        if (indicator.startsWith("Clo") == true) {
            $(".weather-photo").append(`<img src=${urlClody} alt="clody boston" class="home-photo"\>`)
        } else if(indicator.startsWith('Sun')==true || indicator == 'Clear') {
            $(".weather-photo").append(`<img src=${urlSun} alt="clody boston" class="home-photo"\>`)
        } else if(indicator.startsWith('Sno')) {
            $(".weather-photo").append(`<img src=${urlSnow} alt="clody boston" class="home-photo"\>`)
        } else if(indicator.startsWith('Rain')==true) {
            $(".weather-photo").append(`<img src=${urlRain} alt="rainy boston" class="home-photo"\>`)
        } else {
            $(".weather-photo").append(`<img src=${urlWind} alt="clody boston" class="home-photo"\>`)
        }
    })
})

$("#btn").click(() => {
    $(".com").val('');
    alert("Thank you for Submitting! We will Contact you Soon!")
})

