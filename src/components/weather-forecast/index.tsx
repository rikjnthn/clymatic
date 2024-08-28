import React from "react";
import WeatherCard from "../weather-card";

const WeatherForecast = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="font-medium md:text-lg lg:text-xl">{title}</div>

      <div className="flex w-full gap-4 overflow-x-scroll">
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </div>
    </div>
  );
};

export default WeatherForecast;
