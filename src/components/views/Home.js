import { PokemonDetailsPanel } from "../PokemonDetailsPanel";
import { PokemonsPagedList } from "../PokemonsPagedList";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="home">
      <Link to="/search">🔍</Link>
      <PokemonDetailsPanel />
      <PokemonsPagedList />
    </div>
  );
}
