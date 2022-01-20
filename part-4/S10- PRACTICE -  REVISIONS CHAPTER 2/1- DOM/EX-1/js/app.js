//1. create div with class name "container" and append it to "body"
const container  = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

//2. create div with class name "card" and append it to "container" div
const card = document.createElement("div");
card.className = "card";
container.appendChild(card);

//3. create div with class name "card-img" and append it to "card" div
const image = document.createElement("div");
image.className = "card-img";
card.appendChild(image);

//4. create img tags with class name "img", use "src" attribute to display image and append it to "card-img" div
const img = document.createElement("img");
img.className = "img";
img.setAttribute("src","images/example.jpg");
image.appendChild(img);
// example: sample.src = "images/example.jpg";

//5. create div with class name "card-body" and append it to "card" div
const cardBody = document.createElement("div");
cardBody.className = "card-body";
card.appendChild(cardBody);
//6. create h2 tags with class name "card-title", textContent = "Natural in the world" and append it to "card-body" div
const title = document.createElement("h2");
title.className = "card-title";
title.textContent = "Natural in the world";
cardBody.appendChild(title);
//7. create p tags with class name "description",
const para = document.createElement("p");
para.className ="description";

// textContent = "Lorem ipsum dolor sitore aliquam ab sequi saepe facilis, ipsam illo modi cupiditate illum iure? Maiores suscipit dicta mollitia velit. Eveniet reprehenderit rem odio provident quibusdam consequatur aspernatur porro aliquam similique illo ut cum reiciendis amet placeat dolor possimus laboriosam, aliquid, veritatis natus accusamus quod nulla ipsam. Deserunt perferendis laboriosam delectus maxime blanditiis."
para.textContent = "Lorem ipsum dolor sitore aliquam ab sequi saepe facilis, ipsam illo modi cupiditate illum iure? Maiores suscipit dicta mollitia velit. Eveniet reprehenderit rem odio provident quibusdam consequatur aspernatur porro aliquam similique illo ut cum reiciendis amet placeat dolor possimus laboriosam, aliquid, veritatis natus accusamus quod nulla ipsam. Deserunt perferendis laboriosam delectus maxime blanditiis.";

// and then apppend it to "card-body" div
cardBody.appendChild(para);


//8. create div with class name "card-footer" and append it to "card" div
const footer = document.createElement("div");
footer.className = "card-footer";
card.appendChild(footer);
//9. create span tags with id name "date", textContent = "14 / April / 2021" and append it to "card-footer" div 
const date = document.createElement("span");
date.className = "date";
date.textContent = "14 / April / 2021";
footer.appendChild(date);
//10. create span tags with id name "author", textContent ="Ronan Ronaldo"  and append it to "card-footer" 
const autor = document.createElement('span');
autor.className = "author";
autor.textContent = "Ronan Ronaldo" ;
footer.appendChild(autor);
console.log(container);