var hotel = {
  name : "Quay",
  room :40,
  booked : 25,
 
   checkAvaibility: function(){

    return  this.room - this.booked
    

   }


}

var elName = document.getElementById("demo")
elName.textContent = hotel.name 


