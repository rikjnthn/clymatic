import {
  deleteCookie,
  getAllCookies,
  getCookie,
  setCookie,
} from "@/util/cookie";
import formatMoreInformation from "@/util/format-more-information";
import formatTemperature from "@/util/format-temperature";
import getForecast from "@/util/get-forecast";
import getGeolocation from "@/util/get-geolocation";
import getMoreWeatherInformation from "@/util/get-weather-information";
import getWeatherSummary from "@/util/get-weather-summary";
import isDay from "@/util/is-day";

jest.mock("@/util/is-day", () => {
  return jest.fn();
});

jest.mock("@/util/get-weather-summary", () => {
  return jest.fn();
});

jest.mock("@/util/get-weather-information", () => {
  return jest.fn();
});

jest.mock("@/util/get-geolocation", () => {
  return jest.fn();
});

jest.mock("@/util/get-forecast", () => {
  return jest.fn();
});

jest.mock("@/util/format-temperature", () => {
  return jest.fn();
});

jest.mock("@/util/format-more-information", () => {
  return jest.fn();
});

jest.mock("@/util/cookie", () => {
  return {
    getAllCookies: jest.fn(),
    getCookie: jest.fn(),
    setCookie: jest.fn(),
    deleteCookie: jest.fn(),
  };
});

beforeEach(() => {
  jest.clearAllMocks();
});

describe("isDay", () => {
  it("is day should return true it is day time", () => {
    (isDay as jest.Mock).mockReturnValue(true);

    expect(isDay()).toBeTruthy();
  });

  it("is day should return false it is night time", () => {
    (isDay as jest.Mock).mockReturnValue(false);

    expect(isDay()).toBeFalsy();
  });
});

describe("getWeatherSummary", () => {
  it("should return weather summary record", () => {
    (getWeatherSummary as jest.Mock).mockResolvedValue({
      temp: "25.0",
      feels_like: "31.2",
      main: "clear sky",
      description: "clear sky",
    });

    expect(getWeatherSummary({ lat: 10, lon: 10 })).resolves.toEqual({
      temp: "25.0",
      feels_like: "31.2",
      main: "clear sky",
      description: "clear sky",
    });
  });
});

describe("getWeatherInformation", () => {
  it("should return weather information record", () => {
    (getMoreWeatherInformation as jest.Mock).mockResolvedValue({
      wind: {
        speed: 25,
        deg: 270,
      },
      humidity: 0.1,
      pressure: 100,
      visibility: 10000,
      temperature: {
        min: 25,
        max: 30,
      },
    });

    expect(getMoreWeatherInformation({ lat: 10, lon: 10 })).resolves.toEqual({
      wind: {
        speed: 25,
        deg: 270,
      },
      humidity: 0.1,
      pressure: 100,
      visibility: 10000,
      temperature: {
        min: 25,
        max: 30,
      },
    });
  });
});

describe("getGeolocation", () => {
  it("should return geolocation data", () => {
    (getGeolocation as jest.Mock).mockResolvedValue({
      city: "city",
      lat: 10,
      lon: 10,
      countryId: "country_id",
    });

    expect(getGeolocation("city")).resolves.toEqual({
      city: "city",
      lat: 10,
      lon: 10,
      countryId: "country_id",
    });
  });
});

describe("getForecast", () => {
  it("should return list of weather forecast data", () => {
    (getForecast as jest.Mock).mockResolvedValue([
      {
        dt: 131351356156,
        date: "Thu Sep 05 2024 14:24:36",
        main: "clear sky",
        description: "clear sky",
        temperature: "25.0",
        precipitation: 0.9,
      },
    ]);

    expect(getForecast({ lat: 10, lon: 10 })).resolves.toEqual([
      {
        dt: 131351356156,
        date: "Thu Sep 05 2024 14:24:36",
        main: "clear sky",
        description: "clear sky",
        temperature: "25.0",
        precipitation: 0.9,
      },
    ]);
  });
});

describe("formatTemperature", () => {
  it("should return temperature in celcius", () => {
    (formatTemperature as jest.Mock).mockReturnValue("25.0°C");
    expect(formatTemperature(25, "metric")).toEqual("25.0°C");
  });

  it("should return temperature in imperial", () => {
    (formatTemperature as jest.Mock).mockReturnValue("86.0°F");
    expect(formatTemperature(30, "metric")).toEqual("86.0°F");
  });
});

describe("formatMoreInformation", () => {
  const data = {
    wind: {
      speed: 25,
      deg: 270,
    },
    humidity: 10,
    pressure: 100,
    visibility: 10000,
    temperature: {
      min: 25,
      max: 30,
    },
  };

  it("should return formatted data in metric units", () => {
    (formatMoreInformation as jest.Mock).mockReturnValue({
      humidity: "10 %",
      pressure: "0.10 atm",
      temperature: "25.0°C",
      visibility: "10 km",
      wind_speed: "90 km/h",
    });

    expect(formatMoreInformation(data, "metric")).toEqual({
      humidity: "10 %",
      pressure: "0.10 atm",
      temperature: "25.0°C",
      visibility: "10 km",
      wind_speed: "90 km/h",
    });
  });

  it("should return formatted data in imperial units", () => {
    (formatMoreInformation as jest.Mock).mockReturnValue({
      humidity: "10 %",
      pressure: "1.45 PSI",
      temperature: "77.0°F",
      visibility: "6.21 mil",
      wind_speed: "55.92 mil/h",
    });

    expect(formatMoreInformation(data, "imperial")).toEqual({
      humidity: "10 %",
      pressure: "1.45 PSI",
      temperature: "77.0°F",
      visibility: "6.21 mil",
      wind_speed: "55.92 mil/h",
    });
  });
});

describe("cookie", () => {
  it("getCookie should return cookie value if key is given", () => {
    (getCookie as jest.Mock).mockReturnValue("cookie value");

    expect(getCookie("key")).toEqual("cookie value");
  });

  it("getCookie should return undefined  if cookie's key not found", () => {
    (getCookie as jest.Mock).mockReturnValue(undefined);

    expect(getCookie("not_found_cookie_key")).toBeUndefined();
  });

  it("getAllCookie should return cookies", () => {
    (getAllCookies as jest.Mock).mockReturnValue({ tes: "cookie value" });

    expect(getAllCookies()).toEqual({ tes: "cookie value" });
  });

  it("getAllCookie should return undefined if cookies not found", () => {
    (getAllCookies as jest.Mock).mockReturnValue(undefined);

    expect(getAllCookies()).toBeUndefined();
  });

  it("setCookie should return void", () => {
    expect(setCookie("key", "value", { expires: 1590801935 })).toBeUndefined();
  });

  it("deleteCookie should return void", () => {
    expect(deleteCookie("key")).toBeUndefined();
  });
});
