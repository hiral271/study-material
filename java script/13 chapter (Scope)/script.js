// TODO: Declare variable 'shout' with the value 'Shout' so it's available to `justShout` and `shoutItAllOut` functions

// Globel scope 
//declaring var on the top to use it multiple time is called global scope 
// you can use this var even in any function 
var roar = "roar";



function animals(){

roarEL = document.getElementById("demo")
roarEL.textContent = "Some animals can "  + roar

}

animals();

// TODO: Declare variable 'animal' with the value 'Tigers' so it is only available to the 'sayTigers' function

function callanimals(){
  // local scope 
  // calling var in function is called local scope 
  // its can only used in between function 
  // if you try to use local scope in other function rather then its origin 
  // it will throw  ERROR 

var tiger = "roar Loud "

roar2EL = document.getElementById("demo2")
roar2EL.textContent = "Some animals can "  + roar + " but tiger " + tiger


}
callanimals();



// this function wont work cause we called local scope 
// it will throw error as tiger is not declared  or defined 
function birds(){

  cannotEl = document.getElementById("demo3")
  cannotEl.textContent = "some animals can't " + tiger + roar;

  }
  
  birds();