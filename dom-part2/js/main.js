let fruits = ["banana","mango","apple","potato"];
const container = document.querySelector(".container");
const ul = document.createElement("ul");
for (let fruit of fruits){
    //create new tage ------------
    const li = document.createElement("li");
    // put class name to li tage -----------
    li.classList.add("item");
    const title = document.createElement("span");
    title.textContent = fruit;
    title.classList.add("title");
    const action = document.createElement("span");
    // put text into tage -------------------
    action.textContent = "delete";
    action.classList.add("delete");
    // append tage to html file ----------------
    li.appendChild(title);
    li.appendChild(action);
    ul.appendChild(li);
    //put style to tage 
}

container.appendChild(ul);
ul.addEventListener("click",function(event){
    if (event.target.className === "delete"){
        event.target.parentElement.remove();
    }
    console.log(event.target.className);
})
