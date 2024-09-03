import Image from "next/image";
import React from "react";

import { WEATHER_IMAGE } from "@/constant";
import Location from "../location";
import getWeatherSummary from "@/util/get-weather-summary";
import WeatherSummaryTemperature from "../weather-summary-temperature";
import WeatherSummaryFeelsTemperature from "../weather-summary-feels-temperature";

const WeatherSummary = async ({
  countryId,
  city,
  lat,
  lon,
}: {
  lat: number;
  lon: number;
  countryId: string;
  city: string;
}) => {
  const weatherSummary = await getWeatherSummary({ lat, lon });

  const weatherImg =
    weatherSummary.main.toLowerCase() as keyof typeof WEATHER_IMAGE;

  return (
    <div className="grid w-full place-items-center text-white max-md:py-9 md:mt-32 md:gap-12">
      <div className="flex flex-col items-center">
        <WeatherSummaryTemperature temp={weatherSummary.temp} />

        <div className="flex items-center gap-2.5 py-2.5 md:py-6">
          <span className="text-sm font-light md:text-base">Feels like</span>
          <WeatherSummaryFeelsTemperature temp={weatherSummary.feels_like} />
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Image
            src={`/white/${WEATHER_IMAGE[weatherImg]}.svg`}
            alt={weatherSummary.description}
            width={50}
            height={50}
            title={weatherSummary.description}
          />
          <span className="capitalize">{weatherSummary.description}</span>
        </div>
      </div>

      <div className="w-full md:order-first">
        <Location city={city} countryId={countryId} />
      </div>

      <span className="absolute bottom-6 left-9 text-sm font-light max-md:hidden">
        ©️2024, all right reserved
      </span>
    </div>
  );
};

export default WeatherSummary;
