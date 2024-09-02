import { cookies } from "next/headers";

import HomePage from "@/components/home-page";
import WeatherPage from "@/components/weather-page";

export default function Home({
  searchParams,
}: {
  searchParams: { city?: string };
}) {
  const cityFromCookie = cookies().get("city");

  const city = decodeURIComponent(
    searchParams.city ?? cityFromCookie?.value ?? "",
  );

  if (!city) return <HomePage />;

  return <WeatherPage city={city} />;
}
