import React from "react";

const MoreInformationCard = ({
  name,
  data,
  icon,
}: {
  name: string;
  data: string;
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-sm md:text-base">{name}</div>

      {icon}

      <div className="text-sm md:text-base">{data}</div>
    </div>
  );
};

export default MoreInformationCard;
