
var instock = true;
var shipping= false;
var greeting = ""

var el = document.getElementById('stock')
el.className=instock;


var elShip = document.getElementById('shipping')
elShip.className=shipping;


if (instock === true){
   console.log("yesss!!!!")
   document.write("yes")
}else {
    console.log("no")
    document.write("no")
}