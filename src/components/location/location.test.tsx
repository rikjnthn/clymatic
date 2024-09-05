import { render, screen } from "@testing-library/react";

import Location from ".";

describe("Location Component", () => {
  it("should render correctly", () => {
    render(<Location city="London" countryId="UK" />);

    const location = screen.getByText("London, United Kingdom");
    expect(location).toBeInTheDocument();

    const date = screen.getByText("Today,", { exact: false });
    expect(date).toBeInTheDocument();
  });
});
