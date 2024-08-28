import React from "react";
import PrecipitationCard from "../precipitation-card";

const PrecipitationForecast = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="font-medium md:text-lg lg:text-xl">{title}</div>

      <div className="flex w-full gap-4 overflow-x-scroll">
        <PrecipitationCard />
        <PrecipitationCard />
        <PrecipitationCard />
        <PrecipitationCard />
        <PrecipitationCard />
        <PrecipitationCard />
        <PrecipitationCard />
      </div>
    </div>
  );
};

export default PrecipitationForecast;
