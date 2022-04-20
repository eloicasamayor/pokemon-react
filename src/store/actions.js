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
