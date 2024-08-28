import Image from "next/image";
import React from "react";

const WeatherCard = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-sm text-gray md:text-base">12.00</div>
      <Image
        className="min-w-[40px] md:min-w-[50px]"
        src="/black/snowy.svg"
        alt=""
        width={40}
        height={40}
      />
      <div className="text-sm md:text-base">31°</div>
    </div>
  );
};

export default WeatherCard;
