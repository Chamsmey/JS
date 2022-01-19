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
    if (inputName.value !== "") {
        // 1- Get the book name from the input field

        // 2- Create a new span bookName for the book name, class name = name
        let title = document.createElement("span");
        title.classList.add("name");


        title.textContent = inputName.value;
        // 3- Create a new span deleteBtn for the button delete, class name = delete
        let deletes = document.createElement("span");
        deletes.textContent = "delete";
        deletes.classList.add("delete");
        // 4- Create a new li
        let li = document.createElement("li");


        // 5- Add bookName and deleteBtn to li and li to the  bookList UL
        li.appendChild(title);
        li.appendChild(deletes);
        bookList.appendChild(li);

    }




    inputName.value = "";

}
let nameSearced = "";

function searchBook(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        console.log(nameSearced);
    }

    // 1- Get the search text
    nameSearced = event.key;
    console.log(nameSearced);
    // 2- Loop on all LI
    let li = document.querySelectorAll("li");
    li.forEach(element => {
        let bookName = element.firstElementChild.textContent;
        if (bookName.indexOf(nameSearced) === -1) {
            element.style.display = "none";
        }
    });

    // Update the style of the LI (visible or hidden)

}

//  MAIN -------------------------------------------------------------
let bookList = document.querySelector("#book-list ul");

const inputName = document.querySelector("#add-book-textfield");


//event ------------------------------

bookList.addEventListener("click", deleteBook);

let addForm = document.getElementById("add-book").lastElementChild;
addForm.addEventListener("click", addBook);

let searchBookInput = document
    .getElementById("search-books")
    .querySelector("input");
searchBookInput.addEventListener("keyup", searchBook);