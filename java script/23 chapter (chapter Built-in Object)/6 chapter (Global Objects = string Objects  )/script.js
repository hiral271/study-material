                     //////  concat() //////

function demo(){

    var string = "hello !!! "
    var string2 = " Welcome to My web page"

// write concat to join two string in one line 
    var res = string.concat(string2);

// you can use innnerHTML to get text on windows page 
    document.getElementById("demo").innerHTML = res ;

    console.log(res)
}

demo();

var x = "hello !!!  ";
var y = "Hiral";
var z = x.concat(y);


document.getElementById("demo2").innerHTML = z;

                   //////   indexof() //////


function index(){

    var str = "hello !!! welcome to my world";

// to get array number of the string use indexof 
// like if you wnna change the string without changing the whole string 
// you can cheack first its index number 

    var num = str.indexOf("welcome")

document.getElementById("demo3").innerHTML = num ;

}
index();

var str2 = "my name is hiral pankaj patel";
var num2 = str2.indexOf("pankaj");

document.getElementById("demo4").innerHTML = num2 ;


                /////   join() //////


var cool =   ["Being cool ","is being your","own self" , "not doing something","that someone else"  ,"is telling you to do."];
var quote = document.getElementById('join');
quote.innerHTML = cool.join();

function coolquote(){

// to join whole array of string into one string 
// it will show one string 
// you will see its like "“Sometimes , I go crazy and, mad.”"
// as one line 

var x = ["“Sometimes ", "  I go crazy and"," mad.”"];


var y = document.getElementById("join2");
y.innerHTML = x.join();


}
 coolquote();             

             /////////// lastindexof()  ////////////


var str3 = "my name is hiral pankaj patel";
var num3 = str3.lastIndexOf("patel");
                                    
document.getElementById("demo5").innerHTML = num3 ;
console.log(num3)             


                  ////// pop() //////////



 var line = ["Being cool ","is being your","own self" , "not doing something","that someone else"  ,"is telling you to do."];
document.getElementById("pop").innerHTML= line 


function button(){

    

line.pop()
document.getElementById("button").innerHTML = line ;


}
button();


 // ---------------------------------------------------------


var list = ["Hiral  "  , "Mohan  "  , "Denish  "  , "Khusbu  "  , "vishu  " , "Banana", "Orange", "Apple", "Mango"];
document.getElementById("listEl").innerHTML = list ;

function last(){

list.pop()
document.getElementById("listEl").innerHTML= list ;


}

last();


                    ///////  push() //////////

// push will always add array in to last one                     
  var look = ["HIRAL","SHYAMU"];
 document.getElementById("look").innerHTML= look ;

function push(){

look.push("SHYAMLYAA ")
document.getElementById("pushText").innerHTML= look ;

}

push();