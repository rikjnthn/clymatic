import { render, screen } from "@testing-library/react";

import WeatherSummary from ".";

jest.mock("@/util/get-weather-summary", () => {
  return jest.fn().mockResolvedValue({
    temp: "25",
    feels_like: "30",
    main: "clear sky",
    description: "clear sky",
  });
});

function MockLocation() {
  return <div>Location</div>;
}

function MockTemperature() {
  return <div>Temperature</div>;
}

function MockFeelsLike() {
  return <div>Feels Like</div>;
}

jest.mock("@/components/location", () => MockLocation);
jest.mock(
  "@/components/weather-summary-feels-temperature",
  () => MockFeelsLike,
);
jest.mock("@/components/weather-summary-temperature", () => MockTemperature);

describe("Weather Summary Component", () => {
  it("should render correctly", async () => {
    render(
      await WeatherSummary({
        city: "city",
        countryId: "country_id",
        lat: 10,
        lon: 10,
      }),
    );

    const copyright = screen.getByText("©️2024, all right reserved");
    expect(copyright).toBeInTheDocument();

    const location = screen.getByText("Location");
    expect(location).toBeInTheDocument();

    const temperature = screen.getByText("Temperature");
    expect(temperature).toBeInTheDocument();

    const feelsLike = screen.getByText("Feels Like");
    expect(feelsLike).toBeInTheDocument();

    const weatherIcon = screen.getByAltText("clear sky");
    expect(weatherIcon).toBeInTheDocument();
    expect(weatherIcon).toHaveAttribute("width", "50");
    expect(weatherIcon).toHaveAttribute("height", "50");
    expect(weatherIcon).toHaveAttribute("title", "clear sky");
  });
});
