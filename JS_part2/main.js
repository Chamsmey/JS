/* remove using pop */
let arr = [1,2,3,4,5];
arr.pop(1);
console.log(arr);
arr.splice(1,0,23);
/* get sub arr */
/* create array 2d with values */
var arr2d = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
let value = arr2d[2][0];
console.log(value);


/* create empty dictionary */
var dictionary = {};
var student = {name:"kea",age:"24",sex:"male"};
let key = student.name ;
console.log(key);
/* add value for a new key */

student[favorite] = "fooball";
/* update value from existing key */
student["age"] = 21;

/* remove key from object  */
delete student["age"];
console.log(student);