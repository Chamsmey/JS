const h1 = document.querySelector("h1");
//caught the prvious element sibling of tage h1 
console.log(h1.previousElementSibling);

//caught the next element sibling of tage h1 
console.log(h1.nextElementSibling);
console.log(h1.parentNode);
//event by key -----------------
document.addEventListener("keyup",function(e){
    if (e.key==="Enter"){
        let input = document.querySelector("input");
        console.log(input.value);
    }
    console.log(e.key);
})