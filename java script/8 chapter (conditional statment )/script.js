// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = (x < 25);
var expression2 = (x >= 50);
var y = 100;
// Write Your JavaScript Code Here
 expression4 = (x<y)

//"True ✅ True ✅"  both true 

var expression3 = expression4 || expression2
console.log(expression3)

if(expression3 === true){
    coolEl=document.getElementById("cool")
        coolEl.textContent =  " "  + "True ✅ True ✅"
    
}else{
    "this one not working"
}

// "True ✅ False ❌"

var expression5 = expression4 && expression1
console.log(expression5)

if(expression5 == false){
    coolEl=document.getElementById("cool2")
        coolEl.textContent =  " "  + "True ✅ False ❌"
    
}else{
    "this one not working"
}

// "False ❌ True ✅"

var expression6 = expression1 || expression2
console.log(expression6)

if(expression6 !== false){
    coolEl=document.getElementById("cool3")
        coolEl.textContent =  " "  + "False ❌ True ✅"
    
}else{
    "this one not working"
}

// "False ❌ False ❌"

var expression7 = expression1 && expression4
console.log(expression7)

if(expression7 === false){
    coolEl=document.getElementById("cool4")
        coolEl.textContent =  " "  + "False ❌ False ❌"
    
}else{
    "this one not working"
}