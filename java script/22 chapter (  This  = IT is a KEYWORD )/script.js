var width = 600; /// global variable 
var shape = { hight: 300 }; // object in litral notation 

var showWidth = function () {


 var  showEl =  document.getElementById("demo2")
 showEl.innerHTML = " this is the answer  : "+ this.width * shape.hight
  
  
  



}

showWidth()
//======================================================================================








// this notation are used for describing function name like this functions's width 
//this function's hight 
// insted of giving it as name like shape.width we can use this.width 
// its like full sentence as this shape function 's width 
// this.width 