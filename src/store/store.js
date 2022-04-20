import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  reducePokemons,
  reducerSelectedPokemon,
  reducerSelectedPokemonDetails,
} from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { pokemonsMiddleware } from "./middleware";

const reducer = combineReducers({
  pokemonDetails: reducerSelectedPokemonDetails,
  pokemonsList: reducePokemons,
  selectedPokemon: reducerSelectedPokemon,
});

export const makeStore = () =>
  createStore(
    reducer,
    composeWithDevTools(applyMiddleware(pokemonsMiddleware))
  );
