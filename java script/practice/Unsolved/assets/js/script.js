changeEl = document.getElementById("change")
backEl = document.getElementById("back")


/// this function is for onload event  /////

function pop(){

confirm("loooks !!!! its worksssss!!!!  ")


}


/// THIS event is for preventdefault if you see submit button is not working 
//// try to click the link it will not appear cause we disable it with prevent default



changeEl.addEventListener("click",function(event){

    event.preventDefault()
    

})

document.getElementById("link").addEventListener("click",function(event){


    event.preventDefault()
    


})


/// this function is for onclick event ////
/// if you try to click on input box it will change the color ///


function color(){

backEl.style.backgroundColor = "yellow"


}

