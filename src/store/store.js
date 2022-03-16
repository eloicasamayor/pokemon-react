import { createStore, combineReducers } from "redux";
import { reducePokemons, reducerSelectedPokemon } from "./reducers";

export function selectPokemonsObj(state) {
  return state.pokemonsList;
}
export function selectSelectedPokemon(state) {
  return state.selectedPokemon;
}

const reducer = combineReducers({
  pokemonsList: reducePokemons,
  selectedPokemon: reducerSelectedPokemon,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
