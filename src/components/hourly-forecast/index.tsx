"use client";
import React from "react";

import WeatherForecast from "../weather-forecast";
import PrecipitationForecast from "../precipitation-forecast";
import { ForecastType } from "@/interface";

const HourlyForecast = ({ forecast }: { forecast: ForecastType[] }) => {
  const dateFormatter = new Intl.DateTimeFormat("en-UK", {
    minute: "2-digit",
    hour: "2-digit",
  });

  const hourlyForecast = forecast.slice(0, 7).map((data) => {
    return {
      ...data,
      date: dateFormatter.format(new Date(data.date)),
    };
  });

  return (
    <div className="forecast-container">
      <WeatherForecast title="3-Hours's Forecast" forecast={hourlyForecast} />
      <PrecipitationForecast
        title="3-Hours's Precipitation"
        forecast={hourlyForecast}
      />
    </div>
  );
};

export default HourlyForecast;
