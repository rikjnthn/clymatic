import { render, screen } from "@testing-library/react";

import WeatherSummaryTemperature from ".";
import { useUnits } from "@/context/units-context";

jest.mock("@/context/units-context", () => {
  return {
    useUnits: jest.fn(),
  };
});

describe("Weather Summary Temperature Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly in metric units", () => {
    (useUnits as jest.Mock).mockReturnValue({
      units: "metric",
      setUnits: jest.fn(),
    });

    render(<WeatherSummaryTemperature temp="25.0" />);

    const temp = screen.getByText("25.0°C");
    expect(temp).toBeInTheDocument();
  });

  it("should render correctly in imperial units", () => {
    (useUnits as jest.Mock).mockReturnValue({
      units: "imperial",
      setUnits: jest.fn(),
    });

    render(<WeatherSummaryTemperature temp="25.0" />);

    const temp = screen.getByText("77.0°F");
    expect(temp).toBeInTheDocument();
  });
});
