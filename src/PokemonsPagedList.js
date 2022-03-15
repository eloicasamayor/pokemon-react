import { useState, useEffect } from "react";
export function PokemonsPagedList() {
  const [pokemonsObj, setPokemonsObj] = useState({});
  const [pokemonsList, setPokemonsList] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=20");
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setPokemonsObj(json);
        setPokemonsList(json.results);
      });
  }, [url]);
  return (
    <>
      <h1>Pokemons List</h1>

      <button
        disabled={pokemonsObj.previous === null}
        onClick={() => setUrl(pokemonsObj.previous)}
      >
        previous
      </button>
      <button
        disabled={pokemonsObj.next === null}
        onClick={() => setUrl(pokemonsObj.next)}
      >
        next
      </button>

      <ul>
        {pokemonsList.map((pokemon, i) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
}
