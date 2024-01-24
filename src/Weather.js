import React from "react";
import axios from "axios";
import "./index.css";

export default function Weather() {
  let weatherInfo = {
    city: "Lisbon",
    date: "Wednesday 10:00",
    weather: "Few clouds",
    temp: "16",
    humidity: "79",
    wind: "16.54",
  };

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
          />
          <input type="submit" value="Search" class="search-form-button" />
        </form>
      </header>
      <main>
        <div className="weather-app-data">
          <div>
            <h1 className="weather-app-city" id="city">
              {weatherInfo.city}
            </h1>
            <p className="weather-app-details">
              <span id="time">{weatherInfo.date}</span>,{" "}
              <span id="description">{weatherInfo.weather}</span>
              <br />
              Humidity: <strong id="humidity">{weatherInfo.humidity}%</strong>,
              Wind:
              <strong id="wind-speed">{weatherInfo.wind} km/h</strong>
            </p>
          </div>
          <div className="weather-app-temperature-container">
            <div id="icon"></div>
            <div className="weather-app-temperature" id="temperature">
              {weatherInfo.temp}
            </div>
            <div className="weather-app-unit">°C</div>
          </div>
        </div>
        <div className="weather-forecast" id="forecast"></div>
      </main>

      <footer>
        This project was coded by
        <a href="https://github.com/robidful" target="_blank" rel="noreferrer">
          {" "}
          Roberta Di Cio
        </a>
        , is
        <a
          href="https://github.com/robidful/weather-app-shecodes-2nd-version"
          target="_blank"
          rel="noreferrer"
        >
          -open-sourced on GitHub-
        </a>
        and
        <a
          href="https://brilliant-bienenstitch-621652.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          -hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
