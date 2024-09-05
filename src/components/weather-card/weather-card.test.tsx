import { render, screen } from "@testing-library/react";

import WeatherCard from ".";
import { useUnits } from "@/context/units-context";

jest.mock("@/context/units-context", () => {
  return {
    useUnits: jest.fn(),
  };
});

describe("Weather Card", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly for the first card", () => {
    (useUnits as jest.Mock).mockReturnValue({
      units: "metric",
      setUnits: jest.fn(),
    });

    render(
      <WeatherCard
        first
        description="description"
        icon="icon"
        temperature="25"
        time="time"
      />,
    );

    const time = screen.getByText("Now");
    expect(time).toBeInTheDocument();
    expect(time.classList.contains("text-gray")).toBeFalsy();

    const icon = screen.getByAltText("description");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("width", "50");
    expect(icon).toHaveAttribute("height", "50");

    const data = screen.getByText("25.0°");
    expect(data).toBeInTheDocument();
  });

  it("should render correctly for the other card", () => {
    (useUnits as jest.Mock).mockReturnValue({
      units: "metric",
      setUnits: jest.fn(),
    });

    render(
      <WeatherCard
        first={false}
        description="description"
        icon="icon"
        temperature="25"
        time="time"
      />,
    );

    const time = screen.getByText("time");
    expect(time.classList.contains("text-gray")).toBeTruthy();
  });

  it("should render correctly when units in imperial", () => {
    (useUnits as jest.Mock).mockReturnValue({
      units: "imperial",
      setUnits: jest.fn(),
    });

    render(
      <WeatherCard
        first={false}
        description="description"
        icon="icon"
        temperature="25"
        time="time"
      />,
    );

    const data = screen.getByText("77.0°");
    expect(data).toBeInTheDocument();
  });
});
