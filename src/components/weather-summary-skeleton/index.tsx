import React from "react";

const WeatherSummarySkeleton = () => {
  return (
    <div className="grid w-full place-items-center text-white max-md:py-9 md:mt-32 md:gap-12">
      <div className="flex flex-col items-center">
        <div className="skeleton h-24 w-36"></div>

        <div className="skeleton my-2.5 h-8 w-36 md:my-6 lg:h-10"></div>

        <div className="skeleton flex h-[50px] w-28 flex-wrap items-center gap-2.5"></div>
      </div>

      <div className="w-full md:order-first">
        <div className="flex flex-col items-center gap-2.5 text-sm font-light md:text-base">
          <div className="skeleton my-2.5 h-5 w-28 text-center lg:h-6"></div>
          <div className="skeleton h-5 w-24 lg:h-6"></div>
        </div>
      </div>

      <span className="absolute bottom-6 left-9 text-sm font-light max-md:hidden">
        ©️2024, all right reserved
      </span>
    </div>
  );
};

export default WeatherSummarySkeleton;
