// isEqual using function declaration
function declaration(a,b){
  if(a === b){
    console.log("equals in  type and value ")
  }else if(a == b){
    console.log("equals in  value ")
  }else{
    console.log("is not equals ")
  }
}

// *  Logs "They are equal in type and value"

declaration(10,10);
// you can change value of function
//without changing all function 


// * Logs "They are equal in value"
declaration(10,"10");
//value is changed 

// * is not equals 
declaration(10,0);
//value is changed 

// declaration function used when you wanna change the value often in codes 
// without changing function value can be manuplated 

// * Using function expression

var a = 10;
var b = 10;

var expression = function(){
  if(a === b){
    console.log("equals in  type and value ")
  }else if(a == b){
    console.log("equals in  value ")
  }else{
    console.log("is not equals ")
  } 
} 

expression();
expression();// we cant change value in expresstion function 
// its stay they same during all codes its like stuck with same value 
