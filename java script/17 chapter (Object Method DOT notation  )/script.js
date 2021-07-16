chosenPet = "Rocky";

// this is an object method 
// creating litral notation 
// the  info inside curly braces are called object properties 



// this pet name is called object 
pet ={

  // object [properties are called with : 
  
  dogs: ["Mackie", "Bernice", "Cookie Monster", "Spot"],

  // this dogs and cats are keys 

  cats: ["Astrid", "Rocky","Lulu", "Fluffy", "Mouser"],

    apptMessage: function () {
      console.log("Email us at meetafriend@waywardpets.com to make an appointment to meet your new friend.");
    }
}


function dog(){

  console.log("we have this pet"  + "   "+ chosenPet  + " in dog list " )
  
  // we can use dot (.) method to use object keys ... or values ... or properties 
  pet.apptMessage()


}

function cat(){

  console.log(" we have this cat pet " + "   " + pet.cats[1]  + "in cat list " )
  pet.apptMessage()
}


// this    * include *    method is used to find same vlaues ot of long array ..


if (pet.dogs.includes(chosenPet)) {
  dog();
} else if (pet.cats.includes(chosenPet)) {
  cat();
} else {
  console.log("It looks like the pet is not available.");  
  // To access a value stored in the array, you use the object name, name of key and the value's index
  console.log("Check out our featured dog, " + pet.dogs[0] + ", or our featured cat, " + shelter.cats[1]);
}

//------------------------------//---------------------------------------------//

 var objectString = "Apple"

objectArray = {


  fruits : ["Banana", "Orange", "Apple", "Mango"],

  cars : ["Saab", "Volvo", "BMW","Tesla"],
 
   stuff()  {
      console.log(" hello !!!!! you can see stuffs  !!!!  ")
   } 

  }
  objectArray.stuff()


  function fruits(){

      var fruitsEl = document.getElementById("demo")
       fruitsEl.innerHTML = " we have this " + objectString  + " in our fruits list "
  
     
      
  
      }
  

function cars(){

var carsEl = document.getElementById("demo2")
carsEl.innerHTML = " we have this "  + objectString + " in car list "  + "."



}


if(objectArray.fruits.includes(objectString)){

fruits()


}
else  if (objectArray.cars.includes(objectString)){

cars()

}else{
  console.log("errrr ")
}



/// __________________________________________////___________________________________



var cool = "shivansh";

stuff = {

         girls:["shital","hiral","priya","pinky"],

         boys:["rocky","shiva","shivansh","denish","vishu"]

}

function girls(){
  console.log(cool + "" + "this name is in girls function ")

    var  girlsEl = document.getElementById("demo3")
     girlsEl.innerHTML = cool + "" + "this name is in girls function "


}
function boys(){

  console.log(cool + " " + " this name is in boys function ")

  var  boysEl = document.getElementById("demo3")
     boysEl.innerHTML = cool + "     " + " this name is in boys  function !!!!!"



}

if(stuff.girls.includes(cool)){

  girls()


}else if(stuff.boys.includes(cool)){

  boys()

} else("error ")