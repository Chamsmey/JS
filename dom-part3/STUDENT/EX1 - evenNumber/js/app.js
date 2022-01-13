function onBoxClick(event) {
    //get event of box -----------------
    let box = event.target;
    let span = box.children[0];
    let numberString = span.textContent;
    let number = parseInt(numberString);
    span.style.opacity = 1;

    //check odd number ------------------------------

    if (event.target.className === "box" && number % 2 === 1) {
        box.style.background = "red";
        span.textContent = "lose" + number;

        //check event number -------------------------------------

    } else if (event.target.className === "box" && number % 2 === 0) {
        box.style.background = "green";
        span.textContent = "win" + number;

    }

    let spanText = span.textContent;
    console.log("number ", spanText);
}


let container = document.querySelector(".container");
const NUMBER_BOX = 10;
let number = 0;
//create amny box by loop------------------------
for (let i = 0; i < NUMBER_BOX; i++) {
    number = Math.floor(Math.random() * 101);
    console.log(number);
    var box = document.createElement("div");
    var span = document.createElement("span");
    box.className = "box";
    span.textContent = number;
    span.style.opacity = 0;
    box.appendChild(span);
    container.appendChild(box);
    //event click on box -------------------
    box.addEventListener("click", onBoxClick);
}



// This function is called when any box is clicke