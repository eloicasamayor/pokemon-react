export const LOAD_POKEMONS = "LOAD_POKEMONS";
export function loadPokemons(pokemonListObj) {
  return {
    type: LOAD_POKEMONS,
    pokemons: pokemonListObj,
  };
}

export const REQUEST_POKEMONS_LIST = "REQUEST_POKEMONS_LIST";
export function requestPokemonsList(url) {
  return {
    type: REQUEST_POKEMONS_LIST,
    url: url,
  };
}

export const SET_POKEMONS_LIST = "SET_POKEMONS_LIST";
export function setPokemonsList(list) {
  return {
    type: SET_POKEMONS_LIST,
    list: list,
  };
}

export const REQUEST_POKEMONS_DETAILS = "REQUEST_POKEMONS_DETAILS";
export function requestPokemonDetails(pokemonName) {
  return {
    type: REQUEST_POKEMONS_DETAILS,
    pokemonName: pokemonName,
  };
}

export const SET_POKEMONS_DETAILS = "SET_POKEMONS_DETAILS";
export function setPokemonDetails(pokemonDetails) {
  return {
    type: SET_POKEMONS_DETAILS,
    pokemonDetails: pokemonDetails,
  };
}

export const SET_LOADING = "SET_LOADING";
export function setLoading(loading) {
  return {
    type: SET_LOADING,
    loading: loading,
  };
}

export const SEARCH_POKEMONS = "SEARCH_POKEMONS";
export function searchPokemons(query) {
  console.log("query:", query);
  return {
    type: SEARCH_POKEMONS,
    query: query,
  };
}

export const SET_SEARCH_RESULTS = "SET_SEARCH_RESULTS";
export function setSearchResults(results) {
  return {
    type: SET_SEARCH_RESULTS,
    searchResults: results,
  };
}

export const REQUEST_ALL_POKEMONS = "REQUEST_ALL_POKEMONS";
export function requestAllPokemons() {
  return {
    type: REQUEST_ALL_POKEMONS,
    all: true,
  };
}
export const SET_ALL_POKEMONS = "SET_ALL_POKEMONS";
export function setAllPokemons(allPokemons) {
  return {
    type: SET_ALL_POKEMONS,
    allPokemons: allPokemons,
  };
}
