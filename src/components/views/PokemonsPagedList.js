import { useState, useEffect, useReducer } from "react";
import { Button } from "../Button";
import { loadPokemons, selectPokemon } from "../../store/actions";
import { PokemonDetailsPanel } from "./PokemonDetailsPanel";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedPokemon, selectPokemonsObj } from "../../store/store";

export function PokemonsPagedList() {
  const pokeApiBaseUrl = "https://pokeapi.co/api/v2/";

  const pokemonsObj = useSelector(selectPokemonsObj);
  const dispatch = useDispatch();

  const [pokemonsListUrl, setPokemonsListUrl] = useState(
    pokeApiBaseUrl + "pokemon/?limit=20"
  );
  const selectedPokemon = useSelector(selectSelectedPokemon);

  const dispatchSelectedPokemon = useDispatch();

  const getPokemonsList = () => {
    fetch(pokemonsListUrl)
      .then((response) => response.json())
      .then((pokemonListObj) => {
        dispatch(loadPokemons(pokemonListObj));
      });
  };
  useEffect(getPokemonsList, [pokemonsListUrl]);
  if (pokemonsObj == undefined) {
    return <>No data</>;
  } else {
    return (
      <>
        <h1>Pokemons List</h1>
        <Button
          disabled={pokemonsObj.previous === null}
          onclick={() => setPokemonsListUrl(pokemonsObj.previous)}
          text="previous"
        />
        <Button
          disabled={pokemonsObj.next === null}
          onclick={() => setPokemonsListUrl(pokemonsObj.next)}
          text="next"
        />
        <ul>
          {pokemonsObj.results.map((pokemon, i) => (
            <li
              onClick={() => dispatchSelectedPokemon(selectPokemon(pokemon))}
              key={pokemon.name}
              className={
                pokemon.name === selectedPokemon ? "selected" : "no-selected"
              }
            >
              {pokemon.name}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
