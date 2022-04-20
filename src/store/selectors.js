export function selectPokemonDetails(state) {
  return state.pokemonDetails;
}

export function selectPokemonsObj(state) {
  return state.pokemonsList;
}

export function selectSelectedPokemon(state) {
  return state.selectedPokemon;
}

export function selectLoading(state) {
  return state.loading;
}

export function selectSearchResults(state) {
  return state.searchResults;
}
