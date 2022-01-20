// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function displayArray(array) {
  console.log(array);

  // 1 - From the parent body : create a new div  (class : container)
  let contant = document.createElement("div");
  contant.className = "contant";

  // 2 - For all tasks,  create a new div (class : item), and append it the container
  for(let task of array){
    const item = document.createElement("div");
    item.className = "item";
    item.textContent = task["desciption"];
    contant.appendChild(item);
    console.log(task);
  }
  container.appendChild(contant);
  
  // 3- The priority defines the color of your item (1 (HIGHT) = red, 0 (LOW) = grey)
  let items = document.querySelectorAll(".item");
  for (let index in array){
    if (array[index]["priority"]===1){
      console.log(array[index]["priority"]);
      items[index].style.background = "red";
    }
    else{
      items[index].style.background = "grey";
    }
  }
  //1- You have to delete the old node parent were is stored the items of your list
  // 2-Create a new container that will contain the items in your list
  // 3 - For all tasks,  create a new div (class : item), and append it the container
  // 3.1 the priority defines the color of your item (1 (HIGHT) = red, 0 (LOW) = grey)
}

function addItem() {
  // 1- Create a new task
  let task ={};
  // TODO
  //  2- Set the description from the text field
  // TODO
  const desciptInput = document.querySelector("#description").value;
  task["desciption"]= desciptInput;
  
  
  // 3- Set the priority from select field
  // TODO
  const priority = document.querySelector("#priority");
  if (priority.value ==="Hight"){
    
    task["priority"]= 1;
  }
  else{
    task["priority"]= 0;
  }
  // 4- Add the new object to the array
  // TODO
  tasks.push(task);
  console.log(task);
  displayArray(tasks);
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];
const container = document.querySelector("div");
const contant = document.createElement("div");
contant.className = "contant";
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);
