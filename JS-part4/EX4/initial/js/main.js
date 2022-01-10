// case 1:
let arr = [1, 3, 6, 7, 9];
let maximum = arr[0];
// TODO: 
// YOUR CODE HERE
//find maximum number
for (let index in arr) {
    if (arr[index] > maximum) {
        maximum = arr[index];
    }
}
for (let index in arr) {
    if (arr[index] < 5) {
        // replace item that less than 5 to maximum number
        arr.splice(index, 1, maximum);
    }
}
// output: [9, 9, 6, 7, 9]
console.log(arr);