"use client";

import { SetStateType } from "@/interface";
import React, { createContext, useContext, useEffect, useState } from "react";

const AppSettingContext = createContext<AppSettingContextType | undefined>(
  undefined,
);

export const useAppSetting = () => {
  const context = useContext(AppSettingContext);

  if (!context)
    throw new Error("useAppSetting should be called inside AppSettingProvider");

  return context;
};

const defaultLocationInit = () => {
  const defaultLocation = localStorage.getItem("default-location");

  if (defaultLocation) return defaultLocation;

  return "";
};

export const AppSettingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [unit, setUnit] = useState<UnitType>("metrics");
  const [defaultLocation, setDefaultLocation] =
    useState<string>(defaultLocationInit);

  useEffect(() => {
    localStorage.setItem("app-setting", unit);
  }, [unit]);

  return (
    <AppSettingContext.Provider value={{ unit, setUnit }}>
      {children}
    </AppSettingContext.Provider>
  );
};

type UnitType = "metrics" | "imperial";

interface AppSettingContextType {
  unit: UnitType;
  setUnit: SetStateType<UnitType>;
}
