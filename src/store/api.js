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

export async function getPokemonsList(pagedListUrl) {
  console.log("getPokemonList...()" + pagedListUrl);
  let pokemonsList = {};
  await fetch(pagedListUrl)
    .then((response) => {
      console.log("response.ok");
      if (response.ok) {
        console.log("fetch success");
      } else {
        console.log("fetch not successful");
      }
      return response.json();
    })
    .then((json) => {
      pokemonsList = json;
    })
    .catch((e) =>
      console.log("There was an error geting the 20 pokemons list. ERROR: ", e)
    );
  console.log(pokemonsList);
  return pokemonsList;
}

export async function getAllPokemons() {
  let allPokemons = {};
  await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then((response) => {
      if (response.ok) {
        console.log("fetch success");
      } else {
        console.log("fetch not successful");
      }
      return response.json();
    })
    .then((json) => {
      allPokemons = json;
    })
    .catch((e) =>
      console.log("There was an error geting all 1126 pokemons. ERROR: ", e)
    );
  console.log(allPokemons);
  return allPokemons;
}
