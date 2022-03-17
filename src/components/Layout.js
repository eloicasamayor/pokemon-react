import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
export function Layout() {
  return (
    <>
      <header>
        <img
          className="pokemon-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt="pokemon logo"
        />
      </header>
      <Outlet />
      <Footer />
    </>
  );
}
