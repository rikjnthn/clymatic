import React, { Suspense } from "react";

import getGeolocation from "@/util/get-geolocation";
import Header from "../header";
import WeatherInformationSkeleton from "../weather-information-skeleton";
import WeatherSummarySkeleton from "../weather-summary-skeleton";
import WeatherSummary from "../weather-summary";
import WeatherInformation from "../weather-information";
import NotFoundComponent from "../not-found-component";
import { UnitsProvider } from "@/context/units-context";

const WeatherPage = async ({ city }: { city: string }) => {
  const geolocationData = await getGeolocation(city);

  if (!geolocationData) {
    return <NotFoundComponent city={city} />;
  }

  return (
    <div className="md:flex">
      <UnitsProvider>
        <div className="h-full bg-page md:fixed md:w-1/3 md:max-w-md">
          <Header />

          <Suspense fallback={<WeatherSummarySkeleton />}>
            <WeatherSummary {...geolocationData} />
          </Suspense>
        </div>

        <div className="relative h-full md:ml-auto md:w-2/3">
          <Suspense fallback={<WeatherInformationSkeleton />}>
            <WeatherInformation {...geolocationData} />
          </Suspense>
        </div>
      </UnitsProvider>
    </div>
  );
};

export default WeatherPage;
