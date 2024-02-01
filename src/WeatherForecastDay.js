import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let weekDay = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[weekDay];
  }

  return (
    <div>
      <div className="dailyForecast">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={34} />
      <div className="dailyForecastTemp">
        <span className="dailyTempMax">{maxTemperature()}°</span> |
        <span className="dailyTempMin">{minTemperature()}°</span>
      </div>
    </div>
  );
}
