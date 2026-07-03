console.log("Script Loaded");
async function getWeather() {

    const city = document.getElementById("city").value;

      if(city === ""){
    document.getElementById("weather").innerHTML =
    "<h3>Please enter a city name.</h3>";
    return;
}

    const apiKey = "8369e35adb46becd83f8f665102c505e";

  
    const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

    const response = await fetch(url);

    console.log(response);

    const data = await response.json();

    console.log(data);

    if (data.cod != 200) {
        document.getElementById("weather").innerHTML =
        "<h3>" + data.message + "</h3>";
        return;
    }

    document.getElementById("weather").innerHTML = `
        <h2>${data.name}</h2>
        <h3>${data.main.temp} °C</h3>
        <p>${data.weather[0].main}</p>
        <p>Humidity : ${data.main.humidity}%</p>
        <p>Wind : ${data.wind.speed} m/s</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
    `;

} catch (error) {
    console.log(error);
}

}