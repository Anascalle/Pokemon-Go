const list = [];
const listFav = [];
window.localStorage.setItem("favoriteList", JSON.stringify(listFav));

const listContainer = document.getElementById("container");
const searchInput = document.getElementById("search-input");
const noResultsMessage = document.getElementById("no-results-message");

function getList() {
  const apiUrl = 'https://raw.githubusercontent.com/Anascalle/Pokemon-Go/main/js/data1.json';

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const results = data;

      for (let i = 0; i < results.length; i++) {
        const data = results[i];
        const types = [];

        if (data.types.length > 0) {
          types.push(data.types[0].type.name);

          if (data.types.length > 1) {
            types.push(data.types[1].type.name);
          }
        }

        const character = new Character(data.id, data.name, data.sprites.other["official-artwork"].front_default, types);
        list.push(character);
      }

      renderList(list);

      // Guardar los datos en el Local Storage
      localStorage.setItem('pokemonData', JSON.stringify(list));
    })
    .catch(error => {
      console.log('Error al obtener los datos:', error);
    });
}

function renderList(characters) {
  listContainer.innerHTML = "";

  for (let i = 0; i < characters.length; i++) {
    const character = characters[i];
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.innerHTML = character.toHtml(i);
    cardElement.addEventListener("click", () => selected(character.id)); // Modificado aquí
    listContainer.appendChild(cardElement);
  }
}

function selected(id) {
  const character = list.find(item => item.id === id);
  if (character) {
    window.location.href = `./detail.html?id=${character.id}`;
  }
}

function searchCharacter() {
  const searchValue = searchInput.value.toLowerCase();
  const filteredList = list.filter(character => character.name.toLowerCase().includes(searchValue));

  if (filteredList.length > 0) {
    renderList(filteredList);
    noResultsMessage.classList.add("hidden");
  } else {
    listContainer.innerHTML = "";
    noResultsMessage.classList.remove("hidden");
  }
}

searchInput.addEventListener("input", searchCharacter);

getList();
