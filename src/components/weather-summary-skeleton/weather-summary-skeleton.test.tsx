import { render, screen } from "@testing-library/react";

import WeatherSummarySkeleton from ".";

describe("Weather Summary Skeleton Component", () => {
  it("should render correctly", () => {
    render(<WeatherSummarySkeleton />);

    const copyright = screen.getByText("©️2024, all right reserved");
    expect(copyright).toBeInTheDocument();
  });
});
