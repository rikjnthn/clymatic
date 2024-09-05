import { render, screen } from "@testing-library/react";

import HomePage from ".";

function MockHeader() {
  return <div>Header</div>;
}

function MockSearchBar() {
  return <div>Search Bar</div>;
}

jest.mock("@/components/header", () => MockHeader);
jest.mock("@/components/search-bar", () => MockSearchBar);

describe("Home Page Component", () => {
  it("should render correctly", () => {
    render(<HomePage />);

    const header = screen.getByText("Header");
    expect(header).toBeInTheDocument();

    const searchBar = screen.getByText("Search Bar");
    expect(searchBar).toBeInTheDocument();

    const copyright = screen.getByText("©️2024, all right reserved");
    expect(copyright).toBeInTheDocument();

    const logo = screen.getByText("Clymatic");
    expect(logo).toBeInTheDocument();
  });
});
