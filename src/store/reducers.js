import {
  LOAD_POKEMONS,
  SET_LOADING,
  SET_POKEMONS_DETAILS,
  SELECT_POKEMON,
} from "./actions";

const initialState = { results: [] };
export function reducePokemons(state = initialState, action) {
  switch (action.type) {
    case LOAD_POKEMONS:
      return action.pokemons;
    default:
      return state;
  }
}
const initialSelectedPokemon = "";
export function reducerSelectedPokemon(state = initialSelectedPokemon, action) {
  switch (action.type) {
    case SELECT_POKEMON:
      return action.pokemon;
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
