import { LOAD_POKEMONS } from "./actions";
import { SELECT_POKEMON } from "./actions";

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
