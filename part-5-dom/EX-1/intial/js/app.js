

let showImage = () => {
    let image = document.querySelector(".img-group");
    image.style.display= "flex"
    // your code here
}
let hideImage = () => {
    // your code here display image when we click ---
    let image = document.querySelector(".img-group");
    image.style.display= "none"
}

let btnShow = document.getElementById("btn-show");
let btnHide = document.getElementById("btn-hide");

btnHide.addEventListener('click', hideImage);
btnShow.addEventListener('click', showImage);