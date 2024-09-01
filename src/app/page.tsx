import HomePage from "@/components/home-page";
import WeatherPage from "@/components/weather-page";

export default function Home({
  searchParams,
}: {
  searchParams: { city?: string };
}) {
  const city = decodeURIComponent(searchParams.city ?? "");

  if (!searchParams.city || searchParams.city?.length === 0) {
    return <HomePage />;
  }

  return <WeatherPage city={city} />;
}
