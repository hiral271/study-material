// Creates an array containing names of five students in the class
var students = ["Hiral", "Mohan", "Denish", "Khusbu", "vishu"];

// Logs length of the students array
var lengthEl = document.getElementById('cool')
lengthEl.textContent= students.length
console.log(students.length)

// Now, write a console log introducing each student


var hiralEl = document.getElementById('demo1')
hiralEl.textContent= students[0]
console.log(students[0])

var mohanEl = document.getElementById('demo2')
mohanEl.textContent= students[1]
console.log(students[1])

var denishEl = document.getElementById('demo3')
denishEl.textContent= students[2]
console.log(students[2])

var khusbuEl = document.getElementById('demo4')
khusbuEl.textContent= students[3]
console.log(students[3])

var vishuEl = document.getElementById('demo5')
vishuEl.textContent= students[4]
console.log(students[4])


// Replace the first student in the array with a new student Shyamlya.
students[3] = "Shyamlyaa"


// Use your Javascript to check if "Bob" is the first elemnt in the array 

if(students[3]==="Shyamlyaa"){
    console.log("name is changed to shyamlyaa !!!!! ")
}else{
    "its not working !!!!"
}