/* 1*/
/* 1*/
let x = 5
let y = 5
console.log(x==y);



/* 2*/
let x = 5
let y = 5
console.log(! (x==y && (x>5 || y<10)));

/* 3*/
let n ="5";
console.log(parseInt(n)+ parseInt(n));


/* 4*/

let n =5;
console.log(n.toString()+ n.toString());

/* create empty array*/

var arr = [];
var arryOfvalue=[1,2,3,4];
var index =arryOfvalue[1];
/* insert element in arr */
var newValue = arryOfvalue.push(5);
arryOfvalue.splice(1,7);
console.log(arryOfvalue);