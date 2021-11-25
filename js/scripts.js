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

  return {
    getAll,
    add,
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

var temp = "<ul>";
pokemonRepository.getAll().forEach(function (pokemon) {
  const height = pokemon.height;
  const isBig = height > 1 ?  " - Wow that's big!" : " ";
  temp += `
  <li>
    ${pokemon.name} <br />
    Height: ${pokemon.height} ${isBig} <br />
    Types: ${pokemon.types}
  </li>`;
});
temp += "</ul>";
document.write(temp);
