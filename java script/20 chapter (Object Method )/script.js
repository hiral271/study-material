chosenPet = "Rocky";

pet ={

  dogs: ["Mackie", "Bernice", "Cookie Monster", "Spot"],
  cats: ["Astrid", "Rocky","Lulu", "Fluffy", "Mouser"],

    apptMessage: function () {
      console.log("Email us at meetafriend@waywardpets.com to make an appointment to meet your new friend.");
    }
}


function dog(){

  console.log("we have this pet"  + "   "+ chosenPet  + " in dog list " )
  pet.apptMessage()
}

function cat(){

  console.log(" we have this cat pet " + "   " + pet.cats[1]  + "in cat list " )
  pet.apptMessage()
}


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



