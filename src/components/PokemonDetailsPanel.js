import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card } from "./Card";
import { selectSelectedPokemon } from "../store/store";
import { MoreInfoLink } from "./MoreInfoLink";

export function PokemonDetailsPanel() {
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
            Select a pokemon in the list...
            <br /> to see the details
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
            <p>Height: {pokemonDetails.height}</p>
            <p>Weight: {pokemonDetails.weight}</p>
            <p>Base experience: {pokemonDetails.base_experience}</p>
          </div>

          <MoreInfoLink
            data-testid="more-details-btn"
            to={`/${selectedPokemon}`}
            text="MORE DETAILS"
            title="See more details about the selected pokemon"
          />
        </Card>
      )}
    </div>
  );
}
