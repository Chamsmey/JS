//  FUNCTIONS -------------------------------------------------------------
function deleteBook(event) {
    // 1- Check the event if raised on the button delete 
    if (event.target.className === "delete") {
        //  2  if yes, get the parent and remove it from the  bookList
        event.target.parentElement.remove();
    }

}

function addBook(event) {
    event.preventDefault();

    // 1- Get the book name from the input field

    // 2- Create a new spam bookName for the book name, class name = name


    // 3- Create a new spam deleteBtn for the button delete, class name = delete

    // 4- Create a new li

    // 5- Add bookName and deleteBtn to li and li to the  bookList UL

}
let nameSearced = "";

function searchBook(event) {
    if (event.key === "Enter") {
        console.log(nameSearced);
    }
    nameSearced += event.key;
    console.log(event.key);
    // 1- Get the search text

    // 2- Loop on all LI

    // Update the style of the LI (visible or hidden)

}

function findBook() {
    console.log("searching");
}

function addBooks() {
    if (inputName.value !== "") {

        let li = document.createElement("li");
        let title = document.createElement("span");
        let deletes = document.createElement("span");

        title.classList.add("name");
        deletes.classList.add("delete");

        title.textContent = inputName.value;
        deletes.textContent = "delete";

        li.appendChild(title);
        li.appendChild(deletes);
        ul.appendChild(li);
    }
    inputName.value = "";
}



//  MAIN -------------------------------------------------------------
let bookList = document.querySelector("#book-list ul");
const ul = document.querySelector("ul");
const inputName = document.querySelector("#add-book-textfield");
const addButton = document.querySelector("button");


addButton.addEventListener("click", addBooks)
console.log(inputName);

bookList.addEventListener("click", deleteBook);

let addForm = document.getElementById("add-book");
addForm.addEventListener("submit", addBook);

let searchBookInput = document
    .getElementById("search-books")
    .querySelector("input");
searchBookInput.addEventListener("keyup", searchBook);