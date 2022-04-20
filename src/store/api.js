export async function getPokemonDetails(pokemonName) {
  let pokemonDetails = {};
  await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
    .then((response) => {
      if (response.ok) {
        console.log("fetch success");
      } else {
        console.log("fetch not successful");
      }
      return response.json();
    })
    .then((json) => {
      pokemonDetails = json;
    })
    .catch((e) =>
      console.log("There was an error geting the pokemon details. ERROR: ", e)
    );
  return pokemonDetails;
}
