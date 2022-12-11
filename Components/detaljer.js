
//hantera rutan med hjälp av tailwindstyle
const bookdetaljer = (book) => {
    
    let html = `
    <div id="bookDetail" class="book__details  fixed  right-5 rounded-full bg-white/20 p-16  top-20 m-20 
    flex text-left text-black-500 space-y-2 space-x-2">
    <div id="bookimg" class="book_img rounded-full transition-transform top-20 right-top w-70 h-70 m-2 top-25">
        <img class="book_img rounded-full transition-transform top-20 right-top w-60 h-60 m-2 top-25" src="${book.coverImage}" alt="ingen bild hittades">
        </div> 
         
        <div class="detail__list">
            <ul class="list ">
                <li>Title: ${book.title}</li>
                <li>Author: ${book.author}</li>
                <li>Pages: ${book.pages}</li>
                <li>Release date: ${book.releaseDate}</li>
            </ul>
        </div> 
    </div>
    `;

    return html;
};
