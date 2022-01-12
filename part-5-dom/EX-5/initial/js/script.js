 // 1- Get the list of books ( tips : use the querySelectorAll )
 // TODO
 const bookList = document.querySelectorAll(".book-name");
 eachbooks = "";
 console.log(bookList.length);
 for (book of bookList) {
     eachbooks += book.textContent + ","
 }
 console.log(eachbooks);
 const titles = document.querySelector("#books-titles");
 titles.textContent = eachbooks;
 // 2- Display the number of books on paragrah "books-number"
 // TODO
 const bookNumber = document.querySelector("#books-number");

 // 3- Display the title of the books  on paragrah "books-titles"
 // TO
 bookNumber.textContent = bookList.length;