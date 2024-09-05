import { render } from "@testing-library/react";

import DailyForecast from ".";

function MockWeatherForecast() {
  return <div>Weather Forecast</div>;
}

function MockPrecipitationForecast() {
  return <div>Precipitation Forecast</div>;
}

jest.mock("@/components/weather-forecast", () => MockWeatherForecast);
jest.mock("@/components/weather-forecast", () => MockPrecipitationForecast);

describe("Daily Forecast Component", () => {
  it("should render correctly", () => {
    const { container } = render(<DailyForecast forecast={[]} />);

    const forecastContainer = container.querySelector("div");
    expect(forecastContainer).toBeInTheDocument();
    expect(forecastContainer).toHaveAttribute("class", "forecast-container");
  });
});

const forecast = [
  {
    date: "Wed Sep 04 2024 16:41:56 GMT+0700",
    description: "clear sky",
    dt: 193819857,
    main: "clear",
    precipitation: 0.5,
    temperature: "31",
  },
];
