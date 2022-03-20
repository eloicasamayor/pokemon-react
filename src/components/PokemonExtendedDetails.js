import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectSelectedPokemon } from "../store/store";
import { selectPokemon } from "../store/actions";
import { useTranslation } from "react-i18next";
export function PokemonExtendedDetails({ name }) {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const selectedPokemon = useSelector(selectSelectedPokemon);
  const getPokemonDetails = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + selectedPokemon)
      .then((response) => response.json())
      .then((json) => {
        setPokemonDetails(json);
      });
  };

  useEffect(() => {
    if (selectedPokemon === "") {
      dispatch(selectPokemon(name));
    }
    getPokemonDetails();
  }, [selectedPokemon]);
  const [pokemonDetails, setPokemonDetails] = useState({});

  return (
    <div className="extended-details-bg">
      {selectedPokemon == null || pokemonDetails.name == null ? (
        <p className="no-pokemon-selected-text">No pokemon selected</p>
      ) : (
        <div className="pokemon-details-page">
          <h2 className="pokemon-name">{selectedPokemon}</h2>
          <div className="pokemon-images ">
            <img
              src={pokemonDetails.sprites.other.home.front_default}
              alt={selectedPokemon + "image"}
            />
          </div>
          <div className="pokemon-main-stats">
            <p>
              {t("pokemonstats.part1")}: {pokemonDetails.height}
            </p>
            <p>
              {t("pokemonstats.part2")}: {pokemonDetails.weight}
            </p>
            <p>
              {t("pokemonstats.part3")}: {pokemonDetails.base_experience}
            </p>
          </div>
          <div className="abilities">
            <p>{t("pokemonstats.part4")}:</p>
            <ul>
              {pokemonDetails.abilities.map((a) => (
                <li key={a.ability.name}>{a.ability.name}</li>
              ))}
            </ul>
          </div>
          <div className="moves">
            <p>{t("pokemonstats.part5")}:</p>
            <ul>
              {pokemonDetails.moves.map((a) => (
                <li key={a.move.name}>{a.move.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
