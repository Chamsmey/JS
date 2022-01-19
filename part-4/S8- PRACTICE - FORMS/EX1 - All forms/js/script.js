// ----------------------------------------------------------------------------
// FUNCTIONS


// ----------------------------------------------------------------------------
function submitData() {
  let userName = document.querySelector("#username").value;
  console.log(userName);
  let email = document.querySelector("#email").value ;
  console.log(email);
  let sex = document.querySelector("#maleRadio");
  if (sex.checked){
    console.log(sex.getAttribute("value"));
    
  }else {
    console.log(sex.nextElementSibling.getAttribute("value"));
  }
  console.log(fruitts.value);
  for (let subject of subjects){
    if (subject.checked){

      console.log(subject);
    }

  }
  
  // 1- get values from forms
  // TODO
  // 2- change labels on right side
  // TODO
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------
let applyButton = document.getElementById("applyButton");
applyButton.addEventListener("click", submitData);
let fruitts = document.querySelector("#fruit");
console.log(fruitts.value);
let subjects = document.querySelectorAll(".subject");
console.log(subjects);
