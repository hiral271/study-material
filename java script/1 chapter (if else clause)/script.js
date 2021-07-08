// var today =new Date();
// var hourNow= today.getHours();
// var greeting;


// if(hourNow < 18){
// greeting= "good evening!!!!"
// }else if (hourNow > 12){
// greeting="good afyternoon"
// }else if(hourNow > 0){
//     greeting="good morning"
// }else{
//     greeting="welcome"
// }

// document.write('<h1>'+ greeting   + '<br>' + today    + '</h1>')

var okk = new Date();
var time = okk.getHours();
var quote = ""



if(time < 12){

    quote = "hello!!! its morning"
}else if (time < 18) {
    

    quote = "hello !!! its afternoon"
}else  if(time < 24){
    quote = "its nignt !!!! "
}

document.write("<h1>" + quote + okk +"</h1>")