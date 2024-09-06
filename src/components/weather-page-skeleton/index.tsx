import React from "react";

import Header from "../header";
import WeatherInformationSkeleton from "../weather-information-skeleton";
import WeatherSummarySkeleton from "../weather-summary-skeleton";

const WeatherPageSkeleton = () => {
  return (
    <div className="md:flex">
      <div className="h-full bg-page md:fixed md:w-1/3 md:max-w-md">
        <Header />

        <WeatherSummarySkeleton />
      </div>

      <div className="relative h-full md:ml-auto md:w-2/3">
        <WeatherInformationSkeleton />
      </div>
    </div>
  );
};

export default WeatherPageSkeleton;
