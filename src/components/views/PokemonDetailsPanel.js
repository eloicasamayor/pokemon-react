import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card } from "../Card";
import { selectSelectedPokemon } from "../../store/store";
import { MoreInfoLink } from "../MoreInfoLink";

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
    console.log("selectedPokemon=", selectedPokemon);
  }, [selectedPokemon]);
  const [pokemonDetails, setPokemonDetails] = useState({});

  return (
    <div className="pokemon-details-col">
      <h2>Pokemon Details</h2>
      {selectedPokemon == null || pokemonDetails.name == null ? (
        <Card>
          <h2>No pokemon selected</h2>
        </Card>
      ) : (
        <Card>
          <h2>{selectedPokemon}</h2>
          <div className="pokemon-images">
            <img src={pokemonDetails.sprites.front_default} />
            <img src={pokemonDetails.sprites.back_default} />
          </div>
          <p>Height: {pokemonDetails.height}</p>
          <p>Weight: {pokemonDetails.weight}</p>
          <p>Base experience: {pokemonDetails.base_experience}</p>
          <MoreInfoLink to={`/${selectedPokemon}`} text="more info" />
        </Card>
      )}
    </div>
  );
}
