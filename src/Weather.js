import React, { useState } from "react";
import "./Weather.css";
import Weatherinfo from "./Weatherinfo";
import WeatherForecast from "./WeatherForecast";
import "./index.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "d5523e724fae55536f5f65b8b74358f2";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="weather-app">
        <header>
          <form
            className="search-form"
            id="search-form"
            onSubmit={handleSubmit}
          >
            <input
              type="search"
              placeholder="Enter a city.."
              required
              className="search-form-input"
              id="search-form-input"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <input type="submit" value="Search" class="search-form-button" />
          </form>
        </header>
        <Weatherinfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />

        <footer>
          This project was coded by
          <a
            href="https://github.com/robidful"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Roberta Di Cio
          </a>
          , is
          <a
            href="https://github.com/robidful/my-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>{" "}
          and
          <a
            href="https://sprightly-dragon-57cd0f.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            hosted on Netlify
          </a>
        </footer>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
