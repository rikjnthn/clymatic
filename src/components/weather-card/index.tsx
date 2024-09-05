"use client";
import Image from "next/image";
import React from "react";
import clsx from "clsx";

import { useUnits } from "@/context/units-context";

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
  const { units } = useUnits();

  const tempInNumber = parseFloat(temperature);
  const formattedTemperature =
    units === "metric"
      ? `${tempInNumber.toFixed(1)}°`
      : `${((tempInNumber * 9) / 5 + 32).toFixed(1)}°`;

  return (
    <div className="flex flex-col items-center" title={description}>
      <div
        className={clsx("w-max text-sm md:text-base", { "text-gray": !first })}
      >
        {first ? "Now" : time}
      </div>
      <Image
        className="min-w-[50px]"
        src={`/black/${icon}.svg`}
        alt={description}
        width={50}
        height={50}
      />
      <div className="w-max text-sm md:text-base">{formattedTemperature}</div>
    </div>
  );
};

export default WeatherCard;
