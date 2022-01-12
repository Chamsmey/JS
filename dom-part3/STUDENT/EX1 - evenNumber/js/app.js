function onBoxClick(event) {
  console.log("box");
  let numberString = span.textContent;
  let number = parseInt(numberString);
  if (event.target.className ==="box"){

    box.style.background = "red";
  }
  span.textContent = "ronan" + number;

  let spanText = span.textContent;
  console.log("number ", spanText);
}
let container = document.querySelector(".container");
let box = document.createElement("div");
box.className="box";
container.appendChild(box);
const NUMBER_BOX = 10;
let number = 0;
for (let i=0;i<NUMBER_BOX;i++){
  number = Math.floor(Math.random() *101);
  console.log(number);
  let box = document.createElement("div");
  box.className="box";
  let span = document.createElement("span");
  span.textContent = number;
  span.style.opacity =1;
  box.appendChild(span);
  container.appendChild(box);
  console.log(container);
}


let div = document.createElement("div");

let span = document.createElement("span");
span.textContent = 42;
div.appendChild(span);
span.style.opacity = 1;
div.addEventListener("click", onBoxClick);
container.appendChild(div);

let div2 = document.createElement("div");
div2.className = "box";
let span2 = document.createElement("span");
span2.textContent =32;
div2.appendChild(span2);
span2.style.opacity = 0;
div2.addEventListener("click", onBoxClick);
box.addEventListener("click", onBoxClick);
container.appendChild(div2);

// This function is called when any box is clicke

