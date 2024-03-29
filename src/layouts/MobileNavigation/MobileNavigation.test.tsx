import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import mockRouter from "next-router-mock";

import MobileNavigation, { MobileNavigationStyles } from "./";
import { navLinks } from "@/data";

jest.mock("next/router", () => require("next-router-mock"));

const currentPageClass = MobileNavigationStyles.currentPage;

beforeEach(() => {
  mockRouter.push("/");
  render(<MobileNavigation />);
});

describe("Mobile navigation", () => {
  it("renders a link for each nav item", () => {
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(navLinks.length);
  });

  it("renders an icon in each link", () => {
    const svgs = screen.getAllByTestId("nav-link-icon");
    expect(svgs).toHaveLength(navLinks.length);
  });

  it("renders regular styling for link to other pages", () => {
    const link = screen.getByText("Settings").closest("a");
    if (!!link) expect(link.classList.contains(currentPageClass)).toBe(false);
  });

  it("renders different styling for the current link to the current page", () => {
    const link = screen.getByText("Search").closest("a");
    if (!!link) expect(link.classList.contains(currentPageClass)).toBe(true);
  });
});
