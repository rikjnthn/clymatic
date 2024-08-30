import React from "react";

const ForecastSkeleton = ({ title }: { title: string }) => {
  return (
    <div className="flex w-full max-w-96 flex-col gap-4 md:max-w-md">
      <div className="font-medium md:text-lg lg:text-xl">{title}</div>

      <div className="skeleton h-20 w-full"></div>
    </div>
  );
};

export default ForecastSkeleton;
