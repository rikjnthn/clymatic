"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import MoreInformationCard from "../more-infomation-card";
import { MoreInfomationWeatherType } from "@/interface";
import formatMoreInformation from "@/util/format-more-information";
import { useUnits } from "@/context/units-context";

const MoreInformation = (props: MoreInfomationWeatherType) => {
  const [formattedData, setFormattedData] = useState({
    humidity: "",
    pressure: "",
    temperature: "",
    visibility: "",
    wind_speed: "",
  });

  const { units } = useUnits();

  useEffect(() => {
    const formattedData = formatMoreInformation(props, units);
    setFormattedData(formattedData);
  }, [units, props]);

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
              style={{ rotate: `${props.wind.deg}deg` }}
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
