import { render, screen } from "@testing-library/react";

import MoreInformationCard from ".";

function MockIcon() {
  return <div>Icon</div>;
}

describe("More Information Card", () => {
  it("should render correctly", () => {
    render(<MoreInformationCard data="data" icon={<MockIcon />} name="name" />);

    const data = screen.getByText("data");
    expect(data).toBeInTheDocument();

    const name = screen.getByText("name");
    expect(name).toBeInTheDocument();

    const icon = screen.getByText("Icon");
    expect(icon).toBeInTheDocument();
  });
});
