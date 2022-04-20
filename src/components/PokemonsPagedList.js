import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./Button";
import { selectSelectedPokemon, selectPokemonsObj } from "../store/selectors";
import { loadPokemons, requestPokemonDetails } from "../store/actions";
import { useTranslation } from "react-i18next";

const POKEAPI_BASEURL = "https://pokeapi.co/api/v2/";

export function PokemonsPagedList() {
  const { t, i18n } = useTranslation();
  const pokemonsObj = useSelector(selectPokemonsObj);
  const dispatch = useDispatch();

  const [pokemonsListUrl, setPokemonsListUrl] = useState(
    POKEAPI_BASEURL + "pokemon/?limit=20"
  );
  const selectedPokemon = useSelector(selectSelectedPokemon);

  function getPokemonsList() {
    fetch(pokemonsListUrl)
      .then((response) => response.json())
      .then((pokemonListObj) => {
        dispatch(loadPokemons(pokemonListObj));
      });
  }
  useEffect(getPokemonsList, [pokemonsListUrl]);

  if (!pokemonsObj) {
    return <>No data</>;
  } else {
    return (
      <div className="pokemons-list-panel">
        <ul className="pokemons-list">
          {pokemonsObj.results.map((pokemon, i) => (
            <li
              onClick={
                () =>
                  dispatch(
                    requestPokemonDetails(pokemon.name)
                  ) /* dispatch(selectPokemon(pokemon.name)) */
              }
              key={i}
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
        <div className="pagination-controls">
          <Button
            disabled={!pokemonsObj.previous}
            onClick={() => setPokemonsListUrl(pokemonsObj.previous)}
            text={"« " + t("buttons.prev")}
            title={t("buttons.prevtitle")}
          />
          <Button
            disabled={!pokemonsObj.next}
            onClick={() => setPokemonsListUrl(pokemonsObj.next)}
            text={t("buttons.next") + " »"}
            title={t("buttons.nexttitle")}
          />
        </div>
      </div>
    );
  }
}
