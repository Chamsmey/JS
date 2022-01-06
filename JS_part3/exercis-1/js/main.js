let arr = [10,22,33];
var valid = true;
var message = "";
for (let value of arr){
    // check number is float numvber is invalid 
    if (value < 0 || value.toString().length!==2 ){
        valid = false;
    }
}
if (valid){
    message = "valid";
}else{
    message = "invalid";
}
console.log(message);