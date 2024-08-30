import { Suspense } from "react";

import Header from "@/components/header";
import WeatherInformation from "@/components/weather-information";
import WeatherSummary from "@/components/weather-summary";
import WeatherSummarySkeleton from "@/components/weather-summary-skeleton";
import WeatherInformationSkeleton from "@/components/weather-information-skeleton";
import NotFoundComponent from "@/components/not-found-component";
import { getGeolocation } from "@/util";

export default async function Home({
  searchParams,
}: {
  searchParams: { city?: string };
}) {
  const city = decodeURIComponent(searchParams.city ?? "");
  const geolocationData = await getGeolocation(city);

  if (!geolocationData) {
    return <NotFoundComponent city={city} />;
  }

  return (
    <div className="md:flex">
      <div className="h-full bg-page md:fixed md:w-1/3 md:max-w-md">
        <Header />

        <Suspense fallback={<WeatherSummarySkeleton />}>
          <WeatherSummary />
        </Suspense>
      </div>

      <div className="relative h-full md:ml-auto md:w-2/3">
        <Suspense fallback={<WeatherInformationSkeleton />}>
          <WeatherInformation />
        </Suspense>
      </div>
    </div>
  );
}
