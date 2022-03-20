import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card";
import { selectSelectedPokemon } from "../store/store";
import { MoreInfoLink } from "./MoreInfoLink";
import { useTranslation } from "react-i18next";
export function PokemonDetailsPanel() {
  const { t, i18n } = useTranslation();
  const selectedPokemon = useSelector(selectSelectedPokemon);
  const getPokemonDetails = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + selectedPokemon)
      .then((response) => response.json())
      .then((json) => {
        setPokemonDetails(json);
      });
  };

  useEffect(() => {
    getPokemonDetails();
  }, [selectedPokemon]);
  const [pokemonDetails, setPokemonDetails] = useState({});

  return (
    <div className="pokemon-details-col">
      {selectedPokemon == null || pokemonDetails.name == null ? (
        <Card>
          <p className="no-pokemon-selected-text">
            {t("buttons.selectpokemon")}
          </p>
          <img
            className="pokeball"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
            alt="pokeball"
          />
        </Card>
      ) : (
        <Card>
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

          <MoreInfoLink
            data-testid="more-details-btn"
            to={`/${selectedPokemon}`}
            text={t("buttons.moredetails")}
            title={t("buttons.moredetailstitle")}
          />
        </Card>
      )}
    </div>
  );
}
