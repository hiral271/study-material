var msg ='<h1> page Title : ' + document.title + '</h1>';
msg += '<h2> page Adress : ' + document.URL + '</h2>'
msg += ' <h1> last modlified : ' + document.lastModified + '</h1>'

var demoEl = document.getElementById("demo").innerHTML = msg; 



 //--------------------------------------------------////

 var saying = "Home Sweet Home "

 var demoEl  = "<h2> length : " + saying.length + "</h2>";
 demoEl  += "<h2>upperCase  : " + saying.toUpperCase() +"</h2>"
 demoEl += "<h2>lowerCse : "  + saying.toLowerCase() + "</h2>"
 demoEl += "<h2>first ee  : " + saying.indexOf("ee") + "</h2>"
 demoEl += "<h2>charactor index : " + saying.charAt(12) + "</h2>"
 demoEl += "<h2>last ee  : " + saying.lastIndexOf("e") + "</h2>"
 demoEl += "<h2>charactor index : " + saying.substring(8,12) + "</h2>"
 demoEl += "<h2>replace : " + saying.replace("me","w") + "</h2>"

  console.log(demoEl)


  var sayingEl = document.getElementById("demo2").innerHTML = demoEl ;