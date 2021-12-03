var submitEl = document.getElementById("submit")
var nameInput = document.getElementById("name")
var emailInput = document.getElementById("email")
var responseEl=  document.getElementById("response")


submitEl.addEventListener("click",function(event){
event.preventDefault();

responseEl.textContent="  Thank you for your submittion  "+
 nameInput.value  + " welcome ,to reach out to you "
+ emailInput.value + ".";


});
 submitEl.addEventListener("click" ,submitEl);



