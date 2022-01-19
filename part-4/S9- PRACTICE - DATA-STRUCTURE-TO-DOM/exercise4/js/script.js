// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function displayArray(array) {
  //1- You have to delete the old node parent were is stored the items of your list
  let containers = document.querySelectorAll(".container");
  // In the HTML, the items are stored in the second HTML element of class container, so if containers.length == 1, you need to delete it. If containers.lenght == 0, it means there is only one that you keep
  if (containers.length > 1) {
    containers[1].remove();
  }

  // Create a new container that will contain the items in your list
  let container = document.createElement("div");
  container.className = "container";
  document.body.appendChild(container);

  // 2 - For all tasks,  create a new div (class : item), and append it the container
  for (let task of array) {
    let item = document.createElement("div");
    item.className = "item";
    item.textContent = task.description;

    // the priority defines the color of your item (1 (HIGHT) = red, 0 (LOW) = grey)
    let color = "red";
    if (task.priority === 0) {
      color = "grey";
    }
    item.style["background-color"] = color;

    container.appendChild(item);
  }
}

function addItem() {
  // 1- Create a new task
  let newTask = {};

  //  2- Set the description from the text field
  descriptionValue = document.getElementById("description").value;
  newTask["description"] = descriptionValue;

  // 3- Set the priority fro from select field
  priorityValue = document.getElementById("priority").value;
  if (priorityValue === "Hight") {
    newTask["priority"] = 1;
  } else {
    newTask["priority"] = 0;
  }

  // 4- Add the new object to the array
  tasks.push(newTask);

  displayArray(tasks);
}

function showImportant() {
  // -1  Create a new list with only the tasks of priority HIGHT ( = 1 )
  // -2 Call the displayArray with this new list
}

function showNotImportant() {
  // -1  Create a new list with only the tasks of priority LOW ( = 0 )
  // -2 Call the displayArray with this new list
}

function showAll() {
  // -1 Call the displayArray with the  full list (all tasks)
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);

//   1 --> important item
let showImportantButton = document.getElementById("showImportantButton");
showImportantButton.addEventListener("click", showImportant);

// 0 --> not important item
let showNotImportantButton = document.getElementById("showNotImportantButton");
showNotImportantButton.addEventListener("click", showNotImportant);

// Take off the filters --> draw again
let showAllButton = document.getElementById("showAllButton");
showAllButton.addEventListener("click", showAll);
