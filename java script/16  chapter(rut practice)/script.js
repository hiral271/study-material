//WRITE YOUR CODE BELOW
        

        var customerOrder = {
            drink: "coffee",
            sugars: 3,
            status: true,
            spoon : 2,

        };



console.log(customerOrder)

function coffeReady(){
 
    if(customerOrder.status === true){

        console.log("hey !!!! coffe is ready with "   + customerOrder.sugars + " " +  "sugar spoon and  "    + " " + "with " + customerOrder.spoon +" "+  customerOrder.drink)
    
    }else{

        console.log("its not ready !!!!!! ")
    }


}
coffeReady();