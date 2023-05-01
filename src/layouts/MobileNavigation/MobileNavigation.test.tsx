import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import mockRouter from "next-router-mock";

import { navLinks } from "@/data";
import { MobileNavigation, MobileNavigationStyles } from ".";

jest.mock("next/router", () => require("next-router-mock"));

describe("Mobile navigation", () => {
  it("renders a link for each nav item", () => {
    mockRouter.push("/");
    render(<MobileNavigation />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(navLinks.length);
  });

  it("renders an icon in each link", () => {
    mockRouter.push("/");
    render(<MobileNavigation />);
    const svgs = screen.getAllByTestId("nav-link-icon");
    expect(svgs).toHaveLength(navLinks.length);
  });

  it("renders regular styling for link to other pages", () => {
    mockRouter.push("/");
    render(<MobileNavigation />);

    const link = screen.getByText("Settings").closest("a");
    if (!!link)
      expect(link.classList.contains(MobileNavigationStyles.current)).toBe(
        false
      );
  });

  it("renders different styling for the current link to the current page", () => {
    mockRouter.push("/");
    render(<MobileNavigation />);

    const link = screen.getByText("Search").closest("a");
    if (!!link)
      expect(link.classList.contains(MobileNavigationStyles.current)).toBe(
        true
      );
  });
});
