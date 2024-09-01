import React from "react";

const Location = ({ city, countryId }: { city: string; countryId: string }) => {
  const displayNames = new Intl.DisplayNames("en-UK", { type: "region" });
  const countryName = displayNames.of(countryId);

  const dateFormatter = new Intl.DateTimeFormat("en-UK", {
    day: "2-digit",
    month: "short",
  });
  const date = dateFormatter.format(Date.now());

  return (
    <div className="flex flex-col items-center gap-2.5 text-sm font-light md:text-base">
      <div className="w-1/2 py-2.5 text-center">
        {city}, {countryName}
      </div>
      <div>Today, {date}</div>
    </div>
  );
};

export default Location;
