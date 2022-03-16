import { createStore, combineReducers } from "redux";
import { reducePokemons, reducerSelectedPokemon } from "./reducers";

const reducer = combineReducers({
  pokemonsList: reducePokemons,
  selectedPokemon: reducerSelectedPokemon,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
