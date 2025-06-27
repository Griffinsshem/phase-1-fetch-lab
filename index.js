function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => {
      renderBooks(data);
      return data;
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  main.innerHTML = '';

  books.forEach(book => {
    const p = document.createElement('p');
    p.textContent = book.name;
    main.appendChild(p);
  });
}



document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});
