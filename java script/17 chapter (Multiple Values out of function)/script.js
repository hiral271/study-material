
function getSize(width , height ,depth){

var area = width * height;
var volume = width * height * depth;
var size = [area, volume]
return size ; 


}

var Volume2 = getSize(3,2,3)[0];
var area2 = getSize(3,2,3)[1];

console.log(Volume2)
console.log(area2)

document.getElementById("demo1").innerHTML = "The answer is  : " + Volume2 ;
document.getElementById("demo2").innerHTML = "The answer is  : " + area2 ; 