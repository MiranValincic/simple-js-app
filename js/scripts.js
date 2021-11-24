// IIFE function
let pokemonRepository = (function () {
  const list = [
    ["Bulbasor", 0.7, ["grass", "poison"]],
    ["Charmander", 0.6, ["monster", "dragon"]],
    ["Squirtle", 0.5, ["monster", "water"]],
    ["Venusaur", 2, ["monster", "grass"]],
    ["Charizard", 1.7, ["monster", "dragon"]],
    ["Blastoise", 1.6, ["monster", "water"]],
  ];

  const pokemonList = [];
  list.forEach(function (pokemon) {
    const name = pokemon[0];
    const height = pokemon[1];
    const types = pokemon[2];
    add(name, height, types);
  });

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

pokemonRepository.add("Pikachu", "0.4", ["Field", "Fairy"]);

var temp = "<ul>";
pokemonRepository.getAll().forEach(function (pokemon) {
  temp += `
  <li>
    ${pokemon.name} <br />
    Height: ${pokemon.height} <br />
    Types: ${pokemon.types}
  </li>`;
});
temp += "</ul>";
document.write(temp);
