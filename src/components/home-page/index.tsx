import React, { Suspense } from "react";

import Header from "../header";
import SearchBar from "../search-bar";
import WeatherPage from "../weather-page";
import WeatherPageSkeleton from "../weather-page-skeleton";

const HomePage = ({ city }: { city?: string }) => {
  if (city)
    return (
      <Suspense fallback={<WeatherPageSkeleton />}>
        <WeatherPage city={city} />
      </Suspense>
    );

  return (
    <div className="md:flex">
      <div className="h-full bg-page md:fixed md:w-1/3 md:max-w-md">
        <Header />

        <span className="absolute bottom-6 left-9 text-sm font-light text-white max-md:hidden">
          ©️2024, all right reserved
        </span>
      </div>

      <div className="relative h-full p-4 py-9 xs:p-9 xs:py-6 md:ml-auto md:w-2/3">
        <div className="w-full max-md:hidden">
          <nav className="flex w-full justify-between gap-4">
            <div className="flex items-center justify-between">
              <span className="select-none text-4xl font-bold text-primary-base">
                Clymatic
              </span>
            </div>

            <div>
              <SearchBar />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
