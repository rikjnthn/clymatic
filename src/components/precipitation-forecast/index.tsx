import React from "react";

import PrecipitationCard from "../precipitation-card";
import { ForecastType } from "@/interface";

const PrecipitationForecast = ({
  title,
  forecast,
}: {
  title: string;
  forecast: ForecastType[];
}) => {
  return (
    <div className="flex w-full max-w-fit flex-col gap-4">
      <div className="font-medium md:text-lg lg:text-xl">{title}</div>

      <div className="flex w-full gap-4 overflow-x-scroll">
        {forecast.map(({ date, precipitation, dt }, idx) => {
          return (
            <PrecipitationCard
              first={idx === 0}
              key={dt}
              precipitation={precipitation}
              time={date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PrecipitationForecast;
