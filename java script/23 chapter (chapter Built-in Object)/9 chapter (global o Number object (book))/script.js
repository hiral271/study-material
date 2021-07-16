
//==========  isNan()=======================//

var nun = 3;

if(nun==isNaN()){

    document.getElementById("isnan").innerHTML = ("not a number")

}else {
    document.write("is a  number")  
}

// when coder wanan see the value is define is number or string 
// isNan() is best way to see 



//=================  tofixed()===================//


//toFixed() returns a string representation of numObj that does 
//not use exponential notation and has exactly digits digits after the decimal place. The number is rounded if necessary, and the fractional part is padded with zeros if necessary so that it has the specified length. If the absolute value of numObj is greater or equal to 1e+21, this method calls Number.prototype.toString() and returns a string in exponential notation.

var a = 12.3456;

var n = a.toFixed(2)

isfixedEl = document.getElementById("isfixed").innerHTML = n ;

var m = a.toFixed(3)

isfixedEl2 = document.getElementById("isfixed2").innerHTML = m ;

//=================  toPrecision() =============================//

//The toPrecision() method formats a number to a specified length.

var k = 12.9363784;
var j = k.toPrecision(2)

kEl = document.getElementById("toPrecision")
kEl.innerHTML = j

// the as number shown in( ) will be shown in answer 
//example :if toPrecision(3) and number is 123.455  ans : 123
// for same example if i write toPrecision(2) then  will be ans : 12
// and it also follow maths rules for exponents 
//  if number after (.) period is grater then 6 it will show the last number before grater then it actual is 
// example :if number is 13.45 it will show 13 // if number is 13.78 it will show 14 

var o = 123.4363784;
var p = o.toPrecision(3)

oEl = document.getElementById("toPrecision2")
oEl.innerHTML = p


  //======================= toExponent()=========================//

  var h = 13.4;
var j = h.toExponential()

hEl = document.getElementById("toexponential")
hEl.innerHTML = j;

