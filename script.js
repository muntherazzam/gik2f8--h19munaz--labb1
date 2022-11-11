'use strict';
/*vad ska vi göra här?*/
const bookList= [
    {
        id: 1,
        author: 'Charles Dickens',
        title: 'Oliver Twist' 
    },
    {
        id: 2,
        author: 'William Shakespear',
        title: 'Hamlet'
    }
    ];
const searchInput = null;

 


    function handelKeyPress(input){
        /*ta emot eller läsa av värdet i input fältet
        Skicka värdet till en annan funktion(Searchbooks)
        searchBooks retunerar en filtrerad lista
        filtrerad listan skickas till renderList*/
        searchBooks(input);
        
    };
function searchBooks(searchTerm){
    /* loopa igenom booklist
    för varje varv i loopen, ta det aktuella elementet(boken)
    Jämför titeln med söktermen
    om Söktermenn finns någonstans i titeln, lägg till elementet i ny lista(filteredList)
    Retunerar filteredList eller anropar renderBookList?  */
const filteredList = [];
    for(let i=0; i < bookList.length; i++) {
        const title=  bookList[i].title.toLowerCase();
        
        if(title.indexOf(searchTerm.toLowerCase()) >= 0){
            
            filteredList.push(bookList[0]);


        }
        renderBookList(filteredList);
    }
console.log(filteredList);
}


function renderBookList(list) {
    /*Element i HTML-listan visas/döljs beroende på listans innehåll.*/
    console.log(list);

}

searchBooks('e');