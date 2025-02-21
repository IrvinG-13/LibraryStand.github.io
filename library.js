const library = []
const submit = document.getElementById('submit')
function Book(title,author,pages){
    this.title = title
    this.author = author
    this.pages = pages
}

Book.prototype.seeBook = function(){
    return`Title: ${this.title}\n Author: ${this.author}\n Pages: ${this.pages}}`
}

function addBookToLibrary(event) {
    event.preventDefault()
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value

    const newBook = new Book(title,author,pages)
    library.push(newBook)

    showBook(newBook)

    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('pages').value = ''
   
}


function showBook(newBook){

    const libraryStand = document.getElementById('library')
    let book = document.createElement('div')
    book.classList.add('book')

    book.innerHTML = `
            <p>${newBook.title}</p>
            <p>${newBook.author}</p>
            <p>${newBook.pages}</p>
            <input type="checkbox" ${newBook.read === "Read" ? "checked" : ""}>
            <button class="delete-book">Delete</button>
        `;
    libraryStand.appendChild(book)

}
//delete all Books
const deleteAll = document.getElementById('delete-books')
const libraryStand = document.getElementById('library')

deleteAll.addEventListener('click', ()=>{
    libraryStand.innerHTML =''
})
//Delete One Book
document.addEventListener('click',(event)=>{
    if(event.target.classList.contains('delete-book')){
        event.target.parentNode.remove()
    }
})
console.log(library)


submit.addEventListener('click', addBookToLibrary)