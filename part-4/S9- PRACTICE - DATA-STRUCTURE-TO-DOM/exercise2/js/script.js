// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function addItem() {
  // 1- Create a new task
  let task ={};
  // TODO
  //  2- Set the description from the text field
  // TODO
  const desciptInput = document.querySelector("#description").value;
  task["disciption"]= desciptInput;
  
  
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
}
// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------
// run the function addItem when you click on the button
let tasks =[];
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);
