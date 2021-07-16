

var coolEl = document.getElementById("cool")
var buttonEl = document.getElementById("click")

buttonEl.addEventListener("click", function () {

    coolEl.style.backgroundColor = "yellow";

  function myFunction(){

         setInterval(() => {
             alert("hello !!!! its me ")
         }, (3000));


  }

  myFunction()

})


