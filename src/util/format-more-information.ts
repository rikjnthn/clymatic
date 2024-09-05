import { MoreInfomationWeatherType, UnitsType } from "@/interface";

export default function formatMoreInformation(
  {
    humidity,
    pressure,
    temperature,
    visibility,
    wind,
  }: MoreInfomationWeatherType,
  units: UnitsType,
) {
  const formattedData = {
    humidity: `${humidity} %`,
    pressure: "",
    temperature: "",
    visibility: "",
    wind_speed: "",
  };

  if (units === "metric") {
    formattedData.pressure = `${(pressure * 0.0009869233).toFixed(2)} atm`; //Pressure, 1 hPa = 0.0009869233 atm
    formattedData.visibility = `${(visibility / 1000).toFixed(2)} km`;
    formattedData.wind_speed = `${(wind.speed * 3.6).toFixed(2)} km/h`;
    formattedData.temperature = `${temperature.max.toFixed(1)}° / ${temperature.min.toFixed(1)}°`;
  }

  if (units === "imperial") {
    formattedData.pressure = `${(pressure * 0.0145037738).toFixed(2)} PSI`; //Pressure, 1 hPa = 0.0145037738 PSI
    formattedData.visibility = `${(visibility * 0.000621371).toFixed(2)} mil`;
    formattedData.wind_speed = `${(wind.speed * 2.23694).toFixed(2)} mil/h`;
    formattedData.temperature = `${((temperature.max * 9) / 5 + 32).toFixed(1)}° / ${((temperature.min * 9) / 5 + 32).toFixed(1)}°`;
  }

  return formattedData;
}
