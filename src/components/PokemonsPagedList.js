import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./Button";
import { selectPokemonDetails, selectPokemonsList } from "../store/selectors";
import {
  loadPokemons,
  requestPokemonDetails,
  requestPokemonsList,
} from "../store/actions";
import { useTranslation } from "react-i18next";
import { isEmpty } from "../store/middleware";

const POKEAPI_BASEURL = "https://pokeapi.co/api/v2/";

export function PokemonsPagedList() {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const pokemonsObj = useSelector(selectPokemonsList);
  const pokemonDetails = useSelector(selectPokemonDetails);

  useEffect(() => dispatch(requestPokemonsList()), []);

  if (!pokemonsObj || isEmpty(pokemonsObj)) {
    return <>No data</>;
  } else {
    return (
      <div className="pokemons-list-panel">
        <ul className="pokemons-list">
          {pokemonsObj.results.map((pokemon, i) => (
            <li
              onClick={() => dispatch(requestPokemonDetails(pokemon.name))}
              key={i}
              className={
                pokemon.name.toLowerCase() === pokemonDetails.name
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
            onClick={() => dispatch(requestPokemonsList(pokemonsObj.previous))}
            text={"« " + t("buttons.prev")}
            title={t("buttons.prevtitle")}
          />
          <Button
            disabled={!pokemonsObj.next}
            onClick={() => dispatch(requestPokemonsList(pokemonsObj.next))}
            text={t("buttons.next") + " »"}
            title={t("buttons.nexttitle")}
          />
        </div>
      </div>
    );
  }
}
