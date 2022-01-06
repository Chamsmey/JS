let text = "Hello teacher how are you ?";
let wordOftext = "";
let arrOftext = [];
let char = "";
for (let index in text){
    // convert char to uppercase the first char in word 
    if ((index == 0 )|| (text[index-1] === " ")){
        char = text[index].toUpperCase();
        wordOftext += char;
    } else if(text[index] !==" "){
        wordOftext += text[index];
    }
    //insert word to arr 
    if (text[index] === " " || index ==text.length-1){
        // aviod word that start with W 
        if (wordOftext[0]!=="W"){
            arrOftext.push(wordOftext);
        }
        wordOftext = "";
    }
}
console.log(arrOftext);