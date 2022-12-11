'use strict';
//här skapade vi booklistan, skickade med parmeter e

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (x) =>
  renderBookList(                                                
 
    bookList.filter(({ title, author }) => {
      const searchTerm = x.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);


//hämtar informationen om boken från api-t
async function renderBookList(bookList) {
  const existingElement = document.querySelector('.book-list');

  const root = document.getElementById('root');

  existingElement && root.removeChild(existingElement);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));


  let booken = document.querySelector(".book-list");

    if (booken){
        booken.addEventListener("mouseover", function(x) {
            if (x.target && x.target.matches("li.book-list__item")) {
                let bookId = x.target.value
                let book = bookList.find(book => book.id === bookId)
                existingElement && root.removeChild(existingElement);
                bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', bookdetaljer(book));
            }
        });
        //ta bort detaljer när musen hoovrar bort
        booken.addEventListener("mouseout", function(e) {
            let bookDetail = document.querySelector("#bookDetail");
            if(bookDetail)
                bookDetail.remove();
        });
    }
}

//

async function renderDetails(e) {
  let bookId = e.target.id.split('book_')[1];
  let item = await getItem(bookId);
  
  if (!document.getElementById('book_details')) {
      document.body.insertAdjacentHTML('beforeend',RenderDetailsHTML(item));
  } else {
      removeDetails()
      document.body.insertAdjacentHTML('afterbegin',RenderDetailsHTML(item));
  }
  updatePos();
}
//uppdatera postion funktion
function updatePos() {
  let pos = document.querySelector('.book-details').getBoundingClientRect();

  if (pos.right > window.innerWidth) {
    document.querySelector('.book-details').style.left = (window.innerWidth - pos.width) + 'px';
  } else {
    document.querySelector('.book-details').style('right', 0); // om det är utanför fönstret, flytta tillbaka den till höger sida av skärmen  
  }

  if (pos.bottom > window.innerHeight) {
    document.querySelector('.book-details').style.top = (window.innerHeight - pos.height) + 'px';
  } else {
    document.querySelector('.book-details').style('top', 0); // om det är utanför fönstret, flytta tillbaka den till toppen av skärmen  
  }    
}

//ta bort detaljer när musen hoovrar bort
function removeDetails() {
  const book_details_list = document.querySelectorAll('.book-details');

  book_details_list.forEach(item => {
  item.remove();
  });
}








//för att ta bort cookies så blir sidan snabbare att laddas
function clearCookies() {
  document.cookie = "";
}
clearCookies();