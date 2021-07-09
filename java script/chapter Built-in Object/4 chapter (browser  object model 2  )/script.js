 //------------------------------(Browser object )---------------------------------------//


 console.log(document.title)                                  
 console.log(document.lastModified)  
 console.log(document.URL)  
 console.log(document.domain)                                           



 //------------------------(Browser Object  Method )------------------------//

// this method we can use to write on browser page 
document.write("this is method for Browser ")


// just document.getelementedby ID is for Browser object rest is for display with id attribute
 document.getElementById("demo").innerHTML= "this method is for browser display "


 // this method is for select all id in browseer page 
var coolEl = document.getElementById("cool")

coolEl.addEventListener("click",function(){

    document.querySelector("#cool").style.backgroundColor = "yellow";


 })


// this method returns list of elements that match a css selector which is specified as perameters
 document.querySelectorAll()


// careate new elements 
 document.createElement()



 //create new text node 
 document.createTextNode()



 
