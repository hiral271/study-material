
// we declare function 
function fname(first,last){

var a = first +"   "+ last


// if we return value of a it will be stored 
// the next function var 
// or defined next key 
// like in this case its "newKey"  
console.log(a)
return a ;

}

var newKey= fname("hiral","patel")

document.write(newKey)

//this console shows that the new value is now stored in nex key or var name 
console.log(newKey)

// now we can manipulate the value we get from this returns 


//-------------------------------------------------------------------------------------------------//

// function declration 
function sum(math,sc,eng){

var subject = math + sc + eng

//we return subject 

return subject ;


}

// return saved in per 
// and we are giving peramiters of total to per function 
// so value is saved in total 
function per(total){

//we can use value of return to any function      
var percetage = total/300 * 100 

// we return percetage here 
return percetage

}
// now value of percentage is saved in total 
// we declare peramiters value in sum so now 
// total has peramiters and value of percentages
// to see the value now we should use var total 
var totalEl = sum(22,65,75);

var demoEl = document.getElementById("demo")
demoEl.innerHTML = totalEl


console.log(totalEl)

