import React from "react";
import axios from "axios";

import MoreInformation from "../more-infomation";
import SearchBar from "../search-bar";
import HourlyForecast from "../hourly-forecast";
import DailyForecast from "../daily-forecast";
import { ForecastApiType, ForecastType } from "@/interface";

async function getForecast({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}): Promise<ForecastType[]> {
  const { data } = await axios.get<ForecastApiType>(
    `${process.env.WEATHER_API}/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric`,
  );

  const forecast = data.list.map((data) => {
    return {
      dt: data.dt,
      date: data.dt_txt,
      main: data.weather[0].main,
      description: data.weather[0].description,
      temperature: data.main.temp.toFixed(1),
      precipitation: data.pop,
    };
  });

  return forecast;
}

const WeatherInformation = async ({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}) => {
  const forecast = await getForecast({ lat, lon });

  return (
    <div className="weather-information overflow-y-scroll bg-white p-4 py-9 xs:p-9 xs:py-6">
      <div className="w-full max-md:hidden">
        <nav className="flex w-full justify-between gap-4">
          <div className="flex items-center justify-between">
            <span className="select-none text-4xl font-bold text-primary-base">
              Clymatic
            </span>
          </div>

          <div>
            <SearchBar />
          </div>
        </nav>
      </div>

      <div className="flex max-w-full flex-col gap-16">
        <HourlyForecast forecast={forecast} />

        <DailyForecast forecast={forecast} />
      </div>

      <div className="w-full">
        <MoreInformation lat={lat} lon={lon} />
      </div>
    </div>
  );
};

export default WeatherInformation;
