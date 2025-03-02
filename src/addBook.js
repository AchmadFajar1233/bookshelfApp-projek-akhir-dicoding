import getBookFromLocal from "./getBook.js";
import saveBooks from "./saveBook.js";
import makeCardBook from "./makeCard.js";

function addBook(book) {
    const books = getBookFromLocal();
    books.push(book);
    saveBooks(books);
    makeCardBook(books);
  }

export default addBook