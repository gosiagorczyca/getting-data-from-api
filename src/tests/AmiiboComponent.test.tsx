import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import AmiiboComponent from "../components/AmiiboComponent";

import "@testing-library/jest-dom/extend-expect";

test("renders AmiiboComponent correctly", async () => {
  render(<AmiiboComponent />);

  // Input field
  const input = screen.getByTestId("amiibo-name-input");
  expect(input).toBeTruthy();

  // Loading message
  expect(screen.queryByTestId("loading-message")).toBeFalsy();

  // Error message
  expect(screen.queryByTestId("error-message")).toBeFalsy();

  // Amiibo grid
  expect(screen.queryByTestId("amiibo-grid")).toBeFalsy();
});

test("displays loading message while fetching data", async () => {
  render(<AmiiboComponent />);

  const input = screen.getByTestId("amiibo-name-input");
  userEvent.type(input, "Mario");

  expect(screen.getByTestId("loading-message")).toBeTruthy();
});
