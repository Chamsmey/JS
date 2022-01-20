// ----------------------------------------------------------------------------
// FUNCTIONS


// ----------------------------------------------------------------------------
function submitData() {

    // get user name ------------------
    let getUernName = document.querySelector("#getUsername");
    getUernName.textContent = document.querySelector("#username").value;

    // get email --------------------------------------
    let getEmail = document.querySelector("#getEmail");
    getEmail.textContent = document.querySelector("#email").value;

    //cheack radio button which cheacke or select 
    // get gender from radio --------------------
    let sex = document.querySelector("#maleRadio");
    let getGender = document.querySelector("#getGender");
    if (sex.checked) {
        console.log(sex.getAttribute("value"));
        getGender.textContent =sex.getAttribute("value");

    } else {
        console.log(sex.nextElementSibling.getAttribute("value"));
        getGender.textContent = sex.nextElementSibling.getAttribute("value");

    }

    //get select choice OR fruits 
    let getFruit = document.querySelector("#getFruit");
    getFruit.textContent = fruitts.value;
    console.log(fruitts.value);
    // loop for cheack if cheackbox cheacked ------------ get subject---
    let favoriteSb = "";
    let getSubjects = document.querySelector("#getSubject");
    for (let subject of subjects) {
        if (subject.checked) {
            console.log(subject.getAttribute("value"));
        favoriteSb+= subject.getAttribute("value") + ",";
        }
    }
    getSubjects.textContent = favoriteSb;
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

const applyButton = document.getElementById("applyButton");

applyButton.addEventListener("click", submitData);

const fruitts = document.querySelector("#fruit");

const subjects = document.querySelectorAll(".subject");
