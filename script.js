'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
  renderBookList(                                                
 
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

//1. We have a search field and a book list.
//2. When the page loads, we get all the books from the API and store them in the bookList array.
//3. When the user types in the search field, we filter the bookList array and render the filtered list


function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');

  const root = document.getElementById('root');

  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));


  let bookUl = document.querySelector(".book-list");

    if (bookUl){
        bookUl.addEventListener("mouseover", function(e) {
            if (e.target && e.target.matches("li.book-list__item")) {
                let bookId = e.target.value
                let book = bookList.find(book => book.id === bookId)
                existingElement && root.removeChild(existingElement);
                bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', bookDetails(book));
            }
        });

        bookUl.addEventListener("mouseout", function(e) {
            let bookDetail = document.querySelector("#bookDetail");
            if(bookDetail)
                bookDetail.remove();
        });
    }
}

