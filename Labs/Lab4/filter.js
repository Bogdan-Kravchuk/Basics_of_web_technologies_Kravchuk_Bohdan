const searchInput = document.querySelector('#search');
const resultsCount = document.querySelector('#results-count');
const cardsContainer = document.querySelector('#cards');
const cards = document.querySelectorAll('.card');
const noResultsBlock = document.querySelector('#no-results');

const totalCards = cards.length;

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function filterCards() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  cards.forEach(card => {
    const originalTitle = card.getAttribute('data-title');
    const description = card.querySelector('p').textContent;
    const titleElement = card.querySelector('h3');

    const matchesTitle = originalTitle.toLowerCase().includes(query);
    const matchesDescription = description.toLowerCase().includes(query);

    if (query === '') {
      titleElement.innerHTML = originalTitle;
      card.classList.remove('hidden');
      visibleCount++;
    } else if (matchesTitle || matchesDescription) {
      card.classList.remove('hidden');
      visibleCount++;

      if (matchesTitle) {
        const regex = new RegExp(`(${query})`, 'gi');
        titleElement.innerHTML = originalTitle.replace(regex, '<mark>$1</mark>');
      } else {
        titleElement.innerHTML = originalTitle;
      }
    } else {
      card.classList.add('hidden');
      titleElement.innerHTML = originalTitle;
    }
  });

  resultsCount.textContent = `Знайдено: ${visibleCount} з ${totalCards}`;
  noResultsBlock.classList.toggle('hidden', visibleCount > 0);
}

searchInput.addEventListener('input', debounce(filterCards, 200));