import {
  requestPokemonDetails,
  REQUEST_POKEMONS_DETAILS,
  setPokemonDetails,
} from "./actions";
import { getPokemonDetails } from "./api";

export const pokemonsMiddleware = (store) => (next) => async (action) => {
  next(action);
  if (action.type === REQUEST_POKEMONS_DETAILS) {
    console.log("requesting selected pokemon...");
    //store.dispatch(setLoading(true));
    const details = await getPokemonDetails(action.pokemonName);
    if (isEmpty(details) === true) {
      store.dispatch(setPokemonDetails(null));
    } else {
      store.dispatch(setPokemonDetails(details));
    }
    //store.dispatch(setSearchParams(action.term, action.limit, action.offset));
    //store.dispatch(setLoading(false));
  }
};

export function isEmpty(obj) {
  if (obj == null) {
    return true;
  }
  return Object.keys(obj).length === 0;
}
