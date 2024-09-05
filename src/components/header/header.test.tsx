import { render, screen } from "@testing-library/react";

import Header from ".";

const mockUseSearchParams = {
  has: jest.fn(),
};

function MockHamburger() {
  return <div>Hamburger</div>;
}

function MockNavigation() {
  return <div>Navigation</div>;
}

function MockStarIcon() {
  return <div>Star Icon</div>;
}

function MockSearchBar() {
  return <div>Search Bar</div>;
}

function MockChangeUnitsButton() {
  return <div>Change Units Button</div>;
}

jest.mock("@/components/hamburger", () => MockHamburger);
jest.mock("@/components/navigation", () => MockNavigation);
jest.mock("@/components/star-icon", () => MockStarIcon);
jest.mock("@/components/search-bar", () => MockSearchBar);
jest.mock("@/components/change-units-button", () => MockChangeUnitsButton);

jest.mock("next/navigation", () => {
  return {
    useSearchParams: () => {
      return mockUseSearchParams;
    },
  };
});

describe("Header Component", () => {
  it("should render correctly", () => {
    const { container } = render(<Header />);

    const header = container.querySelector("header");

    expect(header).toBeInTheDocument();

    const hamburger = screen.getByText("Hamburger");
    const navigation = screen.getByText("Navigation");
    const starIcon = screen.getByText("Star Icon");
    const searchBar = screen.getByText("Search Bar");
    const changeUnitsButton = screen.getByText("Change Units Button");

    expect(hamburger).toBeInTheDocument();
    expect(navigation).toBeInTheDocument();
    expect(starIcon).toBeInTheDocument();
    expect(searchBar).toBeInTheDocument();
    expect(changeUnitsButton).toBeInTheDocument();
  });

  it("should star icon hidden if city is not define", () => {
    mockUseSearchParams.has.mockReturnValue(false);

    render(<Header />);

    const starIcon = screen.getByText("Star Icon");
    expect(starIcon.parentElement).toHaveAttribute("class", "hidden");
  });
});
