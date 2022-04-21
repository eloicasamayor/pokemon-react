import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  reducePokemons,
  reducerSelectedPokemon,
  reducerSelectedPokemonDetails,
  reducerLoading,
  reducerSearchResults,
  reducerAllPokemons,
} from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { pokemonsMiddleware } from "./middleware";

const reducer = combineReducers({
  loading: reducerLoading,
  searchResults: reducerSearchResults,
  pokemonDetails: reducerSelectedPokemonDetails,
  pokemonsList: reducePokemons,
  selectedPokemon: reducerSelectedPokemon,
  allPokemons: reducerAllPokemons,
});

export const makeStore = () =>
  createStore(
    reducer,
    composeWithDevTools(applyMiddleware(pokemonsMiddleware))
  );
