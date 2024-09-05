"use client";
import React from "react";

import { useUnits } from "@/context/units-context";
import formatTemperature from "@/util/format-temperature";

const WeatherSummaryFeelsTemperature = ({ temp }: { temp: string }) => {
  const { units } = useUnits();

  const tempInNumber = parseFloat(temp);

  const formattedTemperature = formatTemperature(tempInNumber, units);

  return <span className="text-2xl lg:text-4xl">{formattedTemperature}</span>;
};

export default WeatherSummaryFeelsTemperature;
