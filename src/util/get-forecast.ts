import axios from "axios";

import { ForecastApiType, ForecastType } from "@/interface";

export default async function getForecast({
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
