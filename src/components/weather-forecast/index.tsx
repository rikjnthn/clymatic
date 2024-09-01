import React from "react";

import WeatherCard from "../weather-card";
import { ForecastType } from "@/interface";
import { WEATHER_IMAGE } from "@/constant";

const WeatherForecast = ({
  title,
  forecast,
}: {
  title: string;
  forecast: ForecastType[];
}) => {
  return (
    <div className="flex w-full max-w-fit flex-col gap-4">
      <div className="font-medium md:text-lg lg:text-xl">{title}</div>

      <div className="flex w-full gap-4 overflow-x-scroll">
        {forecast.map(({ date, description, main, temperature, dt }, idx) => {
          const icon =
            WEATHER_IMAGE[
              main.toLocaleLowerCase() as keyof typeof WEATHER_IMAGE
            ];
          return (
            <WeatherCard
              key={dt}
              first={idx === 0}
              description={description}
              temperature={temperature}
              time={date}
              icon={icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WeatherForecast;
