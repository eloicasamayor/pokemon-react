import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card";
import { selectPokemonDetails, selectLoading } from "../store/selectors";
import { MoreInfoLink } from "./MoreInfoLink";
import { useTranslation } from "react-i18next";
export function PokemonDetailsPanel() {
  const { t, i18n } = useTranslation();
  const pokemonDetails = useSelector(selectPokemonDetails);
  const loading = useSelector(selectLoading);

  return (
    <div className="pokemon-details-col">
      {loading ? (
        <Card>
          <p className="no-pokemon-selected-text">loading...</p>
          <div className="pokemon-images"></div>
        </Card>
      ) : (
        <>
          {pokemonDetails.name == null ? (
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
              <h2 className="pokemon-name">{pokemonDetails.name}</h2>
              <div className="pokemon-images ">
                <img
                  src={pokemonDetails.sprites.other.home.front_default}
                  alt={pokemonDetails.name + "image"}
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
                to={`/${pokemonDetails.name}`}
                text={t("buttons.moredetails")}
                title={t("buttons.moredetailstitle")}
              />
            </Card>
          )}
        </>
      )}
    </div>
  );
}
