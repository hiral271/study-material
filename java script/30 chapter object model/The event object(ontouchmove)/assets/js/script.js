                            //--------   ontouchmove  -----//

// The touchmove event occurs when the user moves the finger across the screen.
// The touchmove event will be triggered once for each movement, and will continue to be triggered until the finger is released.
// you can use touchstart ,touchend ,touchcancel 


function myFunction(event){

var x = event.touches[0].clientX;
var y = event.touches[0].clientY;

document.getElementById("demo").innerHTML = x  + "in x ways "; 
document.getElementById("demo2").innerHTML = y  + "in y ways ";

}


function  imageFunction(event){

var a = event.touches[0].clientX;

document.getElementById("color").innerHTML = "this is from picture " + a ;

}


// 