import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card } from "../Card";
import { selectSelectedPokemon } from "../../store/store";

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
    <div>
      <h2>Pokemon Details</h2>
      {selectedPokemon == null || pokemonDetails.name == null ? (
        <h2>No pokemon selected</h2>
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
        </Card>
      )}
    </div>
  );
}
