var viewEl = document.getElementById("view")
var coolEl = document.getElementById("cool")
var buttonEl = document.getElementById("click")

buttonEl.addEventListener("click", function () {



  function myFunction(){


    viewEl.innerHTML = "Wait !!!!  Picture will be Appear Soon ";

         setInterval(() => {
            
       coolEl.style.display ="block";
       
       


         }, (3000));


  }

  myFunction()

})

