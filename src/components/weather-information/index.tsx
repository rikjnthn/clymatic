import React from "react";

import WeatherForecast from "../weather-forecast";
import PrecipitationForecast from "../precipitation-forecast";
import MoreInformation from "../more-infomation";
import SearchBar from "../search-bar";

const WeatherInformation = () => {
  return (
    <div className="weather-information overflow-y-scroll bg-white p-4 py-9 xs:p-9">
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
        <div className="forecast-container">
          <WeatherForecast title="Today's Forecast" />
          <PrecipitationForecast title="Today's Precipitation" />
        </div>

        <div className="forecast-container">
          <WeatherForecast title="7-days' Forecast" />
          <PrecipitationForecast title="7-days' Precipitation" />
        </div>
      </div>

      <div className="w-full">
        <MoreInformation />
      </div>
    </div>
  );
};

export default WeatherInformation;
