//hämtar böcker från api-t

const BookListItem = (book) => {
  let html = `<li
                class="book-list__item mb-2 mx-2 last:mb-0 p-2 decoration-slate-100 last:border-b-0 border-b-2 border-rose-600  cursor-help "value="${book.id}">
                ${book.author} - ${book.title}    
              </li>`;
  return html;
};
