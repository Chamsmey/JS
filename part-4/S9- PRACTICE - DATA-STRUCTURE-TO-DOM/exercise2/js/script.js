// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function addItem() {
  // 1- Create a new task
  // TODO

  //  2- Set the description from the text field
  // TODO

  // 3- Set the priority from select field
  // TODO

  // 4- Add the new object to the array
  // TODO

  console.log(tasks);
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

// run the function addItem when you click on the button
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);
