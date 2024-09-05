import { render, screen } from "@testing-library/react";

import WeatherPage from ".";
import getGeolocation from "@/util/get-geolocation";

jest.mock("@/util/get-geolocation", () => {
  return jest.fn();
});

function MockNotFoundComponent() {
  return <div>Not Found</div>;
}

function MockHeader() {
  return <div>Header</div>;
}

function MockWeatherInformation() {
  return <div>Weather Information</div>;
}

function MockWeatherSummary() {
  return <div>Weather Summary</div>;
}

jest.mock("@/components/not-found-component", () => MockNotFoundComponent);
jest.mock("@/components/header", () => MockHeader);
jest.mock("@/components/weather-information", () => MockWeatherInformation);
jest.mock("@/components/weather-summary", () => MockWeatherSummary);

describe("Weather Page Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render weather page correctly if city is given", async () => {
    (getGeolocation as jest.Mock).mockResolvedValue({
      city: "city",
      lat: 10,
      lon: 10,
      countryId: "countryId",
    });

    render(await WeatherPage({ city: "city" }));

    const header = screen.getByText("Header");
    expect(header).toBeInTheDocument();

    const weatherInformation = screen.getByText("Weather Information");
    expect(weatherInformation).toBeInTheDocument();

    const weatherSummary = screen.getByText("Weather Summary");
    expect(weatherSummary).toBeInTheDocument();
  });

  it("should render not found component if city is not found", async () => {
    (getGeolocation as jest.Mock).mockResolvedValue(undefined);

    render(await WeatherPage({ city: "not_found" }));

    const notFound = screen.getByText("Not Found");
    expect(notFound).toBeInTheDocument();
  });
});
