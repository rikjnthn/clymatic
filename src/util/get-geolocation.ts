import axios from "axios";
import "server-only";

import { GeolocationApiType, GeolocationType } from "@/interface";

export default async function getGeolocation(
  city: string,
): Promise<GeolocationType | undefined> {
  const { data } = await axios.get<GeolocationApiType[]>(
    `${process.env.GEOLOCATION_API}?q=${city}&limit=5&appid=${process.env.API_KEY}`,
  );

  const geolocationData = data[0];

  if (!geolocationData) return undefined;

  return {
    city: geolocationData.name,
    lat: geolocationData.lat,
    lon: geolocationData.lon,
    countryId: geolocationData.country,
  };
}
