var today =new Date();
var hourNow= today.getHours();
var greeting;


if(hourNow < 18){
greeting= "good evening!!!!"
}else if (hourNow > 12){
greeting="good afyternoon"
}else if(hourNow > 0){
    greeting="good morning"
}else{
    greeting="welcome"
}

document.write('<h1>'+ greeting   + '<br>' + today    + '</h1>')