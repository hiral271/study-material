// Creates an array containing names of five students in the class
var students = ["Hiral", "Mohan", "Denish", "Khusbu", "vishu"];
var fruits = ["mango", "carrot", "orange", "apple", "onions", "tomatos", "pineple", "watermelon"]

function reverse() {

    // this reverse mode will reverse the appearce of array elements
    // it will start from vishu rather then hiral 
    students.reverse()
    document.getElementById("par").innerHTML = students;


}
reverse();

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits;

function myFunction() {

  // this shift will remove the first array elemets
  fruits.shift();
  document.getElementById("demo").innerHTML = fruits;

  if(fruits.length === 0 ){
    document.getElementById("clear").innerHTML = "None thing is left to see ..... ";
  
  }else{
    document.getElementById("clear").innerHTML = "list "
  
  }


}

var qoute = "Feel free to feel good !!!!! "
document.getElementById("cool").innerHTML = qoute ;

function remove(){

var rem = qoute.slice(0,5)
document.getElementById("slice").innerHTML = rem ;

var rn=  qoute.slice(0,10)
document.getElementById("slice2").innerHTML = rn ;

var rl=  qoute.slice(0,15)
document.getElementById("slice3").innerHTML = rl ;

var rk=  qoute.slice(0,24)
document.getElementById("slice4").innerHTML = rk ;


}
remove();