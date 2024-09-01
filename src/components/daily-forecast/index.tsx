"use client";
import React from "react";

import WeatherForecast from "../weather-forecast";
import PrecipitationForecast from "../precipitation-forecast";
import { ForecastType } from "@/interface";

const DailyForecast = ({ forecast }: { forecast: ForecastType[] }) => {
  const dateFormatter = new Intl.DateTimeFormat("en-UK", {
    day: "numeric",
    month: "short",
  });

  const dailyForecast = forecast
    .map((data) => {
      return {
        ...data,
        date: dateFormatter.format(new Date(data.date)),
      };
    })
    .filter((data, idx, arr) => data.date !== arr[idx + 1]?.date);

  return (
    <div className="forecast-container">
      <WeatherForecast title="Daily Forecast" forecast={dailyForecast} />
      <PrecipitationForecast
        title="Daily Precipitation"
        forecast={dailyForecast}
      />
    </div>
  );
};

export default DailyForecast;
