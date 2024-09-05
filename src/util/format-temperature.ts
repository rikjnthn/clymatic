import { UnitsType } from "@/interface";

export default function formatTemperature(temp: number, units: UnitsType) {
  return units === "metric"
    ? `${temp.toFixed(1)}°C`
    : `${((temp * 9) / 5 + 32).toFixed(1)}°F`;
}
