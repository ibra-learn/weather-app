import { useEffect, useState } from "react";
import "./App.css";
import WeatherForm from "./components/WeatherForm";
import axios from "axios";
import WeatherInfo from "./components/WeatherInfo";

//weather api key
const API_KEY = "e938a7cdf0ef16181808d203f542272b";

function App() {
  // data needed (city and weather_infos)

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (city) {
      fetchWeather();
    }
  }, [city]);

  const handleCityChange = (text) => {
    setCity(text);
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      setWeather(null);
      setError("city not found");
    }
  };

  return (
    <div className="App">
      <div>Weather app</div>
      <WeatherForm onCityChange={handleCityChange} />
      {error & <p className="error">{error}</p>}
      {weather && <WeatherInfo weather={weather} />}
    </div>
  );
}

export default App;
