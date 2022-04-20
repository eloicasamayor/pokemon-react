import {
  REQUEST_POKEMONS_DETAILS,
  setPokemonDetails,
  setLoading,
  SEARCH_POKEMONS,
  setSearchResults,
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
  if (action.type === SEARCH_POKEMONS) {
    const state = store.getState();
    const pokemonsList = state.pokemonsList.results;
    console.log("state", state);
    console.log("pokemonList", pokemonsList);
    let results = pokemonsList.filter(
      (pokemon) => pokemon.name !== action.query
    );
    console.log("results", results);
    if (results === undefined) results = "";
    store.dispatch(setSearchResults(results));
  }
};

export function isEmpty(obj) {
  if (obj == null) {
    return true;
  }
  return Object.keys(obj).length === 0;
}
