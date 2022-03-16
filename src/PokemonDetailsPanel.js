import { useState, useEffect } from "react";

export function PokemonDetailsPanel({ name }) {
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + name)
      .then((response) => response.json())
      .then((json) => {
        setPokemonDetails(json);
      })
      .then(console.log);
  }, [name]);
  const [pokemonDetails, setPokemonDetails] = useState({});

  return (
    <div>
      <h2>Pokemon Details Panel</h2>
      <h3>{name == null ? "No pokemon selected" : name}</h3>
      <div>{JSON.stringify(pokemonDetails)}</div>
    </div>
  );
}
