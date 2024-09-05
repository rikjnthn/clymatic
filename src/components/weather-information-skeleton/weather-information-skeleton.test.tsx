import { render, screen } from "@testing-library/react";

import WeatherInformationSkeleton from ".";

function MockSearchBar() {
  return <div>Search Bar</div>;
}

jest.mock("@/components/search-bar", () => MockSearchBar);

describe("Weather Information Skeleton Component", () => {
  it("should render correctly", () => {
    render(<WeatherInformationSkeleton />);

    const moreTitle = screen.getByText("More");
    expect(moreTitle).toBeInTheDocument();

    const logo = screen.getByText("Clymatic");
    expect(logo).toBeInTheDocument();

    const searchBar = screen.getByText("Search Bar");
    expect(searchBar).toBeInTheDocument();
  });
});
