function janInCoffee() {
  const jan = document.getElementById("january").innerHTML;
  const janCoffee = jan.replace("_____ _____ _____ _____", "_____ ____! __!!_ !@@@_");
  document.getElementById("january").innerHTML = janCoffee;
}

function febInCoffee() {
  const feb = document.getElementById("february").innerHTML;
  const febCoffee = feb.replace("_____ _____ _____ _____", "_!!!_ !!!_@ _!!!_ __!!_");
  document.getElementById("february").innerHTML = febCoffee;
}

function marInCoffee() {
 const mar = document.getElementById("march").innerHTML;
 const marCoffee = mar.replace("_____ _____ _____ _____ _____", "_!!!! _!!__ __!__ _@__! @!!!!");
 document.getElementById("march").innerHTML = marCoffee;
}

function aprInCoffee() {
 const apr = document.getElementById("april").innerHTML;
 const aprCoffee = apr.replace("_____ _____ _____ __", "!_!__ @____ __!!! __");
 document.getElementById("april").innerHTML = aprCoffee;
}

setTimeout(function () {janInCoffee()}, 3000)
setTimeout(function () {febInCoffee()}, 5000)
setTimeout(function () {marInCoffee()}, 7000)
setTimeout(function () {aprInCoffee()}, 9000)

//onLoad then execute function that takes a letter, hides it, then changes it
//or use string.replace() somehow

//Could likely refactor by putting the strings into an array and running a loop. Haven't quite thought this through, but the functions are clearly formulaic.
//or put each day in a span and change what's in the span tags
