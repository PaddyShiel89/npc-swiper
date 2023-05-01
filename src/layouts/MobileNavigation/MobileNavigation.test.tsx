import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import MobileNavigation from "./MobileNavigation";
import { navLinks } from "@/data";

describe("Mobile navigation", () => {
  it("renders a link for each nav item", () => {
    render(<MobileNavigation />);
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(navLinks.length);
  });
});
