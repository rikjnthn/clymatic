import { render, screen } from "@testing-library/react";

import WeatherPageSkeleton from ".";

function MockWeatherSummarySkeleton() {
  return <div>Weather Summary Skeleton</div>;
}

function MockHeader() {
  return <div>Header</div>;
}

function MockWeatherInformationSkeleton() {
  return <div>Weather Information Skeleton</div>;
}

jest.mock("@/components/header", () => MockHeader);
jest.mock(
  "@/components/weather-information-skeleton",
  () => MockWeatherInformationSkeleton,
);
jest.mock(
  "@/components/weather-summary-skeleton",
  () => MockWeatherSummarySkeleton,
);

describe("Weather Page Skeleton Component", () => {
  it("should render correctly", () => {
    render(<WeatherPageSkeleton />);

    const header = screen.getByText("Header");
    expect(header).toBeInTheDocument();

    const weatherSummarySkeleton = screen.getByText("Weather Summary Skeleton");
    expect(weatherSummarySkeleton).toBeInTheDocument();

    const weatherInformationSkeleton = screen.getByText(
      "Weather Information Skeleton",
    );
    expect(weatherInformationSkeleton).toBeInTheDocument();
  });
});
