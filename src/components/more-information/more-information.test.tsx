import { render, screen } from "@testing-library/react";

import MoreInformation from ".";
import { MoreInfomationWeatherType } from "@/interface";
import { useUnits } from "@/context/units-context";

jest.mock("@/context/units-context", () => {
  return {
    useUnits: jest.fn(),
  };
});

function testCard(cardName: string, value: string) {
  const name = screen.getByText(cardName);
  expect(name).toBeInTheDocument();

  const data = screen.getByText(value);
  expect(data).toBeInTheDocument();

  const icon = screen.getByAltText(cardName);
  expect(icon).toBeInTheDocument();
  expect(icon).toHaveAttribute("width", "50");
  expect(icon).toHaveAttribute("height", "50");
}

describe("More Information Component", () => {
  const moreInformationPropsMock = {
    humidity: 10,
    pressure: 100,
    temperature: {
      max: 35,
      min: 20,
    },
    visibility: 10000,
    wind: {
      deg: 270,
      speed: 20,
    },
  } satisfies MoreInfomationWeatherType;

  beforeEach(() => {
    jest.clearAllMocks;
  });

  it("should render correctly in metric units", () => {
    (useUnits as jest.Mock).mockReturnValue({
      units: "metric",
      setUnits: jest.fn(),
    });

    const { container } = render(
      <MoreInformation {...moreInformationPropsMock} />,
    );

    const moreTitle = screen.getByText("More");
    expect(moreTitle).toBeInTheDocument();

    const moreInformationContainer = container.querySelector(
      "div > div:nth-child(2)",
    );
    expect(moreInformationContainer).toBeInTheDocument();
    expect(moreInformationContainer).toHaveAttribute(
      "class",
      "more-information-container",
    );

    const formattedData = {
      humidity: `10 %`,
      pressure: "0.10 atm",
      temperature: "35.0° / 20.0°",
      visibility: "10.00 km",
      wind_speed: "72.00 km/h",
    };

    testCard("Humidity", formattedData.humidity);
    testCard("Pressure", formattedData.pressure);
    testCard("Visibility", formattedData.visibility);
    testCard("Wind", formattedData.wind_speed);
    testCard("High / Low", formattedData.temperature);
  });

  it("should render correctly in imperial units", () => {
    (useUnits as jest.Mock).mockReturnValue({
      units: "imperial",
      setUnits: jest.fn(),
    });

    const { container } = render(
      <MoreInformation {...moreInformationPropsMock} />,
    );

    const moreTitle = screen.getByText("More");
    expect(moreTitle).toBeInTheDocument();

    const moreInformationContainer = container.querySelector(
      "div > div:nth-child(2)",
    );
    expect(moreInformationContainer).toBeInTheDocument();
    expect(moreInformationContainer).toHaveAttribute(
      "class",
      "more-information-container",
    );

    const formattedData = {
      humidity: `10 %`,
      pressure: "1.45 PSI",
      temperature: "95.0° / 68.0°",
      visibility: "6.21 mil",
      wind_speed: "44.74 mil/h",
    };

    testCard("Humidity", formattedData.humidity);
    testCard("Pressure", formattedData.pressure);
    testCard("Visibility", formattedData.visibility);
    testCard("Wind", formattedData.wind_speed);
    testCard("High / Low", formattedData.temperature);
  });
});
