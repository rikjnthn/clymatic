"use client";
import Image from "next/image";
import React from "react";

import MoreInformationCard from "../more-infomation-card";
import { MoreInfomationWeatherType } from "@/interface";

const MoreInformation = ({
  humidity,
  pressure,
  temperature,
  visibility,
  wind,
}: MoreInfomationWeatherType) => {
  const formattedData = {
    humidity: `${humidity} %`,
    pressure: `${(pressure * 0.0009869233).toFixed(3)} atm`, //Pressure, 1hPa = 0.0009869233 atm
    temperature: `${temperature.min.toFixed(1)}° / ${temperature.max.toFixed(1)}°`,
    visibility: `${visibility / 1000} km`,
    wind_speed: `${wind.speed} m/s`,
  };

  return (
    <div className="flex w-full flex-col gap-5">
      <div className="text-center font-medium md:text-lg lg:text-xl">More</div>
      <div className="more-information-container">
        <MoreInformationCard
          name="Wind"
          data={formattedData.wind_speed}
          icon={
            <Image
              src="/black/wind-direction.svg"
              alt="Wind"
              width={50}
              height={50}
              title="Wind"
              style={{ rotate: `${wind.deg}deg` }}
            />
          }
        />
        <MoreInformationCard
          name="Humidity"
          data={formattedData.humidity}
          icon={
            <Image
              src="/black/rain-drop.svg"
              alt="Humidity"
              width={50}
              height={50}
              title="Humidity"
            />
          }
        />
        <MoreInformationCard
          name="Pressure"
          data={formattedData.pressure}
          icon={
            <Image
              src="/black/pressure.svg"
              alt="Pressure"
              width={50}
              height={50}
              title="Pressure"
            />
          }
        />
        <MoreInformationCard
          name="Visibility"
          data={formattedData.visibility}
          icon={
            <Image
              src="/black/visibility.svg"
              alt="Visibility"
              width={50}
              height={50}
              title="Visibility"
            />
          }
        />
        <MoreInformationCard
          name="High / Low"
          data={formattedData.temperature}
          icon={
            <Image
              src="/black/temperature.svg"
              alt="Wind"
              width={50}
              height={50}
              title="High / Low temperature"
            />
          }
        />
      </div>
    </div>
  );
};

export default MoreInformation;
