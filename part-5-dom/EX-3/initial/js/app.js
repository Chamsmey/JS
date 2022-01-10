const MAX_SIZE = 800;
const MIN_SIZE = 100;
const STEP = 100;

// FUNCIONS --------------------------------------------------
let decreaseBox = () => {
	// TODO : decrease the box width of STEP (100 px)
	if (currentWidth-STEP<= MAX_SIZE){
		currentWidth-= STEP;
		box.style.width = currentWidth.toString() + "px" 
	}
	// WARNING : don't do it if the size is already the MIN SIZE
	// TIP : to set the style.width, don't forget to add the "px" at the end
};

let increaseBox = () => {
	if (currentWidth+STEP<= MAX_SIZE){
		currentWidth+= STEP
		box.style.width = currentWidth + "px" 
	}
	// TODO : increase the box width of STEP (100 px)
	// WARNING : don't do it if the size is already the MAX SIZE
	// TIP : to set the style.width, don't forget to add the "px" at the end
};

// MAIN --------------------------------------------------
let box = document.querySelector("#box");
// Initialize the size of the box (100 px at the begining)
let currentWidth = MIN_SIZE;
box.style.width = currentWidth + "px";

// Add button functions
let btnDecrease = document.querySelector("#btn-decrease-width");
btnDecrease.addEventListener("click", decreaseBox);

let btnIncrease = document.querySelector("#btn-increase-width");
btnIncrease.addEventListener("click", increaseBox);

