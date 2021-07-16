console.log(document.body.children)



mainDiv = document.getElementById("main")
articlesEl = document.getElementById("articles")


console.log(document.body.children[0])



buttonEl = document.getElementById("button")

buttonEl.addEventListener("click",function(){

    mainDiv.children[0].style.backgroundColor = "yellow"
    mainDiv.children[1].style.backgroundColor = "green"


})

rootEl = document.getElementById("root")


rootEl.addEventListener("click",function(){

  articlesEl.children[0].style.fontSize = "50px";  


})

console.log(document.body.children[1])

console.log(document.body.children[2])

colorEl = document.getElementById("color")
boxEl= document.getElementById("box")


boxEl.addEventListener("click",function(){

   colorEl.style.width = "300px"

})


picEl = document.getElementById("pic")
clickEl = document.getElementById("click")


clickEl.addEventListener("click",function(){

picEl.style.display = "block"

})