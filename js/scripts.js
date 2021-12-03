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
    button.classList.add("btn", "btn-primary");
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", "#pkModal");
    listItem.appendChild(button);
    listItem.classList.add("group-list-item");
    pokemonList.appendChild(listItem);
    details(button, pokemon);
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

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  function showModal(pokemon) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    modalTitle.empty();
    modalBody.empty();

    let titleElement = document.createElement("h1");
    titleElement.innerText = pokemon.name;

    let imgElement = document.createElement("img");
    imgElement.src = pokemon.imageUrl;

    let contentElement = document.createElement("p");
    contentElement.innerText = "Height: " + pokemon.height;

    modalBody.append(imgElement);
    modalTitle.append(titleElement);
    modalBody.append(contentElement);

    pokemon.types.forEach((item) => {
      let contentElement = document.createElement("p");
      contentElement.innerText = "Type: " + item.type.name;
      modalBody.append(contentElement);
    });
  }

  return {
    getAll,
    add,
    addListItem,
    loadList,
    loadDetails,
  };
})();

// Add new pokemon

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
