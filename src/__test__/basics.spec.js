import { render, screen, waitFor } from "@testing-library/react";
import App from "../App";
import "./mockServer";

test("Click on a pokemon in the list and show the stats", async () => {
  delete window.location;
  window.location = await new URL("http://localhost:3000/pokemon-react");
  render(<App />);

  const button = await screen.findByText(/charmander/);
  button.click();

  await waitFor(() => expect(document.body).toHaveTextContent(/6/));
  expect(document.body).toHaveTextContent(/85/);
  expect(document.body).toHaveTextContent(/62/);
});

test("Clicking the next button goes to the next pokemons page", async () => {
  delete window.location;
  window.location = await new URL("http://localhost:3000/pokemon-react");
  render(<App />);

  const next = screen.getByText(/next/i);
  await waitFor(() => expect(next).toBeEnabled());
  next.click();

  const button = await screen.findByText(/pikachu/);
  button.click();

  await waitFor(() => expect(document.body).toHaveTextContent("4"));
  expect(document.body).toHaveTextContent("60");
  expect(document.body).toHaveTextContent("112");
});

test("Go to charmander url and see the extended details", async () => {
  window.location = await new URL(
    "http://localhost:3000/pokemon-react/charmander"
  );
  render(<App />);

  await waitFor(() => expect(document.body).toHaveTextContent("solar-power"));
  expect(document.body).toHaveTextContent("mega-punch");
  expect(document.body).toHaveTextContent("fire-punch");
});
