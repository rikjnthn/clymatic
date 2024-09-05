import { render } from "@testing-library/react";

import HourlyForecast from ".";

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
    const { container } = render(<HourlyForecast forecast={[]} />);

    const forecastContainer = container.querySelector("div");
    expect(forecastContainer).toBeInTheDocument();
    expect(forecastContainer).toHaveAttribute("class", "forecast-container");
  });
});
