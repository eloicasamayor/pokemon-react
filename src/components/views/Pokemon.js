import { PokemonExtendedDetails } from "../PokemonExtendedDetails";
import { Link, useParams } from "react-router-dom";
export function Pokemon() {
  const params = useParams();
  console.log("selectedPokemon (from params) = ", params.name);
  return (
    <>
      <Link
        className="link-to-home"
        to={"/"}
        alt="back to home"
        title="go back to the home page"
      >
        ‹
      </Link>
      <PokemonExtendedDetails name={params.name} />
    </>
  );
}
