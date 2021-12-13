
 var counterEl = document.getElementById("counter")
 var addEl =document.getElementById("add")
 var subtractEl =document.getElementById("subtract")

var number = localStorage.getItem("key")

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

