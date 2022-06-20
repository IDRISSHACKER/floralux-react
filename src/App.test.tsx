/* eslint-disable import/extensions */
import React from "react";
import { render, screen } from "@testing-library/react";
// eslint-disable-next-line import/no-unresolved
import App from "./App";

// eslint-disable-next-line no-undef
test("renders floralux text", () => {
  render(<App />);
  const linkElement = screen.getByText(/floralux/i);
  // eslint-disable-next-line no-undef
  expect(linkElement).toBeInTheDocument();
});
