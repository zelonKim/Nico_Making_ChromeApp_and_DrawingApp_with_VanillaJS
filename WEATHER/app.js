const API_KEY = "0cdbb28c8333cfadfac25f5410ae5611";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelectorAll("#weather span")[0]
            const city = document.querySelectorAll("#weather span")[1]
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    });
}

function onGeoError() {
    alert("Can`t find.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);