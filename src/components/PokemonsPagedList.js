import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./Button";
import { loadPokemons, selectPokemon } from "../store/actions";

import { selectSelectedPokemon, selectPokemonsObj } from "../store/store";
const POKEAPI_BASEURL = "https://pokeapi.co/api/v2/";

export function PokemonsPagedList() {
  const pokemonsObj = useSelector(selectPokemonsObj);
  const dispatch = useDispatch();

  const [pokemonsListUrl, setPokemonsListUrl] = useState(
    POKEAPI_BASEURL + "pokemon/?limit=20"
  );
  const selectedPokemon = useSelector(selectSelectedPokemon);

  const dispatchSelectedPokemon = useDispatch();

  function getPokemonsList() {
    fetch(pokemonsListUrl)
      .then((response) => response.json())
      .then((pokemonListObj) => {
        dispatch(loadPokemons(pokemonListObj));
      });
  }
  useEffect(getPokemonsList, [pokemonsListUrl]);

  if (pokemonsObj == undefined) {
    return <>No data</>;
  } else {
    return (
      <div className="pokemons-list-panel">
        <div className="pagination-controls">
          <Button
            disabled={!pokemonsObj.previous}
            onclick={() => setPokemonsListUrl(pokemonsObj.previous)}
            text="🡐 previous"
          />
          <Button
            disabled={!pokemonsObj.next}
            onclick={() => setPokemonsListUrl(pokemonsObj.next)}
            text="next 🡒"
          />
        </div>
        <ul className="pokemons-list">
          {pokemonsObj.results.map((pokemon, i) => (
            <li
              onClick={() => dispatchSelectedPokemon(selectPokemon(pokemon))}
              key={pokemon.name}
              className={
                pokemon.name === selectedPokemon
                  ? "selected shadow"
                  : "no-selected"
              }
            >
              {pokemon.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
