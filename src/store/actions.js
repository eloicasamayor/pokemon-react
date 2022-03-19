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
