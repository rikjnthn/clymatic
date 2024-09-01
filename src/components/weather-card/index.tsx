import Image from "next/image";
import React from "react";
import clsx from "clsx";

const WeatherCard = ({
  first,
  icon,
  description,
  temperature,
  time,
}: {
  first: boolean;
  icon: string;
  temperature: string;
  time: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center" title={description}>
      <div className={clsx("text-sm md:text-base", { "text-gray": !first })}>
        {first ? "Now" : time}
      </div>
      <Image
        className="min-w-[50px]"
        src={`/black/${icon}.svg`}
        alt={description}
        width={50}
        height={50}
      />
      <div className="text-sm md:text-base">{temperature}°</div>
    </div>
  );
};

export default WeatherCard;
