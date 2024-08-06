function WeatherInfo({ weather }) {
  console.log("weather info charged");
  return (
    <div className="weather-info">
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.main.temp} C</p>
      <p>Weather : {weather.weather[0].description} </p>
      <p>Humidity : {weather.main.humidity}</p>
      <p>Wind Speed: {weather.wind.speed}</p>
    </div>
  );
}

export default WeatherInfo;
