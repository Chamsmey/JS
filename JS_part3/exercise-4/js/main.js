let students = ["narong","kea","cham"];
let country = ["cambodia","thai","japan"];
let major = ["developer","database","SNA"];

let listStudents = [];
for  (let key in students){
        let student = {};
        // add key and value to object 
        student['student'] = students[key]
        student['country'] = country[key]
        student['major'] = major[key]
        // insert a object to arr 
        listStudents.push(student);
    }
    
console.log(listStudents);
