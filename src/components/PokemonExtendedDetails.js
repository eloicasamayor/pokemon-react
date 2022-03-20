import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectSelectedPokemon } from "../store/store";
import { selectPokemon } from "../store/actions";
export function PokemonExtendedDetails({ name }) {
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
            <p>Height: {pokemonDetails.height}</p>
            <p>Weight: {pokemonDetails.weight}</p>
            <p>Base experience: {pokemonDetails.base_experience}</p>
          </div>
          <div className="abilities">
            <p>Abilities:</p>
            <ul>
              {pokemonDetails.abilities.map((a) => (
                <li key={a.ability.name}>{a.ability.name}</li>
              ))}
            </ul>
          </div>
          <div className="moves">
            <p>Moves:</p>
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
