// IIFE function
let pokemonRepository = (function () {
  const pokemonList = [];

  function getAll() {
    return pokemonList;
  }

  function add(name, height, types) {
    pokemonList.push({
      name,
      height,
      types,
    });
  }

  function addListItem(pokemon) {
    const pokemoni = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("btn");
    listItem.appendChild(button);
    pokemoni.appendChild(listItem);
    details(button, pokemon);
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  function details(button, pokemon) {
    button.addEventListener("click", e => {
      showDetails(pokemon);
    });
  }

  return {
    getAll,
    add,
    addListItem,
  };
})();

// Add new pokemon

const list = [
  ["Bulbasor", 0.7, ["grass", "poison"]],
  ["Charmander", 0.6, ["monster", "dragon"]],
  ["Squirtle", 0.5, ["monster", "water"]],
  ["Venusaur", 2, ["monster", "grass"]],
  ["Charizard", 1.7, ["monster", "dragon"]],
  ["Blastoise", 1.6, ["monster", "water"]],
  ["Pikachu", 0.4, ["Field", "Fairy"]],
];

list.forEach(function (pokemon) {
  const name = pokemon[0];
  const height = pokemon[1];
  const types = pokemon[2];
  pokemonRepository.add(name, height, types);
});

pokemonRepository.getAll().forEach(pokemonRepository.addListItem);
