import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import StarIcon from ".";
import { deleteCookie, getCookie, setCookie } from "@/util/cookie";
import { sixtyDaysInMs } from "@/constant";

jest.mock("@/util/cookie", () => {
  return {
    deleteCookie: jest.fn(),
    setCookie: jest.fn(),
    getCookie: jest.fn(),
  };
});

const mockUseSearchParams = {
  get: jest.fn(),
};

jest.mock("next/navigation", () => {
  return {
    useSearchParams: () => {
      return mockUseSearchParams;
    },
  };
});

describe("Star Icon Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render correctly", () => {
    render(<StarIcon />);

    const button = screen.getByTitle("Favourite");
    expect(button).toBeInTheDocument();

    const svgPath = button.querySelector("path");
    expect(svgPath).toHaveAttribute("stroke", "#ffffff");
    expect(svgPath).toHaveAttribute("stroke-width", "1");
  });

  it("toggle star icon state", async () => {
    const city = "city";
    mockUseSearchParams.get.mockReturnValue(city);

    (getCookie as jest.Mock).mockReturnValueOnce(undefined);

    render(<StarIcon />);

    const button = screen.getByTitle("Favourite");

    const svgPath = button.querySelector("path");
    expect(svgPath).toHaveAttribute("fill", "transparent");

    await userEvent.click(button);

    expect(setCookie).toHaveBeenCalledWith("city", city, {
      expires: sixtyDaysInMs,
      samesite: "Lax",
      secure: true,
    });

    expect(svgPath).toHaveAttribute("fill", "#ffffff");

    await userEvent.click(button);

    expect(deleteCookie).toHaveBeenCalledWith(city);

    expect(svgPath).toHaveAttribute("fill", "transparent");
  });

  it("svg should be transparent if location is not set as default", () => {
    mockUseSearchParams.get.mockReturnValue("city");

    (getCookie as jest.Mock).mockReturnValue("different_city_default");

    render(<StarIcon />);

    const button = screen.getByTitle("Favourite");

    const svgPath = button.querySelector("path");

    expect(svgPath).toHaveAttribute("fill", "transparent");
  });

  it("svg should be filled with white if location is set as default", () => {
    mockUseSearchParams.get.mockReturnValue("city");

    (getCookie as jest.Mock).mockReturnValue("city");

    render(<StarIcon />);

    const button = screen.getByTitle("Favourite");

    const svgPath = button.querySelector("path");

    expect(svgPath).toHaveAttribute("fill", "#ffffff");
  });
});
