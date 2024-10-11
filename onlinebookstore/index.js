// script.js
const books = [
    { id: 1, title: 'Book One', author: 'Author One' },
    { id: 2, title: 'Book Two', author: 'Author Two' },
    { id: 3, title: 'Book Three', author: 'Author Three' },
];

const bookList = document.getElementById('book-list');

books.forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';
    bookDiv.innerHTML = `
        <h2>${book.title}</h2>
        <p>${book.author}</p>
    `;
    bookList.appendChild(bookDiv);
});
