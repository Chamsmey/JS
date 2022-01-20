// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function displayArray(array) {
  console.log(array);
  //1- You have to delete the old    node parent were is stored the items of your list
  // 2-Create a new container that will contain the items in your list
  let contant = document.createElement("div");
  contant.className = "contant";
  contant.setAttribute("id","contant");
  // 1 - From the parent body : create a new div  (class : container)
  // 3 - For all tasks,  create a new div (class : item), and append it the container
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
}

function addItem() {
  // 1- Create a new task
  // TODO
  //  2- Set the description from the text field
  // TODO
  const desciptInput = document.querySelector("#description").value;
  if (desciptInput!==""){
    let contant = document.querySelector(".contant");
    console.log(contant);
    contant.remove();
    let task ={};

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
    displayArray(tasks);
  }
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------;------------------------------------------------------
const container = document.querySelector("div");
let tasks = [];
displayArray(tasks);
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);
