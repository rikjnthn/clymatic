import React from "react";
import MoreInformationCard from "../more-information-card";

const moreInfomationDatas = [
  {
    name: "Wind",
    iconSrc: "/wind-direction.svg",
    title: "Wind speed (South East)",
  },
  {
    name: "Humidity",
    iconSrc: "/rain-drop.svg",
    title: "Wind speed (South East)",
  },
  {
    name: "UV Index",
    iconSrc: "/uv.svg",
    title: "Wind speed (South East)",
  },
  {
    name: "Pressure",
    iconSrc: "/pressure.svg",
    title: "Wind speed (South East)",
  },
  {
    name: "Visibility",
    iconSrc: "/visibility.svg",
    title: "Wind speed (South East)",
  },
  {
    name: "High / Low",
    iconSrc: "/temperature.svg",
    title: "Wind speed (South East)",
  },
];

const MoreInformation = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <div className="text-center font-medium md:text-lg lg:text-xl">More</div>
      <div className="more-information-container">
        {moreInfomationDatas.map((data) => {
          return <MoreInformationCard key={data.title} {...data} />;
        })}
      </div>
    </div>
  );
};

export default MoreInformation;
