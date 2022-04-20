import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  reducePokemons,
  reducerSelectedPokemon,
  reducerSelectedPokemonDetails,
  reducerLoading,
} from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { pokemonsMiddleware } from "./middleware";

const reducer = combineReducers({
  loading: reducerLoading,
  pokemonDetails: reducerSelectedPokemonDetails,
  pokemonsList: reducePokemons,
  selectedPokemon: reducerSelectedPokemon,
});

export const makeStore = () =>
  createStore(
    reducer,
    composeWithDevTools(applyMiddleware(pokemonsMiddleware))
  );
