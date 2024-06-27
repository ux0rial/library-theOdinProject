const myLibrary = [];


function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

// add a prototype method to the book constructor to display the book info
Book.prototype.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
}

// add a new book to the library
const form = document.querySelector('form');
form.addEventListener('submit', addBookToLibrary);
function addBookToLibrary() {
    event.preventDefault();
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    const newBook = new Book(author, title, pages, read);
    myLibrary.push(newBook);
    displayBooks();
    console.log(newBook.info());
}

// create a new card for each book and add it to the .card-wrapper section
function displayBooks() {
    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h2>${book.title}</h2>
            <img src="https://via.placeholder.com/150" alt="Book Cover">
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? 'Yes' : 'No'}</p>
            <button class="remove">Remove</button>
        `;
        document.querySelector('.cardWrapper').appendChild(card);
    });
}

// remove a book from the library and the DOM
const removeButton = document.querySelector('.cardWrapper');
removeButton.addEventListener('click', removeBook);
function removeBook(event) {
    if (event.target.classList.contains('remove')) {
        const card = event.target.parentElement;
        const cardTitle = card.querySelector('h2').textContent;
        const index = myLibrary.findIndex(book => book.title === cardTitle);
        myLibrary.splice(index, 1);
        card.remove();
    }
}