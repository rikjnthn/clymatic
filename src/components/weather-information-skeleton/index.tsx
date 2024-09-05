import React from "react";

import SearchBar from "../search-bar";
import ForecastSkeleton from "../forecast-skeleton";

const WeatherInformationSkeleton = () => {
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

      <div className="flex w-full flex-col gap-16">
        <div className="forecast-container items-center">
          <ForecastSkeleton title="Today's Forecast" />
          <ForecastSkeleton title="Today's Precipitation" />
        </div>

        <div className="forecast-container items-center">
          <ForecastSkeleton title="7-days' Forecast" />
          <ForecastSkeleton title="7-days' Precipitation" />
        </div>
      </div>

      <div className="flex w-full flex-col gap-5">
        <div className="text-center font-medium md:text-lg lg:text-xl">
          More
        </div>
        <div className="skeleton h-45 w-full"></div>
      </div>
    </div>
  );
};

export default WeatherInformationSkeleton;
