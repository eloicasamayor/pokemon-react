import { PokemonDetailsPanel } from "./PokemonDetailsPanel";
import { PokemonsPagedList } from "./PokemonsPagedList";

export function HomeView() {
  return (
    <>
      <PokemonsPagedList />
      <PokemonDetailsPanel />
    </>
  );
}
