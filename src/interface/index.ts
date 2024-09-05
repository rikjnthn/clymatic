import React from "react";

export type SetStateType<T> = React.Dispatch<React.SetStateAction<T>>;

export interface ForecastApiType {
  list: {
    dt: number;
    dt_txt: string;
    weather: [
      {
        main: string;
        description: string;
      },
    ];
    main: {
      temp: number;
    };
    pop: number;
  }[];
}

export interface GeolocationApiType {
  name: string;
  lat: number;
  lon: number;
  country: string;
}

export interface WeatherSummaryApiType {
  main: {
    humidity: number;
    pressure: number;
    temp_min: number;
    temp_max: number;
    temp: number;
    feels_like: number;
  };
  weather: [
    {
      main: string;
      description: string;
    },
  ];
  wind: {
    speed: number;
    deg: number;
  };
  visibility: number;
}

export interface ForecastType {
  dt: number;
  date: string;
  main: string;
  description: string;
  temperature: string;
  precipitation: number;
}

export interface WeatherSummaryType {
  temp: string;
  feels_like: string;
  main: string;
  description: string;
}

export interface MoreInfomationWeatherType {
  wind: {
    speed: number;
    deg: number;
  };
  humidity: number;
  pressure: number;
  visibility: number;
  temperature: {
    min: number;
    max: number;
  };
}

export interface GeolocationType {
  city: string;
  lat: number;
  lon: number;
  countryId: string;
}

export type UnitsType = "metric" | "imperial";
