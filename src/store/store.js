import { createStore, combineReducers, applyMiddleware } from "redux";
import {
  reducePokemonsList,
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
  pokemonsList: reducePokemonsList,
  allPokemons: reducerAllPokemons,
});

export const makeStore = () =>
  createStore(
    reducer,
    composeWithDevTools(applyMiddleware(pokemonsMiddleware))
  );
