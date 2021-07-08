// Objects are a collection of properties
var planet = {
    // Properties are made up of key-value pairs
    name: "Earth",
    age: "4.543 billion years",
    moons: 1,
    isPopulated: true,
    population: ["7.594 billion","5.528 billion"]
  };

  console.log(planet.name);


  document.getElementById("demo").innerHTML = planet.name ;
 var c = document.getElementById("demo2").innerHTML = planet.isPopulated ;

  
  var propname ="population";
console.log(planet[propname]);

document.getElementById("demo3").innerHTML = planet.population[1] ;

console.log( planet.population[0] )


 