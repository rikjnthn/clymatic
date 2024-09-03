"use client";
import React, { useEffect } from "react";

import { setCookie } from "@/util/cookie";
import { sixtyDaysInMs } from "@/constant";
import { useUnits } from "@/context/units-context";

const ChangeUnitsButton = ({ className }: { className: string }) => {
  const { units, setUnits } = useUnits();

  const changeUnits = () => {
    setUnits((prev) => (prev === "metric" ? "imperial" : "metric"));
  };

  useEffect(() => {
    if (!units) return;

    setCookie("units", units, {
      expires: sixtyDaysInMs,
      samesite: "Lax",
      secure: true,
    });
  }, [units]);

  return (
    <button
      onClick={changeUnits}
      className={className}
      type="button"
      title={"Metrics units"}
    >
      {units}
    </button>
  );
};

export default ChangeUnitsButton;
