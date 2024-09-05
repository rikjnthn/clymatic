import isDay from "@/util/is-day";

export const WEATHER_IMAGE = {
  "clear sky": isDay() ? "clear-day" : "clear-night",
  "few clouds": isDay() ? "sunny-cloud" : "moon-cloud",
  "scattered clouds": "cloud",
  "broken clouds": "cloudy",
  "shower rain": "heavy-rain",
  clear: isDay() ? "clear-day" : "clear-night",
  drizzle: "rain",
  clouds: "cloudy",
  rain: "heavy-rain",
  thunderstorm: "thunder",
  snow: "snow",
  mist: "mist",
  haze: "mist",
  smoke: "mist",
  dust: "mist",
  fog: "mist",
  sand: "mist",
  ash: "mist",
  squall: "mist",
  tornado: "mist",
};

export const sixtyDaysInMs = 216000000;
