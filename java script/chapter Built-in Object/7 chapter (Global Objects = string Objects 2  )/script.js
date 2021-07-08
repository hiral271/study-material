// Creates an array containing names of five students in the class
var students = ["Hiral..", "Mohan..", "Denish..", "Ayushyamann..", "vishu.."];
var fruits = ["mango..", "carrot..", "orange..", "apple..", "onions..", "tomatos..", "pineple..", "watermelon.."]

function reverse() {

    // this reverse mode will reverse the appearce of array elements
    // it will start from vishu rather then hiral 
    students.reverse()
    document.getElementById("par").innerHTML = students;


}
reverse();

                      ///// shift()////////


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

                       //////unshift()/////////
 var planets = ["   Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];


function kahn(){

 planets.unshift("RoachHell......");
  document.getElementById("unshift").innerHTML = planets;

}


kahn()

         ///// slice () ///////

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


                          ///////replace()//////////

// by using this replace we can replace string words 
// without chnging whole string 


var a = qoute.replace("good","bad")
document.getElementById("replace").innerHTML = a ;

var b = qoute.replace("free","cool")
document.getElementById("replace2").innerHTML= b;
     


                         ////// uppercase() & lowercase() ///////

var c = qoute.toUpperCase()
document.getElementById("upper").innerHTML = c ;

var d = qoute.toLowerCase()
document.getElementById("lower").innerHTML = d;

var e = fruits.toString()
document.getElementById("string").innerHTML = e ;