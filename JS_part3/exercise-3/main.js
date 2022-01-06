let arr = [1,2,3,3.1,6];
let newArr = [];
for (let value of arr){
    if (value % 1 ===0){
        newArr.push(value);
    }
}
console.log(newArr);