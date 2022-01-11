 // 1- Get the list of books ( tips : use the querySelectorAll )
 // TODO
 const listBook = document.querySelector("ul");
 //childen are element of ul get childen
 let numberOfchilds = (listBook.children).length;

 const numberOFbook = document.querySelector("#books-number");
 const bookTitle = document.querySelector("#books-titles");
 const span = document.createElement("span");
 let valueOfspan = "";
 //get number of ul's children
 numberOFbook.textContent = numberOfchilds;
 console.log(numberOfchilds);
 // loop on ul's children 
 for (let child of(listBook.children)) {
     //get value of ul's children by textcontent
     valueOfspan += child.firstElementChild.textContent + ","
     console.log(child.firstElementChild.textContent);
 }
 span.textContent = valueOfspan;
 //append span into p
 bookTitle.appendChild(span);
 console.log(valueOfspan);
 // 2- Display the number of books on paragrah "books-number"
 // TODO


 // 3- Display the title of the books  on paragrah "books-titles"
 // TODO