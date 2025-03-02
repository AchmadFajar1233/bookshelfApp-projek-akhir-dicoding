const keyLocalStorage = "BOOK__";

function saveBooks(book) {
    const stringBook = JSON.stringify(book);
    localStorage.setItem(keyLocalStorage, stringBook);
  }

export default saveBooks