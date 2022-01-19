// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function displayArray(array) {
  //1- You have to delete the old node parent were is stored the items of your list
  // 2-Create a new container that will contain the items in your list
  // 3 - For all tasks,  create a new div (class : item), and append it the container
  // 3.1 the priority defines the color of your item (1 (HIGHT) = red, 0 (LOW) = grey)
}

function addItem() {
  // 1- Create a new task

  //  2- Set the description from the text field

  // 3- Set the priority fro from select field

  // 4- Add the new object to the array

  // 5- Call  the displayArray function to refresh the DOM
  displayArray(tasks);
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);
