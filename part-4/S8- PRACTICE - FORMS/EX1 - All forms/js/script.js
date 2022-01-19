// ----------------------------------------------------------------------------
// FUNCTIONS


// ----------------------------------------------------------------------------
function submitData() {

    let getUernName = document.querySelector("#getUsername");
    // get user name ------------------
    getUernName.textContent = document.querySelector("#username").value;

    // get email --------------------------------------
    let getEmail = document.querySelector("#getEmail");
    getEmail.textContent = document.querySelector("#email").value;

    //cheack radio button which cheacke or select 
    let sex = document.querySelector("#maleRadio");
    let getGender = document.querySelector("#getGender");
    if (sex.checked) {
        console.log(sex.getAttribute("value"));

    } else {
        console.log(sex.nextElementSibling.getAttribute("value"));
        getGender.textContent = sex.nextElementSibling.getAttribute("value");

    }
    // get gender from radio --------------------

    //get select choice 
    let getFruit = document.querySelector("#getFruit");
    getFruit.textContent = fruitts.value;
    console.log(fruitts.value);
    // loop for cheack if cheackbox cheacked ---------------
    for (let subject of subjects) {
        if (subject.checked) {
            console.log(subject.getAttribute("value"));
            let getSubjects = document.querySelector("#getSubject");
            getSubjects.textContent = subject.getAttribute("value");
        }

    }
    let getSms = document.querySelector("#getMessage");
    getSms.textContent = messages.value;
    // 1- get values from forms
    // TODO
    // 2- change labels on right side
    // TODO
};


// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------
const messages = document.querySelector("#sms");
let applyButton = document.getElementById("applyButton");
applyButton.addEventListener("click", submitData);
let fruitts = document.querySelector("option");

let subjects = document.querySelectorAll(".subject");
console.log(fruitts);