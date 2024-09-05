import { render, screen } from "@testing-library/react";

import WeatherForecast from ".";
import { useUnits } from "@/context/units-context";

jest.mock("@/context/units-context", () => {
  return {
    useUnits: jest.fn(),
  };
});

describe("Weather Forecast Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly", () => {
    (useUnits as jest.Mock).mockReturnValue({
      units: "metric",
      setUnits: jest.fn(),
    });

    const { container } = render(
      <WeatherForecast forecast={[]} title="title" />,
    );

    const title = screen.getByText("title");
    expect(title).toBeInTheDocument();

    const precipitationContainer = container.querySelector("div:nth-child(2)");
    expect(precipitationContainer).toBeInTheDocument();

    expect(precipitationContainer?.childNodes.length).toEqual(0);
  });

  it("should render forecast card correctly", () => {
    (useUnits as jest.Mock).mockReturnValue({
      units: "metric",
      setUnits: jest.fn(),
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
      {
        date: "Wed Sep 04 2024 19:41:56 GMT+0700",
        description: "clear sky",
        dt: 193819858,
        main: "clear",
        precipitation: 0.75,
        temperature: "31",
      },
    ];

    const { container } = render(
      <WeatherForecast forecast={forecast} title="title" />,
    );

    const title = screen.getByText("title");
    expect(title).toBeInTheDocument();

    const precipitationContainer = container.querySelector("div:nth-child(2)");
    expect(precipitationContainer).toBeInTheDocument();

    expect(precipitationContainer?.childNodes.length).toEqual(forecast.length);
  });
});
