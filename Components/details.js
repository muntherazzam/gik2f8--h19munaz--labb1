

const bookDetails = (book) => {
    let html = `
    <div id="bookDetail" class="book__details absolute inset-y right-20 rounded-md bg-white/40 p-4 w-1/5 top-20 ml-5 mx-auto 
    flex flex-col text-center text-gray-700 font-semibold">
        <img src="${book.coverImage}" alt="bild saknas för denna bok saknas">
        
        <div class="border"></div>  
        <div class="detail__list">
            <ul class="list">
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