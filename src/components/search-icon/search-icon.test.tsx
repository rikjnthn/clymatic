import { render, screen } from "@testing-library/react";

import SearchIcon from ".";

describe("Search Icon Component", () => {
  it("should render correctly", () => {
    render(<SearchIcon />);

    const button = screen.getByTitle("Search");

    expect(button).toBeInTheDocument();
  });
});
