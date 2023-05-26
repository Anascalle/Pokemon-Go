const starIcon = document.querySelector('.star-icon');

starIcon.addEventListener('click', toggleClicked)

function toggleClicked() {
  starIcon.classList.toggle('clicked');
  const listFav = JSON.parse(window.localStorage.getItem("favoritos"))
  listFav.push(actualPokemon)
  console.log(listFav)
  window.localStorage.setItem("favoritos", JSON.stringify(listFav))
}


