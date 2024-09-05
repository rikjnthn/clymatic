import { render, screen } from "@testing-library/react";

import PrecipitationCard from ".";

describe("Precipitation Card", () => {
  it("should render correctly for the first card", () => {
    render(<PrecipitationCard first precipitation={0.1} time="time" />);

    const time = screen.getByText("Now");
    expect(time).toBeInTheDocument();
    expect(time.classList.contains("text-gray")).toBeFalsy();

    const icon = screen.getByAltText("Precipitation");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute("width", "50");
    expect(icon).toHaveAttribute("height", "50");

    const data = screen.getByText("10 %");
    expect(data).toBeInTheDocument();
  });

  it("should render correctly for the other card", () => {
    render(<PrecipitationCard first={false} precipitation={0.1} time="time" />);

    const time = screen.getByText("time");
    expect(time.classList.contains("text-gray")).toBeTruthy();
  });
});
