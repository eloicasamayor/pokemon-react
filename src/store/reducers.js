import {
  SET_LOADING,
  SET_POKEMONS_DETAILS,
  SELECT_POKEMON,
  SET_SEARCH_RESULTS,
  SET_ALL_POKEMONS,
  SET_POKEMONS_LIST,
} from "./actions";

const initialState = { results: [] };
export function reducePokemonsList(state = initialState, action) {
  switch (action.type) {
    case SET_POKEMONS_LIST:
      return action.list;
    default:
      return state;
  }
}

const initialSelectedPokemonDetails = "";
export function reducerSelectedPokemonDetails(
  state = initialSelectedPokemonDetails,
  action
) {
  switch (action.type) {
    case SET_POKEMONS_DETAILS:
      return action.pokemonDetails;
    default:
      return state;
  }
}

export function reducerLoading(state = false, action) {
  switch (action.type) {
    case SET_LOADING:
      return action.loading;
    default:
      return state;
  }
}

export function reducerSearchResults(state = {}, action) {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return action.searchResults;
    default:
      return state;
  }
}

export function reducerAllPokemons(state = {}, action) {
  switch (action.type) {
    case SET_ALL_POKEMONS:
      return action.allPokemons;
    default:
      return state;
  }
}
