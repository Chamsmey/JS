let box = document.querySelector("#boxId");
let rightAndLeft = 100;
let upAndDown = 100;

function moveLeft() {
    // Move the box left
    if (rightAndLeft > 0) {

        rightAndLeft -= 100;
        box.style.left = rightAndLeft.toString() + "px";
        console.log("left");
        console.log(rightAndLeft);
    }
}

function moveRight() {
    if (rightAndLeft < 300) {

        rightAndLeft += 100;
        box.style.left = rightAndLeft.toString() + "px";
        console.log("right");
        console.log(rightAndLeft);
    }
    // Move the box right
}

function moveUp() {
    if (upAndDown > 0) {

        upAndDown -= 100;
        box.style.top = upAndDown.toString() + "px";
        console.log("up");
        console.log(upAndDown);
    }

    // Move the box up
}

function moveDown() {
    if (upAndDown < 300) {

        upAndDown += 100;
        box.style.top = upAndDown.toString() + "px";
        console.log("down");
        console.log(upAndDown);
    }
    // Move the box down
}

// Get the 4 buttons and bind to the 4 functions
let buttonRight = document.getElementById("btn-move-right");
let buttonLeft = document.getElementById("btn-move-left");
let buttonup = document.getElementById("btn-move-up");
let buttonDown = document.getElementById("btn-move-down");
buttonRight.addEventListener("click", moveRight);
buttonLeft.addEventListener("click", moveLeft);
buttonup.addEventListener("click", moveUp);
buttonDown.addEventListener("click", moveDown);