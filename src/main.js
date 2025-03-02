import searchBook from "./searchBook.js";
import addBook from "./addBook.js";
import getBookFromLocal from "./getBook.js";
import makeCardBook from "./makeCard.js";


const simpanBuku = document.getElementById("simpanBuku");
let judulBuku = document.getElementById("judulBukuInput");
let sudahDibaca = document.getElementById("sudahDibaca");
const search = document.getElementById('searchBook')
let count = 0;

simpanBuku.addEventListener("submit", (e) => {
  e.preventDefault();
  count += 1;
  const myObj = {
    title: judulBuku.value,
    isRead: sudahDibaca.checked,
    id: count,
  };
  addBook(myObj);

  judulBuku.value = "";
  sudahDibaca.checked = false;
});

let value = ''
search.addEventListener('keyup', () =>{
    searchBook(search.value)
})

// render card book when browser loaded
window.addEventListener("DOMContentLoaded", () => {
  const books = getBookFromLocal();
  books
    ? makeCardBook(books)
    : alert(
        "anda belum menyimpan buku apapun atau browser anda tidak mendukung"
      );
});

