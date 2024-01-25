import React, { useState } from "react";
import "./Weather.css";
import "./index.css";
import axios from "axios";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: "Thursday 16:00",
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather-app">
        <header>
          <form className="search-form" id="search-form">
            <input
              type="search"
              placeholder="Enter a city.."
              required
              className="search-form-input"
              id="search-form-input"
              autoFocus="on"
            />
            <input type="submit" value="Search" class="search-form-button" />
          </form>
        </header>
        <main>
          <div className="row">
            <div className="col-6">
              <h1 className="weather-app-city" id="city">
                {weatherData.city}
              </h1>
              <p className="weather-app-details">
                <span id="time">{weatherData.date}</span>,{" "}
                <span id="description" className="text-capitalize">
                  {weatherData.description}
                </span>
                <br />
                Humidity: <strong id="humidity">{weatherData.humidity}%</strong>
                , Wind:
                <strong id="wind-speed"> {weatherData.wind} km/h</strong>
              </p>
            </div>

            <div className="col-6">
              <img
                src={weatherData.iconUrl}
                alt="Mostly cloudy"
                className="icon"
              />
              <span className="weather-app-temperature">
                {Math.round(weatherData.temperature)}
              </span>{" "}
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="weather-forecast" id="forecast"></div>
        </main>

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
    const apiKey = "d5523e724fae55536f5f65b8b74358f2";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
