import React from "react";
import "./Weather.css";
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
        <div className="row">
          <div className="col-6">
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

          <div className="col-6">
            <div id="icon"></div>
            <div className="weather-app-temperature" id="temperature">
              {weatherInfo.temp} °C
            </div>
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
}
