const simpanBuku = document.getElementById("simpanBuku");
const submitSimpanBuku = document.getElementById("submitSimpanBuku");
let judulBuku = document.getElementById("judulBukuInput");
let sudahDibaca = document.getElementById("sudahDibaca");
const keyLocalStorage = "BOOK__";
const sudahDibacaContainer = document.getElementById("sudahDibacaContainer");
const belumDibacaContainer = document.getElementById("belumDibacaContainer");
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
// add book
function addBook(book) {
  const books = getBookFromLocal();
  books.push(book);
  saveBooks(books);
  makeCardBook(books);
}
// get item
function getBookFromLocal() {
  const books = localStorage.getItem(keyLocalStorage);
  return books ? JSON.parse(books) : [];
}
// save book to local
function saveBooks(book) {
  const stringBook = JSON.stringify(book);
  localStorage.setItem(keyLocalStorage, stringBook);
}
// make book card
function makeCardBook(book) {
  sudahDibacaContainer.innerHTML = "";
  belumDibacaContainer.innerHTML = "";

  book.forEach((item, index) => {
    const innerHtml = `<div class="border d-flex rounded-3 flex-column pt-4 justify-content-between align-items-center" id="buku_${index}">
                            <div class="w-100 px-2 text-center h-50 d-flex justify-content-center align-items-center">
                                <h5 class="text-light">${item.title}</h5>
                            </div>
                            <div class="w-100 h-50 px-2 py-2 d-flex justify-content-center align-items-center gap-4 border-top">
                                <button onClick="isReadBook(${index})" class="btn btn-outline-primary"><i class="${
                                  !item.isRead
                                    ? "fa-solid fa-bookmark"
                                    : "fa-regular fa-bookmark"
                                }"></i></button>
                                <button class="btn btn-outline-danger" onClick="deleteBook(${index})"><i class="fa-regular fa-trash-can"></i></button>
                            </div>
                        </div>`;
    item.isRead
      ? (sudahDibacaContainer.innerHTML += innerHtml)
      : (belumDibacaContainer.innerHTML += innerHtml);
  });
}
// for delete button
function deleteBook(id) {
  const books = getBookFromLocal();
  books.splice(id, 1);
  saveBooks(books);
  makeCardBook(books);
}
// for searching book
function searchBook(key) {
    const books = getBookFromLocal()
    const filterBook = books.filter((k) => k.title.toUpperCase().includes(key.toUpperCase()))
    makeCardBook(filterBook)
}
// for toggle isRead 
function isReadBook (index){
    const books = getBookFromLocal()
    books[index].isRead = !books[index].isRead
    saveBooks(books)
    makeCardBook(books)
}