import Image from "next/image";
import React from "react";
import clsx from "clsx";

const PrecipitationCard = ({
  first,
  precipitation,
  time,
}: {
  first: boolean;
  precipitation: number;
  time: string;
}) => {
  return (
    <div className="flex flex-col items-center" title="Precipitation">
      <div
        className={clsx("w-max text-sm md:text-base", { "text-gray": !first })}
      >
        {first ? "Now" : time}
      </div>
      <Image
        className="min-w-[50px]"
        src="/black/rain-drop.svg"
        alt="precipitation"
        width={50}
        height={50}
      />
      <div className="text-sm md:text-base">
        {(precipitation * 100).toFixed(0)} %
      </div>
    </div>
  );
};

export default PrecipitationCard;
