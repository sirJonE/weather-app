let weather = {
    "api_key":"6c83c2e7501b9424aa70d801d675cce7",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid="
            + this.api_key
        )
        .then((response) => response.json())
        .then((data)=>console.log(data)); 
    },   
};
// "https://api.openweathermap.org/data/2.5/weather?lat=37.929494&lon=-86.245349&appid=6c83c2e7501b9424aa70d801d675cce7" <-- this is our house