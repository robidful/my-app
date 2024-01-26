import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function Weatherinfo(props) {
  return (
    <div className="WeatherInfo">
      <main>
        <div className="row">
          <div className="col-6">
            <h1 className="weather-app-city" id="city">
              {props.data.city}
            </h1>
            <p className="weather-app-details">
              <span id="time">
                <FormattedDate date={props.data.date} />
              </span>
              ,{" "}
              <span id="description" className="text-capitalize">
                {props.data.description}
              </span>
              <br />
              Humidity: <strong id="humidity">{props.data.humidity}%</strong>,
              Wind:
              <strong id="wind-speed"> {props.data.wind} km/h</strong>
            </p>
          </div>

          <div className="col-6">
            <span className="icon">
              <WeatherIcon code={props.data.icon} />
            </span>
            <span className="weather-app-temperature">
              {Math.round(props.data.temperature)}
            </span>{" "}
            <span className="unit">°C</span>
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
