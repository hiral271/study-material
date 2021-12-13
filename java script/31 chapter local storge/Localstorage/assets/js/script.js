
 var counterEl =document.getElementById("counter")
 var addEl =document.getElementById("add")
 var subtractEl =document.getElementById("subtract")

 
var number = localStorage.getItem("key")
// localstorage.getitem is for get information which we stored in local storage
// we can use this information to reflect on page 
// we stored information in count check inspect<application<localstorage<key
// we set count as key and number 
//  **   localStorage.setItem("count",number)  **


 counterEl.textContent = number ;

 addEl.addEventListener("click",function(){
   
    
    if(number < 24){
        number++
        counterEl.textContent = number ;
        localStorage.setItem("key",number)
    }
 })

 subtractEl.addEventListener("click",function(){

   if(number > 0){
       number--
       counterEl.textContent= number;
       localStorage.setItem("key",number)
   }


 })

 console.log(number)


 