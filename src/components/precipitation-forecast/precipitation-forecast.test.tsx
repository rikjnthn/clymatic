import { render, screen } from "@testing-library/react";

import PrecipitationForecast from ".";

describe("Precipitation Forecast Component", () => {
  it("should render correctly", () => {
    const { container } = render(
      <PrecipitationForecast forecast={[]} title="title" />,
    );

    const title = screen.getByText("title");
    expect(title).toBeInTheDocument();

    const precipitationContainer = container.querySelector("div:nth-child(2)");
    expect(precipitationContainer).toBeInTheDocument();

    expect(precipitationContainer?.childNodes.length).toEqual(0);
  });

  it("should render forecast card correctly", () => {
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
      <PrecipitationForecast forecast={forecast} title="title" />,
    );

    const title = screen.getByText("title");
    expect(title).toBeInTheDocument();

    const precipitationContainer = container.querySelector("div:nth-child(2)");
    expect(precipitationContainer).toBeInTheDocument();

    expect(precipitationContainer?.childNodes.length).toEqual(forecast.length);
  });
});
