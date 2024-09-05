import axios from "axios";
import "server-only";

import { WeatherSummaryApiType, WeatherSummaryType } from "@/interface";

export default async function getWeatherSummary({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}): Promise<WeatherSummaryType> {
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
}
