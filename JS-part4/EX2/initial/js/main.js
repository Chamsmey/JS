let numbers = [1, 3, 5,6, 0, 2, 0, 1,1,1, 1, 2, 3];
// TODO: 
// YOUR CODE HERE
let isValid = false;
let sum = 0;
for (let value of numbers){
    if (value == 1 && !isValid){
        isValid = true;
    }else if (value ==0 && isValid){
        isValid = false;
    }
    else if(isValid){
        console.log(value);
        sum += value;
    }
}
console.log(sum);
// output: 14 becuase 3 + 5 + 1 + 2 + 3





