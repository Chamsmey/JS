//function ---------------------------
function show() {
    p.style.display = "block";
}

function hide() {
    p.style.display = "none";
}
const names = ["Nhor kea", "Smey Cham", "Bunyong Narong", "Von Sreymao", "Rith Theara", "Bav oun", "thy Lida", "Ouern Chansok", "Kim Muymey", "mao Meng"];
//get element ----------------
const btnShow = document.querySelector("#btn-show");
const btnHide = document.querySelector("#btn-hide");
const p = document.querySelector("p");
const container = document.querySelector(".container");

//event click---------------------------
btnShow.addEventListener("click", show)
btnHide.addEventListener("click", hide)
    //create element -----------------------
const ul = document.createElement("ul");
for (let name of names) {
    const li = document.createElement("li");
    const title = document.createElement("span");
    const remove = document.createElement("span");
    title.classList.add("title");
    remove.classList.add("remove");
    title.textContent = name;
    remove.textContent = "remove";
    li.appendChild(title);
    li.appendChild(remove);
    ul.appendChild(li);

}

// put class 
//-----------------------
// append into parent --------------
container.appendChild(ul);
ul.className = "navbar";
document.addEventListener("click", function(e) {

    if (e.target.className === "remove") {
        e.target.parentElement.remove();
        console.log(e.target.previousElementSibling);
    }
})
const input = document.querySelector("#input-name");
const btnEnter = document.querySelector("#btn-enter");
btnEnter.addEventListener("click", addName);

function addName() {
    if (input.value != "") {
        const li = document.createElement("li");
        const title = document.createElement("span");
        const remove = document.createElement("span");
        title.classList.add("title");
        remove.classList.add("remove");
        title.textContent = input.value;
        console.log(input.value);
        remove.textContent = "remove";
        li.appendChild(title);
        li.appendChild(remove);
        ul.appendChild(li);

    }
    input.value = "";
};

function enterAdd(event) {
    console.log(event.key);
    if (event.key === "Enter") {

        if (input.value != "") {
            const li = document.createElement("li");
            const title = document.createElement("span");
            const remove = document.createElement("span");
            title.classList.add("title");
            remove.classList.add("remove");
            title.textContent = input.value;
            console.log(input.value);
            remove.textContent = "remove";
            li.appendChild(title);
            li.appendChild(remove);
            ul.appendChild(li);

        }
        input.value = "";
    }
};
let enter = document.addEventListener("keydown", enterAdd);