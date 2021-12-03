var count = 0

var incrementEl = document.getElementById("increment")
var decrementEl = document.getElementById("decrement")
var countEl = document.getElementById("count")

incrementEl.addEventListener("click",function(){

count++
countPlus()
})



function countPlus(){

    countEl.textContent = count;

}

decrementEl.addEventListener("click",function(){
if(count>0){
    count--
    countPlus()

}else{

    countPlus() 
}
    
    })

    