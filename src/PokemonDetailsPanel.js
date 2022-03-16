import { useState, useEffect } from "react";

export function PokemonDetailsPanel({ name }) {
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + name)
      .then((response) => response.json())
      .then((json) => {
        setPokemonDetails(json);
      });
  }, [name]);
  const [pokemonDetails, setPokemonDetails] = useState({});

  return (
    <div>
      <h2>Pokemon Details Panel</h2>
      {pokemonDetails.name == null ? (
        <h2>No pokemon selected</h2>
      ) : (
        <>
          <h3>{pokemonDetails.name}</h3>
          <p>Height: {pokemonDetails.height}</p>
          <p>Weight: {pokemonDetails.weight}</p>
          <p>Base experience: {pokemonDetails.base_experience}</p>
          <img src={pokemonDetails.sprites.front_default} />
          <img src={pokemonDetails.sprites.back_default} />
        </>
      )}
    </div>
  );
}
