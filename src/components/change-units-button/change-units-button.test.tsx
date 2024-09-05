import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ChangeUnitsButton from ".";
import { useUnits } from "@/context/units-context";

const mockSetUnits = jest.fn();

jest.mock("@/context/units-context", () => {
  return {
    useUnits: jest.fn(),
  };
});

describe("Change Units Button Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly", () => {
    (useUnits as jest.Mock).mockReturnValue({
      units: "metric",
      setUnits: mockSetUnits,
    });

    render(<ChangeUnitsButton className="test-class" />);

    const button = screen.getByTitle("Metrics units");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("metric");
    expect(button).toHaveAttribute("class", "test-class");
  });

  it("should change content when button click", async () => {
    (useUnits as jest.Mock).mockReturnValue({
      units: "metric",
      setUnits: mockSetUnits,
    });

    const component = render(<ChangeUnitsButton />);

    const button = screen.getByTitle("Metrics units");
    expect(button).toHaveTextContent("metric");

    await userEvent.click(button);

    (useUnits as jest.Mock).mockReturnValue({
      units: "imperial",
      setUnits: mockSetUnits,
    });

    component.rerender(<ChangeUnitsButton />);

    expect(button).toHaveTextContent("imperial");

    await userEvent.click(button);

    (useUnits as jest.Mock).mockReturnValue({
      units: "metric",
      setUnits: mockSetUnits,
    });
    component.rerender(<ChangeUnitsButton />);
    expect(button).toHaveTextContent("metric");
  });
});
