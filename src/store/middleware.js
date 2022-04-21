import {
  REQUEST_POKEMONS_DETAILS,
  REQUEST_ALL_POKEMONS,
  setAllPokemons,
  setPokemonDetails,
  setLoading,
  SEARCH_POKEMONS,
  setSearchResults,
} from "./actions";
import { getAllPokemons, getPokemonDetails } from "./api";

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
    const allPokemons = state.allPokemons.results;
    let results = {};
    if (state.query !== "") {
      results = allPokemons.filter((pokemon) =>
        pokemon.name.includes(action.query)
      );
    }

    if (results === undefined) results = "";
    store.dispatch(setSearchResults(results));
  }
  if (action.type === REQUEST_ALL_POKEMONS) {
    store.dispatch(setLoading(true));
    const allPokemons = await getAllPokemons();
    if (isEmpty(allPokemons) === true) {
      store.dispatch(setAllPokemons(null));
    } else {
      store.dispatch(setAllPokemons(allPokemons));
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
