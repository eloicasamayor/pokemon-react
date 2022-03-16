import { Outlet } from "react-router-dom";
export function Layout() {
  return (
    <>
      <header>
        <h1>Pokemon app</h1>
      </header>
      <Outlet />
      <footer>
        Developed by Eloi Casamayor | Info collected from the PokéAPI
      </footer>
    </>
  );
}
