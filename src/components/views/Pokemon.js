import { PokemonExtendedDetails } from "../PokemonExtendedDetails";
import { Link, useParams } from "react-router-dom";
export function Pokemon() {
  const params = useParams();
  console.log("selectedPokemon (from params) = ", params.name);
  return (
    <>
      <Link className="link-to-home" to={"/"}>
        🡠
      </Link>
      <PokemonExtendedDetails name={params.name} />
    </>
  );
}
