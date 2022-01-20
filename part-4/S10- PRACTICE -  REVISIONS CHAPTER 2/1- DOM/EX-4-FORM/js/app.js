function multipleValue(event) {
    event.preventDefault();

    // 1. Get element from input type radio "input[name=gender]"
    
    // 2. Get element from input type checkbox "input[name=teacher]"

    // 3. Get element from multiple select "#select-meal-type option"
    
    // Loop to get value from input radio when we checked
    let gen = "";
    
    // Loop to get value from input checkbox when we checked
    let teach = "";

    // Loop to get value from multiple select when we selected
    let meal = "";
   
    // output
    const spanGender = document.querySelector('.gender');
    const spanTeacher = document.querySelector('.teacher');
    const spanMeal = document.querySelector('.meal');

    // Look on PowerPoint slide to see the output look like
}

document.addEventListener('change', multipleValue);