import { render, screen } from "@testing-library/react";

import WeatherInformation from ".";

jest.mock("@/util/get-weather-information", () => {
  return jest.fn();
});
jest.mock("@/util/get-forecast", () => {
  return jest.fn();
});

function MockDailyForecast() {
  return <div>Daily Forecast</div>;
}

function MockHourlyForecast() {
  return <div>Hourly Forecast</div>;
}

function MockMoreInformation() {
  return <div>More Information</div>;
}

function MockSearchBar() {
  return <div>Search Bar</div>;
}

jest.mock("@/components/search-bar", () => MockSearchBar);
jest.mock("@/components/daily-forecast", () => MockDailyForecast);
jest.mock("@/components/hourly-forecast", () => MockHourlyForecast);
jest.mock("@/components/more-information", () => MockMoreInformation);

describe("Weather Infomation", () => {
  it("should render correctly", async () => {
    render(await WeatherInformation({ lat: 10, lon: 10 }));

    const logo = screen.getByText("Clymatic");
    expect(logo).toBeInTheDocument();

    const searchBar = screen.getByText("Search Bar");
    expect(searchBar).toBeInTheDocument();

    const dailyForecast = screen.getByText("Daily Forecast");
    expect(dailyForecast).toBeInTheDocument();

    const hourlyForecast = screen.getByText("Hourly Forecast");
    expect(hourlyForecast).toBeInTheDocument();

    const moreInformation = screen.getByText("More Information");
    expect(moreInformation).toBeInTheDocument();
  });
});
