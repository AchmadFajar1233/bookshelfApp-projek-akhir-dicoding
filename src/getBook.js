const keyLocalStorage = "BOOK__";

function getBookFromLocal() {
    const books = localStorage.getItem(keyLocalStorage);
    return books ? JSON.parse(books) : [];
  }

export default getBookFromLocal