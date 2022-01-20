function addTask(event) {
  // --------- TO HELP YOU --------------------------
  // 1- Prevent default to avoid to refresh the page
  event.preventDefault();

  // TODO
  // 2- Get the form inputs  information
  // TODO
  const task = document.querySelector("#taskId").value;
  const color = document.querySelector("#color").value;
  const date   = document.querySelector("#date").value;
  console.log(task,color,date);
  // 3- Check if task text, color, date are defined :
  //    If not defined, display a warnning        "You must fill all inputs"
  if (task==="" || color==="#000000" || date===""){
    alert("you need to fill all");
  }
  // TODO
  // 4 - If defined:
  else{
    let taskName = document.createElement("span");
    // 4-1- Create a span for the taks name
    //    - class = "task-name"
    // TODO
    taskName.className = "task-name";
    taskName.textContent = task;
    
    // 4-2- Create a span for the taks date
    //    - class = "task-date"
    // TODO
    let dates = document.createElement("span");
    dates.className = "task-date";
    dates.textContent = date;
    // 4-3- Create a p containing the 2 spans
    // TODO
    let para = document.createElement("p");
    para.appendChild(taskName);
    para.appendChild(dates);

    para.style.background = color;
  
    myForm.appendChild(para);
    // 4-4- the P background color is the selected color - the text is back
  }

  // TODO
}

// MAIN ----------------------------------------------------
const btnAddTask = document.getElementById("addTaskButton");
btnAddTask.addEventListener("click", addTask);
let myForm = document.querySelector("form");
