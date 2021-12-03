var checkboxEl = document.getElementById("myCheckbox")
var helloEl = document.getElementById("hello")
var picEl = document.getElementById("pic")
var paraEl = document.getElementById("para")




checkboxEl.addEventListener("click",function(event){

event.preventDefault()


})


helloEl.addEventListener("click",function(event){

    picEl.style.display = "block"
    paraEl.style.display = "block"

})


