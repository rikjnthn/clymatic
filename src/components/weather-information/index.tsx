import React from "react";

import MoreInformation from "../more-infomation";
import SearchBar from "../search-bar";
import HourlyForecast from "../hourly-forecast";
import DailyForecast from "../daily-forecast";
import getMoreWeatherInformation from "@/util/get-weather-information";
import getForecast from "@/util/get-forecast";

const WeatherInformation = async ({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}) => {
  const forecastFetch = getForecast({ lat, lon });
  const moreWeatherInformationFetch = getMoreWeatherInformation({ lat, lon });
  const [forecast, moreWeatherInformation] = await Promise.all([
    forecastFetch,
    moreWeatherInformationFetch,
  ]);

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
        <MoreInformation {...moreWeatherInformation} />
      </div>
    </div>
  );
};

export default WeatherInformation;
