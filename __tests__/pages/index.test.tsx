import { render, screen } from "@testing-library/react";
import Home from "@app/pages/index";

// Basic test example
describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
});
