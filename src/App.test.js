import { render, screen } from "@testing-library/react";
import App from "./App";
import { AboutPage } from "./components/AboutPage";

test("renders learn react link", () => {
  render(<AboutPage />);
  const linkElement = screen.getByText(/omen/i);
  expect(linkElement).toBeInTheDocument();
});
