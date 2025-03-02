import getBookFromLocal from "./getBook.js"
import makeCardBook from "./makeCard.js"

export default function searchBook(key) {
    const books = getBookFromLocal()
    const filterBook = books.filter((k) => k.title.toUpperCase().includes(key.toUpperCase()))
    makeCardBook(filterBook)
}