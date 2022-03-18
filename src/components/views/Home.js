import { PokemonDetailsPanel } from "../PokemonDetailsPanel";
import { PokemonsPagedList } from "../PokemonsPagedList";

export function Home() {
  return (
    <div className="home">
      <PokemonDetailsPanel />
      <PokemonsPagedList />
    </div>
  );
}
