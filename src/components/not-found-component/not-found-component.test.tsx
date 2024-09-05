import { render, screen } from "@testing-library/react";

import NotFoundComponent from ".";

function MockHeader() {
  return <div>Header</div>;
}

function MockSearchBar() {
  return <div>Search Bar</div>;
}

jest.mock("@/components/header", () => MockHeader);
jest.mock("@/components/search-bar", () => MockSearchBar);

describe("Not Found Component", () => {
  it("should render correctly", () => {
    render(<NotFoundComponent city="Not found city" />);

    const header = screen.getByText("Header");
    expect(header).toBeInTheDocument();

    const logo = screen.getByText("Clymatic");
    expect(logo).toBeInTheDocument();

    const searchBar = screen.getByText("Search Bar");
    expect(searchBar).toBeInTheDocument();

    const image = screen.getByRole("presentation");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", "");

    const notFoundText = screen.getByText("not found", { exact: false });
    expect(notFoundText).toBeInTheDocument();
  });
});
