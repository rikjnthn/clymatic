import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Navigation from ".";

const mockSetIsOpenHamburger = jest.fn();

function MockChangeUnitsButton() {
  return <div>Change Units Button</div>;
}

jest.mock("@/components/change-units-button", () => MockChangeUnitsButton);

describe("Navigation Component", () => {
  it("should render correctly", () => {
    render(
      <Navigation
        isOpenHamburger={false}
        setIsOpenHamburger={mockSetIsOpenHamburger}
      />,
    );

    const navigation = screen.getByRole("navigation");
    expect(navigation).toBeInTheDocument();

    const unitsText = screen.getByText("Units");
    expect(unitsText).toBeInTheDocument();

    const closeButton = screen.getByRole("button");
    expect(closeButton).toBeInTheDocument();

    const logo = screen.getByText("Clymatic");
    expect(logo).toBeInTheDocument();

    const changeUnitsButton = screen.getByText("Change Units Button");
    expect(changeUnitsButton).toBeInTheDocument();

    const copyright = screen.getByText("©️2024, all right reserved");
    expect(copyright).toBeInTheDocument();
  });

  it("should be out of view if closed", () => {
    const { container } = render(
      <Navigation
        isOpenHamburger={false}
        setIsOpenHamburger={mockSetIsOpenHamburger}
      />,
    );

    const navigation = screen.getByRole("navigation");
    expect(navigation.classList.contains("-translate-x-full")).toBeTruthy();

    const darkOverlay = container.querySelector(".dark-overlay");
    expect(darkOverlay?.classList.contains("hidden")).toBeTruthy();
  });

  it("should be present if opened", () => {
    const { container } = render(
      <Navigation
        isOpenHamburger={true}
        setIsOpenHamburger={mockSetIsOpenHamburger}
      />,
    );

    const navigation = screen.getByRole("navigation");
    expect(navigation.classList.contains("-translate-x-full")).toBeFalsy();

    const darkOverlay = container.querySelector(".dark-overlay");
    expect(darkOverlay?.classList.contains("hidden")).toBeFalsy();
  });

  it("should close navigation if dark overlay is clicked", async () => {
    let mockIsOpenHamburger = false;

    mockSetIsOpenHamburger.mockImplementation(() => {
      mockIsOpenHamburger = !mockIsOpenHamburger;
    });

    const { container, rerender } = render(
      <Navigation
        isOpenHamburger={mockIsOpenHamburger}
        setIsOpenHamburger={mockSetIsOpenHamburger}
      />,
    );

    const navigation = screen.getByRole("navigation");
    expect(navigation.classList.contains("-translate-x-full")).toBeTruthy();

    const darkOverlay = container.querySelector(".dark-overlay");
    expect(darkOverlay?.classList.contains("hidden")).toBeTruthy();

    await userEvent.click(darkOverlay!);

    rerender(
      <Navigation
        isOpenHamburger={mockIsOpenHamburger}
        setIsOpenHamburger={mockSetIsOpenHamburger}
      />,
    );

    expect(navigation.classList.contains("-translate-x-full")).toBeFalsy();

    expect(darkOverlay?.classList.contains("hidden")).toBeFalsy();
  });

  it("should close navigation if close icon is clicked", async () => {
    let mockIsOpenHamburger = false;

    mockSetIsOpenHamburger.mockImplementation(() => {
      mockIsOpenHamburger = !mockIsOpenHamburger;
    });

    const { container, rerender } = render(
      <Navigation
        isOpenHamburger={mockIsOpenHamburger}
        setIsOpenHamburger={mockSetIsOpenHamburger}
      />,
    );

    const navigation = screen.getByRole("navigation");
    expect(navigation.classList.contains("-translate-x-full")).toBeTruthy();

    const closeButton = screen.getByRole("button");

    const darkOverlay = container.querySelector(".dark-overlay");
    expect(darkOverlay?.classList.contains("hidden")).toBeTruthy();

    await userEvent.click(closeButton);

    rerender(
      <Navigation
        isOpenHamburger={mockIsOpenHamburger}
        setIsOpenHamburger={mockSetIsOpenHamburger}
      />,
    );

    expect(navigation.classList.contains("-translate-x-full")).toBeFalsy();

    expect(darkOverlay?.classList.contains("hidden")).toBeFalsy();
  });
});
