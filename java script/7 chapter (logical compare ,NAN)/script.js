var a = "50";
var b = 50;
var c = 100;
var d = c % b;
var e = c / 2;

var expression1 = (b === e);
var expression2 = (e > d);

// Use comparison operators so all expressions below log to the console as true
console.log(expression1)
console.log(expression2)
console.log(expression1 == expression2)

// Use logical operators so all expressions below log to the console as true
// false comparison 

var expression4 = (c < b)
console.log(expression4)

// this means "this or this is true .it show true if one ofthem is true "
//this means or 
var expression5 = (c < b ||e > d)
console.log(expression5)

// && neans both are true 
//or both rae false 
//one of this is false then it will show false 
// c>b is true 
// but e<d is false so it will show false 
var expression5 = (c > b && e < d)
console.log(expression5)



// NAN IS " not a number "

//logical comparison for NAN 
var g = "hello";
var f = 10;
var h = g * f
function answer() {

    if (isNaN(h)) {

        console.log("this eqation is NAN")
    } else {
        console.log("this eqation is not NAN ")
    }

}
answer();

// new 
var l = 10;
var m = 10;
var n = l * m
function answer2() {

    if (!isNaN(n)) {

        console.log("this eqation with  number")
    } else {
        console.log("this eqation is without number ")
    }

}
answer2();