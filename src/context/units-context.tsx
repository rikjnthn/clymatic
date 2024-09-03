"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

import { SetStateType, UnitsType } from "@/interface";
import { getCookies } from "@/util/cookie";

const UnitsContext = createContext<UnitsContextType | undefined>(undefined);

export const useUnits = () => {
  const context = useContext(UnitsContext);

  if (!context)
    throw new Error("useAppSetting should be called inside UnitsProvider");

  return context;
};

export const UnitsProvider = ({ children }: { children: React.ReactNode }) => {
  const [units, setUnits] = useState<UnitsType>("metric");

  useEffect(() => {
    const units = getCookies("units") ?? "metric";

    setUnits(units);
  }, []);

  return (
    <UnitsContext.Provider value={{ units, setUnits }}>
      {children}
    </UnitsContext.Provider>
  );
};

interface UnitsContextType {
  units: UnitsType;
  setUnits: SetStateType<UnitsType>;
}
