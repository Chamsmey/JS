// input 2 arr 
let arr1 = prompt();
let arr2 = prompt();
let newArr = [];
for (let index in arr1) {
    // check value of comparing two arr that greater than
    if (arr1[index] > arr2[index]) {
        newArr.push(parseInt(arr1[index]));
    } else {
        // convert string ot integer
        newArr.push(parseInt(arr2[index]));
    }
}
console.log(newArr);