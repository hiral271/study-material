 var hotel = new Object()

 hotel.name= "Hilton";
 hotel.rooms =  120;
 hotel.booked = 77 ;

 hotel.checkAwailablity = function(){
     return this.rooms - this.booked 
 }

var elName = document.getElementById("dev")
elName.textContent = hotel.name;

var roomEl = document.getElementById("demo")
roomEl.textContent = hotel.checkAwailablity()

console.log(hotel.name)


//--------------------------------------------------------------

var park = new Object();

park.name = "National park";
park.awailable = 100;
park.booked = 59;

park.check = function(){
  return  this.awailable - this.booked


}

var nonBooked = document.getElementById("demo2");
nonBooked.textContent = park.name ; 


var checkEl = document.getElementById("demo3");
checkEl.textContent = park.check()