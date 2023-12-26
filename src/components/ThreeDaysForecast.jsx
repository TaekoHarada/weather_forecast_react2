import React from "react";
import Forecast from "./Forecast";

const ThreeDaysForecast = ({ weather }) => {
  console.log(weather);
  return (
    <div className="three_days_forecast">
      Three days forecast
      <Forecast day_weather={weather.list[0]} />
      <Forecast day_weather={weather.list[1]} />
      <Forecast day_weather={weather.list[2]} />
    </div>
  );
};

export default ThreeDaysForecast;
