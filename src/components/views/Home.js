import { PokemonDetailsPanel } from "../PokemonDetailsPanel";
import { PokemonsPagedList } from "../PokemonsPagedList";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <Link to="/search" className="link-to-search">
        🔍
      </Link>
      <div className="home">
        <PokemonDetailsPanel />
        <PokemonsPagedList />
      </div>
    </>
  );
}
