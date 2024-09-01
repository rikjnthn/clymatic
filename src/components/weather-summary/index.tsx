import Image from "next/image";
import React from "react";
import axios from "axios";

import { WEATHER_IMAGE } from "@/constant";
import { WeatherSummaryApiType, WeatherSummaryType } from "@/interface";
import Location from "../location";

const getWeatherSummary = async ({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}): Promise<WeatherSummaryType> => {
  const { data } = await axios.get<WeatherSummaryApiType>(
    `${process.env.WEATHER_API}/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=metric`,
  );

  const weatherSummary = {
    temp: data.main.temp.toFixed(1),
    feels_like: data.main.feels_like.toFixed(1),
    main: data.weather[0].main,
    description: data.weather[0].description,
  };

  return weatherSummary;
};

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
        <div className="text-6.5xl lg:text-8xl">{weatherSummary.temp}°C</div>

        <div className="flex items-center gap-2.5 py-2.5 md:py-6">
          <span className="text-sm font-light md:text-base">Feels like</span>
          <span className="text-2xl lg:text-4xl">
            {weatherSummary?.feels_like}°C
          </span>
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
