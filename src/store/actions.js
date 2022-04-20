export const LOAD_POKEMONS = "LOAD_POKEMONS";
export function loadPokemons(pokemonListObj) {
  return {
    type: LOAD_POKEMONS,
    pokemons: pokemonListObj,
  };
}

export const SELECT_POKEMON = "SELECT_POKEMON";
export function selectPokemon(pokemon) {
  return {
    type: SELECT_POKEMON,
    pokemon: pokemon,
  };
}

export const REQUEST_POKEMONS_DETAILS = "REQUEST_POKEMONS_DETAILS";
export function requestPokemonDetails(pokemonName) {
  console.log("requestSelectedPokemonDetails action de ", pokemonName);
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
    results: results,
  };
}
