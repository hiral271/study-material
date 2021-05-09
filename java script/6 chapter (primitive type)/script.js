
var sign = "Morgage house ";
var rate = 5;
var totalTile = 14;
var subtotal = totalTile * rate;
var shipping= 7;
var grand =  shipping +  subtotal ;

var ValEl = document.getElementById('content')
ValEl.textContent = '' + sign

var tileEl = document.getElementById('tile')
tileEl.textContent = '' + totalTile

// you can give el name as according as you required 

//like you can give tileEl or elTile as per as you prefered 

var subtotalEl = document.getElementById('subtotal')
subtotalEl.textContent = '' + subtotal

var shippingEl = document.getElementById('shipping')
shippingEl.textContent = '' + shipping

var grandEl = document.getElementById('grand')
grandEl.textContent = '' + grand