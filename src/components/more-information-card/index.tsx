import Image from "next/image";
import React from "react";

const MoreInformationCard = ({
  name,
  iconSrc,
  title,
}: {
  name: string;
  iconSrc: string;
  title: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-sm md:text-base">{name}</div>
      <Image
        className="md:w-[50px]"
        src={`/black/${iconSrc}`}
        alt={title}
        title={title}
        width="40"
        height="40"
      />
      <div className="text-sm md:text-base">31°</div>
    </div>
  );
};

export default MoreInformationCard;
