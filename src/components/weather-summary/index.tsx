import Image from "next/image";
import React from "react";

const WeatherSummary = () => {
  return (
    <div className="grid w-full place-items-center text-white max-md:py-9 md:mt-32 md:gap-12">
      <div className="flex flex-col items-center">
        <div className="text-6.5xl lg:text-8xl">30°C</div>

        <div className="flex items-center gap-2.5 py-2.5 md:py-6">
          <span className="text-sm font-light md:text-base">Feels like</span>
          <span className="text-2xl lg:text-4xl">34°C</span>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Image src="/white/clear-day.svg" alt="" width={50} height={50} />
          <span>Sunny</span>
        </div>
      </div>

      <div className="w-full md:order-first">
        <div className="flex flex-col items-center gap-2.5 text-sm font-light md:text-base">
          <div className="w-1/2 py-2.5 text-center">Jakarta, Indonesia</div>
          <div>Today, 23 Aug</div>
        </div>
      </div>

      <span className="absolute bottom-6 left-9 text-sm font-light max-md:hidden">
        ©️2024, all right reserved
      </span>
    </div>
  );
};

export default WeatherSummary;
