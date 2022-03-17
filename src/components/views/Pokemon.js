import { PokemonDetails } from "./PokemonDetails";
import { Link } from "react-router-dom";
export function Pokemon({ name }) {
  return (
    <>
      <Link className="link-to-home" to={"/"}>
        🡠
      </Link>
      <PokemonDetails />
    </>
  );
}
