import { render, screen } from "@testing-library/react";

import WeatherSummaryFeelsTemperature from ".";
import { useUnits } from "@/context/units-context";

jest.mock("@/context/units-context", () => {
  return {
    useUnits: jest.fn(),
  };
});

describe("Weather Summary Feels Temperature Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly in metric", () => {
    (useUnits as jest.Mock).mockReturnValue({
      units: "metric",
      setUnits: jest.fn(),
    });

    render(<WeatherSummaryFeelsTemperature temp="30" />);

    const temp = screen.getByText("30.0°C");
    expect(temp).toBeInTheDocument();
  });

  it("should render correctly in imperial", () => {
    (useUnits as jest.Mock).mockReturnValue({
      units: "imperial",
      setUnits: jest.fn(),
    });

    render(<WeatherSummaryFeelsTemperature temp="30" />);

    const temp = screen.getByText("86.0°F");
    expect(temp).toBeInTheDocument();
  });
});
