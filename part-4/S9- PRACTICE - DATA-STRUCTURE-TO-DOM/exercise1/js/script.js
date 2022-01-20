// This is our data structure of TASKS
let tasks = [
  { description: "Do homework", priority: 1 },
  { description: "Wash clothes", priority: 0 },
  { description: "Dream about Javascript", priority: 1 },
];

function displayArray(array) {
  console.log(array);
  // 1 - From the parent body : create a new div  (class : container)
  const container = document.createElement("div");
  container.className = "container";

  // 2 - For all tasks,  create a new div (class : item), and append it the container
  for(let task of array){
    const item = document.createElement("div");
    item.className = "item";
    item.textContent = task["description"];
    container.appendChild(item);
  }
  document.body.appendChild(container);
  
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

displayArray(tasks);
