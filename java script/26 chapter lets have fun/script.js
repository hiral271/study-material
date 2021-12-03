// var buttonEl = document.getElementById("button")
// var boxEl = document.getElementById("box")




// setInterval(()=>{

//     boxEl.style.backgroundColor = "yellow"

// alert("  what thew heck !!!!  ")

// },3000)

boxEl = document.getElementById("box")

switchEl = document.getElementById("switch")

mode = "dark"

switchEl.addEventListener("click",function(){


if(mode ==="dark"){

mode = "light"
boxEl.setAttribute("class","light")

}else{

  mode = "dark"
  boxEl.setAttribute("class","dark")

}



})