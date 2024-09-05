import axios from "axios";
import "server-only";

import { MoreInfomationWeatherType, WeatherSummaryApiType } from "@/interface";

export default async function getMoreWeatherInformation({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}): Promise<MoreInfomationWeatherType> {
  const { data } = await axios.get<WeatherSummaryApiType>(
    `${process.env.WEATHER_API}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.API_KEY}`,
  );

  return {
    wind: data.wind,
    humidity: data.main.humidity,
    pressure: data.main.pressure,
    visibility: data.visibility,
    temperature: {
      min: data.main.temp_min,
      max: data.main.temp_max,
    },
  };
}
