let pokemonRepository = (function () {
  const t = [];
  let e = "https://pokeapi.co/api/v2/pokemon/?limit=151";
  function n(e) {
    t.push(e);
  }
  function o(t) {
    let e = t.detailsUrl;
    return fetch(e)
      .then(function (t) {
        return t.json();
      })
      .then(function (e) {
        (t.imageUrl = e.sprites.other["official-artwork"].front_default),
          (t.height = e.height),
          (t.types = e.types);
      })
      .catch(function (t) {
        console.error(t);
      });
  }
  return {
    getAll: function () {
      return t;
    },
    add: n,
    addListItem: function (t) {
      const e = document.querySelector(".pokemon-list");
      let n = document.createElement("li"),
        i = document.createElement("button");
      (i.innerText = t.name),
        i.classList.add("btn", "btn-primary"),
        i.setAttribute("data-toggle", "modal"),
        i.setAttribute("data-target", "#pkModal"),
        n.appendChild(i),
        n.classList.add("group-list-item"),
        e.appendChild(n),
        (function (t, e) {
          t.addEventListener("click", (t) => {
            !(function (t) {
              o(t).then(function () {
                !(function (t) {
                  let e = $(".modal-body"),
                    n = $(".modal-title");
                  n.empty(), e.empty();
                  let o = document.createElement("h1");
                  o.innerText = t.name;
                  let i = document.createElement("img");
                  i.src = t.imageUrl;
                  let r = document.createElement("p");
                  (r.innerText = "Height: " + t.height),
                    e.append(i),
                    n.append(o),
                    e.append(r),
                    t.types.forEach((t) => {
                      let n = document.createElement("p");
                      (n.innerText = "Type: " + t.type.name), e.append(n);
                    });
                })(t);
              });
            })(e);
          });
        })(i, t);
    },
    loadList: function () {
      return fetch(e)
        .then(function (t) {
          return t.json();
        })
        .then(function (t) {
          t.results.forEach(function (t) {
            n({ name: t.name, detailsUrl: t.url });
          });
        })
        .catch(function (t) {
          console.error(t);
        });
    },
    loadDetails: o,
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (t) {
    pokemonRepository.addListItem(t);
  });
});
