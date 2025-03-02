import getBookFromLocal from "./getBook.js";
import saveBooks from "./saveBook.js";
import makeCardBook from "./makeCard.js";

export default function deleteBook(id) {
    const books = getBookFromLocal();
    books.splice(id, 1);
    saveBooks(books);
    makeCardBook(books);
}