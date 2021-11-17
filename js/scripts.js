let pokemonList = [
  {
    name: "Bulbasor",
    height : 0.7, 
    types: ['grass', 'poison'] 
  },
  {
    name: "Charmander",
    height: 0.6,
    types: ['monster', 'dragon']
  },
  {
    name: "Squirtle",
    height: 0.5,
    types: ['monster', 'water']
  },
  {
    name: "Venusaur",
    height: 2,
    types: ['monster', 'grass']
  },
  {
    name: "Charizard",
    height: 1.7,
    types: ['monster', 'dragon']
  },
  {
    name: "Blastoise",
    height: 1.6,
    types: ['monster', 'water']
  },
];

// Write Pokemon names on website and looks for a Pokemon with the height > 1

var template = "<ul>";
for (let i=0; i < pokemonList.length; i++) {
    const name = pokemonList[i].name;
    const height = pokemonList[i].height;
    const isBig = height > 1 ? " - Wow that's big" : "";
    template += `
    <li>${name} (height: ${height})${isBig}</li>
    `;
}
template += "</ul>";
document.write(template);




