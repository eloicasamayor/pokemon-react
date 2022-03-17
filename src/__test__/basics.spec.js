import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import "./mockServer";

beforeEach(() => {
  setup();
});

test("click on a pokemon in the list show the stats", async () => {
  const button = await screen.findByText(/charmander/);
  button.click();

  await waitFor(() => expect(document.body).toHaveTextContent("Height: 6"));
  expect(document.body).toHaveTextContent("Weight: 85");
  expect(document.body).toHaveTextContent("Base experience: 62");
});

test("next goes to the next pokemon page", async () => {
  const next = screen.getByText(/next/);
  await waitFor(() => expect(next).toBeEnabled());
  next.click();

  const button = await screen.findByText(/pikachu/);
  // const button2 = await screen.findByTestId
  button.click();

  await waitFor(() => expect(document.body).toHaveTextContent("Height: 4"));
  expect(document.body).toHaveTextContent("Weight: 60");
  expect(document.body).toHaveTextContent("Base experience: 112");
});

function setup() {
  render(<App />);
}
