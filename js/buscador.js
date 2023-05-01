const searchInput = document.getElementById('search-input');
const cards = document.querySelectorAll('.card');
const noResultsMessage = document.getElementById('no-results-message');

searchInput.addEventListener('input', () => {
  const searchText = searchInput.value.toLowerCase();
  let hasResults = false;
  
  cards.forEach(card => {
    const name = card.querySelector('#nombre').textContent.toLowerCase();
    
    if (name.includes(searchText)) {
      card.classList.remove('hidden');
      hasResults = true;
    } else {
      card.classList.add('hidden');
    }
  });

  if (hasResults) {
    noResultsMessage.classList.add('hidden');
  } else {
    noResultsMessage.classList.remove('hidden');
  }
});
