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
    
] ;

// Write Pokemon names on website and looks for a Pokemon with the high > 1

for (let i=0; i < pokemonList.length; i++) {
    if (pokemonList[i].height > 1){
        document.write(pokemonList[i].name + " " +  '(' + 'height:' + " " + pokemonList[i].height + ')' + " " + '-'  +  " " +  `Wow that's big` + '<br>' );
    } else if (pokemonList[i].height < 1){
        document.write(pokemonList[i].name + " " + '(' + 'height:' + " " +pokemonList[i].height + ')' + '<br>' );
    } 
}



