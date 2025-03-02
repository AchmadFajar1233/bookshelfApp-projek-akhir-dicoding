import getBookFromLocal from "./getBook.js"
import saveBooks from "./saveBook.js"
import makeCardBook from "./makeCard.js"

export default function isReadBook (index){
    const books = getBookFromLocal()
    books[index].isRead = !books[index].isRead
    saveBooks(books)
    makeCardBook(books)
}