// there are three type of built in objects 
// Browser Object Model
// Document object Model 
// Global Oblect Model 



//=====================(  this )===================================//

console.log("this  : it will give you same results as window : check line no 14 ")
console.log(this)

//=========================(Browser Objects Model )==================//

// Browser Object Models 
console.log("Browser Object Models : ")
console.log(window)
// this will show you all information of current web page or tab 

console.log("this will show you all information of current web page or tab  :")
console.log(window.document)
// this one will show Current page 

console.log("Pages in Browser History :")
console.log(window.history)

console.log("URL of current page : ")
console.log(window.location)
// this one will show URL of this page 

console.log("information about browser : ")
console.log(window.navigator)
// this one will show information about browser 

console.log("device's display information : ")
console.log(window.screen)
// this will show information about screen we are using 

// console.log(window.print()) // this will show how you can see the print for the page 
// i comment it out cause it appearce as you reload the page 


console.log(window.screen.width)
// width of the page 
//-------------------------------------------------------------------------------------/////

 //=====================//Document Object Model (DOM)=============================== //

console.log(document.lastModified)
// last time doccument got modlified 

console.log("document.body: ");
console.log( document.body);
// this will show doccuments body what written code between HTML bodu tag 


console.log("document.head ; this will show head tag contain code in Html ")
console.log(document.head)
// code between head tags 



//============================(Global Java script Model )========================================//


// the global objects do not from a single model .they are a group of individual objects that relate to diffrent part of js launguage 
//the nam eof global object usally in capital  letter     eg ; String , Date 

// *  STRING -- string value 
// *  NUMBER  --- number value
// *  BOOLEAN  --- boolean value 

//--- object work with real world concepts 

//*  DATE  --- represent  and handle date
//* MATH  ---  for working with number and calculation
//* REGEX  --- for matching patterns within string of text 

 var hotel = " hello brother"
  var a = hotel.toUpperCase()

document.write(a)

//------------------
var math = Math.PI 

console.log(math)

//------------------
















// console.log(window) //
// console.log(document.body.children[6])


 var coolEl = document.getElementById("hey")

coolEl.addEventListener("click", function(){

    coolEl.style.color="red"
})

