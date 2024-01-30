import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
              <WeatherIcon code={props.data.icon} size={68} />
            </span>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="weather-forecast" id="forecast"></div>
      </main>
    </div>
  );
}
