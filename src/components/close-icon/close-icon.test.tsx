import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import CloseIcon from ".";

describe("Close Icon Component", () => {
  it("should render correctly", () => {
    render(<CloseIcon />);

    const button = screen.getByTitle("Close");

    expect(button).toBeInTheDocument();

    const svg = button.querySelector("svg");

    expect(svg).toBeInTheDocument();
  });

  it("should called a the onClick function when button clicked", async () => {
    const mockOnClick = jest.fn();

    render(<CloseIcon onClick={mockOnClick} />);

    const button = screen.getByTitle("Close");

    await userEvent.click(button);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
