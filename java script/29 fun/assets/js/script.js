var count = 0
var countEl = document.getElementById("count")
var numEl = document.getElementById("num")


buttonEl = document.getElementById("click")


colorEl = document.getElementById("color");


buttonEl.addEventListener("click",function(){

    if(colorEl.style.display === "block"){
        colorEl.style.display = "none"
      }
      else{
        colorEl.style.display = "block"
      }


     

})



numEl.addEventListener("click",function(){

    count++
    countPlus()
    })

    function countPlus(){

        countEl.textContent = count;
    
    }