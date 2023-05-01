import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import MobileNavigation from "./MobileNavigation.tsx";

describe("Mobile navigation", () => {
  it("renders a link", () => {
    render(<MobileNavigation />);
    const link = screen.getByRole("a");
    expect(link).toBeInTheDocument();
  });
});
