import { render, screen } from "@testing-library/react";
import ForecastSkeleton from ".";

describe("Forecast Skeleton Component", () => {
  it("should render correctly", () => {
    render(<ForecastSkeleton title="Title" />);

    expect(screen.getByText("Title")).toBeInTheDocument();
  });
});
