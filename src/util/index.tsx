import axios, { isAxiosError } from "axios";

export async function getGeolocation(city: string) {
  try {
    const { data } = await axios.get(
      `${process.env.GEOLOCATION_API}?q=${city}&limit=5&appid=${process.env.API_KEY}`,
    );

    const geolocationData = data[0];

    return {
      city: geolocationData.name,
      lat: geolocationData.lat,
      lon: geolocationData.lon,
      country: geolocationData.country,
    };
  } catch (e) {
    if (isAxiosError(e)) {
      if (e.response?.status === 400) {
        return undefined;
      }

      throw new Error("Error has occured");
    }
  }
}
