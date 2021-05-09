// Creates an array containing names of five students in the class
var students = ["Hiral", "Mohan", "Denish", "Shyamlya", "vishu"];

for(var i = 0 ;i < students.length;  i++){
    demoEl= document.getElementById("demo")
    demoEl.textContent ="This is Student length : " + i 
}

for(var i = 0 ;i < students.length ;  i++){
    demo2El= document.getElementById("demo2")
    demo2El.textContent = students[i]
}
// its works in console one by one see that 
for(var i=0 ;i < 5 ;i++){
    console.log('this are the numbers  ' + i )
    demo2El= document.getElementById("cool")
    demo2El.textContent = i ;
}

// cheack out console 

for(var i = 0 ;i < students.length ; i++){
    console.log('this are the names  '+ ""+ students[i] )
    
}

// still learn about for loop ,while ,for while 