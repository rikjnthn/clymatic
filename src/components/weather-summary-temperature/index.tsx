"use client";
import { useUnits } from "@/context/units-context";
import formatTemperature from "@/util/format-temperature";
import React from "react";

const WeatherSummaryTemperature = ({ temp }: { temp: string }) => {
  const { units } = useUnits();

  const tempInNumber = parseFloat(temp);
  const formattedTemp = formatTemperature(tempInNumber, units);

  return <div className="text-6.5xl lg:text-8xl">{formattedTemp}</div>;
};

export default WeatherSummaryTemperature;
