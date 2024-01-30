import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
