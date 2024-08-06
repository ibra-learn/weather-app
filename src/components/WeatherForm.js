import { useState } from "react";

function WeatherForm({ onCityChange }) {
  const [inputCity, setInputCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCityChange(inputCity);
    setInputCity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setInputCity(e.target.value)}
        value={inputCity}
        placeholder="Enter city name"
      />
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default WeatherForm;
