import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SearchBar from ".";

jest.mock("next/navigation", () => {
  return {
    usePathname: jest.fn(),
    useRouter: jest.fn().mockReturnValue({
      push: jest.fn(),
    }),
  };
});

describe("Search Bar Component", () => {
  it("should render correctly", () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText("City...");

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("name", "city");
  });

  it("should take user input", async () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText("City...");

    const inputValue = "city_name";
    await userEvent.type(input, inputValue);

    expect(input).toHaveValue(inputValue);
  });
});
