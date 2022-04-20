import {
  REQUEST_POKEMONS_DETAILS,
  setPokemonDetails,
  setLoading,
} from "./actions";
import { getPokemonDetails } from "./api";

export const pokemonsMiddleware = (store) => (next) => async (action) => {
  next(action);
  if (action.type === REQUEST_POKEMONS_DETAILS) {
    store.dispatch(setLoading(true));
    const details = await getPokemonDetails(action.pokemonName);
    if (isEmpty(details) === true) {
      store.dispatch(setPokemonDetails(null));
    } else {
      store.dispatch(setPokemonDetails(details));
    }
    store.dispatch(setLoading(false));
  }
};

export function isEmpty(obj) {
  if (obj == null) {
    return true;
  }
  return Object.keys(obj).length === 0;
}
