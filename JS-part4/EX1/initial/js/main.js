let text = "hello world [JavaScript] we [are] strong! [hello goys ]";
// TODO: 
// YOUR CODE HERE
let newText = "";
let isvalid = true ; 
for (let index in text){
    if ( isvalid && text[index] !=="["){
        newText += text[index];
    }else if (isvalid && text[index] ==="["){
        isvalid = false;
    }
    else if (!isvalid && text[index-1]==="]"){
        isvalid = true;
    }
}

// output: hello world we strong!
console.log(newText);

