const books = [
    {
        title: 'Septimus Heap Book One: Magyk',
        date: 'July 5, 2022',
        description: 'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
        imgAlt: 'Book cover for Septimus Heap 1',
        ages: '10-14',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐'
    },
    {
        title: 'Magnus Chase Book One: Sword of Summer',
        date: 'December 12, 2021',
        description: 'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
        imgSrc: 'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
        imgAlt: 'Book cover for Magnus Chase 1',
        ages: '12-16',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const bookList = document.querySelector('.book-list');

    books.forEach(book => {
        const article = document.createElement('article');
        article.classList.add('book');

        article.innerHTML = `
            <div class="book-meta">
                <p>${book.date}</p>
                <p><strong>Ages:</strong> ${book.ages}</p>
                <p><strong>Genre:</strong> ${book.genre}</p>
                <p><strong>Rating:</strong> ${book.stars}</p>
            </div>
            <div class="book-content">
                <h2>${book.title}</h2>
                <img src="${book.imgSrc}" alt="${book.imgAlt}" loading="lazy">
                <p>${book.description} <a href="#" class="read-more">Read More...</a></p>
            </div>
        `;

        bookList.appendChild(article);
    });
});