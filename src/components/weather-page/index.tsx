import React from "react";

import getGeolocation from "@/util/get-geolocation";
import Header from "../header";
import WeatherSummary from "../weather-summary";
import WeatherInformation from "../weather-information";
import NotFoundComponent from "../not-found-component";

const WeatherPage = async ({ city }: { city: string }) => {
  const geolocationData = await getGeolocation(city);

  if (!geolocationData) {
    return <NotFoundComponent city={city} />;
  }

  return (
    <div className="md:flex">
      <div className="h-full bg-page md:fixed md:w-1/3 md:max-w-md">
        <Header />

        <WeatherSummary {...geolocationData} />
      </div>

      <div className="relative h-full md:ml-auto md:w-2/3">
        <WeatherInformation {...geolocationData} />
      </div>
    </div>
  );
};

export default WeatherPage;
