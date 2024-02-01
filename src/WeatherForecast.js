import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "7746bdeabca928cfedcad71e52fd9d66";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="dailyForecast">Thu</div>
          <WeatherIcon code="01d" size={34} />
          <div className="dailyForecastTemp">
            <span className="dailyTempMax">19°</span>
            <span className="dailyTempMin">12°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
