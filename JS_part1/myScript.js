
var str=""
for (let number=0; number<2; number++){
    str+="hello"+"\n"
    console.log(str);
}
for (let n=2 ; n<6 ; n++){
    console.log(n);
}
numbers=[5,6,7]
for (let value in numbers){
    console.log(value);
}
let numbers=prompt()
while (numbers!=5){
    console.log("try again !")
    numbers=prompt()
}
let x=3
let y=6
let result=""
if (x<5 && y>6){
    result ="monday"
}
else if(x>10){
    result="Friday"
}
else{
    result="sunday"
}

let x=10
x+=1
console.group(x)
console.log(10 % 3)

let n1 =4
let n2 =n1**2
console.log(n2)

 console.log("ronan"+ "hello")

 console.log("hi\nnho")
 
 console.log("ronan".length)
 
 console.log("ronan".slice(1))
 
 console.log("abcd"[1])

 console.log(parseInt("4")+parseInt("5"))
 