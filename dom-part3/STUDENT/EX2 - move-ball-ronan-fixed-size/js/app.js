let box = document.querySelector("#boxId");

function moveLeft() {
  // Move the box left
}

function moveRight() {
  box.style.left = "400px";
  // Move the box right
}

function moveUp() {
  // Move the box up
}

function moveDown() {
  // Move the box down
}

// Get the 4 buttons and bind to the 4 functions
let buttonRight = document.getElementById("btn-move-right");
buttonRight.addEventListener("click", moveRight);
