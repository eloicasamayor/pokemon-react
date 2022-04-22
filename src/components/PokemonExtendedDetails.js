import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { requestPokemonDetails } from "../store/actions";
import { selectLoading, selectPokemonDetails } from "../store/selectors";
import { useTranslation } from "react-i18next";
import { isEmpty } from "../store/middleware";
export function PokemonExtendedDetails({ name }) {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const pokemonDetails = useSelector(selectPokemonDetails);
  useEffect(() => {
    dispatch(requestPokemonDetails(name));
  }, []);

  return (
    <div className="extended-details-bg">
      {isEmpty(pokemonDetails) ? (
        <p className="no-pokemon-selected-text">No pokemon selected</p>
      ) : (
        <div className="pokemon-details-page">
          {isLoading ? (
            <div className="loading-details">...loading</div>
          ) : (
            <>
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
            </>
          )}
        </div>
      )}
    </div>
  );
}
