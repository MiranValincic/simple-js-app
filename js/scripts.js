// IIFE function
let pokemonRepository = (function () {
  const pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20";

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function addListItem(pokemon) {
    const pokemonList = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("btn");
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    details(button, pokemon);
  }

  function showDetails(item) {
    loadDetails(item).then(function () {
      console.log(item);
    });
  }

  function details(button, pokemon) {
    button.addEventListener("click", (e) => {
      showDetails(pokemon);
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  return {
    getAll,
    add,
    addListItem,
    loadList,
    loadDetails,
    showDetails,
  };
})();

// Add new pokemon

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(pokemonRepository.addListItem);
});
