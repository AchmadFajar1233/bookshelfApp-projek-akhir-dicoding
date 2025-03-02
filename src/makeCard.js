import deleteBook from "./deleteBtn.js";
import isReadBook from "./isRead.js";

const sudahDibacaContainer = document.getElementById("sudahDibacaContainer");
const belumDibacaContainer = document.getElementById("belumDibacaContainer");

export default function makeCardBook(book) {
    sudahDibacaContainer.innerHTML = "";
    belumDibacaContainer.innerHTML = "";

    book.forEach((item, index) => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("border", "d-flex", "rounded-3", "flex-column", "pt-4", "justify-content-between", "align-items-center");
        bookElement.id = `buku_${index}`;

        bookElement.innerHTML = `
            <div class="w-100 px-2 text-center h-50 d-flex justify-content-center align-items-center">
                <h5 class="text-light">${item.title}</h5>
            </div>
            <div class="w-100 h-50 px-2 py-2 d-flex justify-content-center align-items-center gap-4 border-top">
                <button class="btn btn-outline-primary isReadBtn">
                    <i class="${!item.isRead ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"}"></i>
                </button>
                <button class="btn btn-outline-danger deleteBtn">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        `;

        bookElement.querySelector(".deleteBtn").addEventListener("click", () => deleteBook(index));

        bookElement.querySelector(".isReadBtn").addEventListener("click", () => isReadBook(index));

        item.isRead
            ? sudahDibacaContainer.appendChild(bookElement)
            : belumDibacaContainer.appendChild(bookElement);
    });
}
