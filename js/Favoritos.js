function searchCharacter() {
  const inputValue = searchInput.value.toLowerCase();
  const filteredList = list.filter(character => character.name.toLowerCase().includes(inputValue));

  if (filteredList.length > 0) {
    renderList(filteredList);
    noResultsMessage.classList.add("hidden");
  } else {
    listContainer.innerHTML = "";
    noResultsMessage.classList.remove("hidden");
  }
}

searchInput.addEventListener("input", searchCharacter);

function displayFavoritePokemons() {
  const favoriteList = localStorage.getItem('favoriteList');
  
  if (favoriteList === null) {
    console.log('No hay pokémones favoritos almacenados.');
    return;
  }
  
  const parsedList = JSON.parse(favoriteList);
  
  searchCharacter(); // Aplica la función de búsqueda inicialmente
  
  function renderList(pokemons) {
    // Limpia el contenido previo del contenedor
    listContainer.innerHTML = '';
    
    pokemons.forEach((pokemon, index) => {
      // Crea un elemento HTML para cada pokémon
      const pokemonElement = document.createElement('div');
      pokemonElement.textContent = pokemon.name;
      
      // Agrega el pokémon al contenedor
      listContainer.appendChild(pokemonElement);
      
      // Asocia el evento de clic al pokémon para redirigir a la página de detalles
      pokemonElement.addEventListener('click', () => {
        selected(index);
      });
    });
  }
  
  function selected(pos) {
    const character = parsedList[pos];
    window.location.href = `./detail.html?id=${character.id}`;
  }
}

// Llama a la función para mostrar los pokémones favoritos en pantalla al cargar la página
displayFavoritePokemons();

getList();
