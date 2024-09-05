import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Hamburger from ".";

describe("Hamburger Component", () => {
  it("should render correctly", () => {
    render(<Hamburger />);

    const button = screen.getByTitle("Hamburger");

    expect(button).toBeInTheDocument();

    const svg = button.querySelector("svg");

    expect(svg).toBeInTheDocument();
  });

  it("should called a the onClick function when button clicked", async () => {
    const mockOnClick = jest.fn();

    render(<Hamburger onClick={mockOnClick} />);

    const button = screen.getByTitle("Hamburger");

    await userEvent.click(button);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
