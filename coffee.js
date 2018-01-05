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
 const aprCoffee = apr.replace("_____ _____ _____ _____", "!_!__ @____ __!!! __!!!");
 document.getElementById("april").innerHTML = aprCoffee;
}

function mayInCoffee() {
 const may = document.getElementById("may").innerHTML;
 const mayCoffee = may.replace("_____ _____ _____ _____" , "*_!_! !!!__ !!__! !!_!! !!!!!");
 document.getElementById("may").innerHTML = mayCoffee;
}

function junInCoffee() {
 const jun = document.getElementById("june").innerHTML;
 const junCoffee = jun.replace("_____ _____ _____ _____" , "!!_!! _@@!! __!!_ ___!_");
 document.getElementById("june").innerHTML = junCoffee;
}

function julInCoffee() {
 const jul = document.getElementById("july").innerHTML;
 const julCoffee = jul.replace("_____" , "_!!__");
 document.getElementById("july").innerHTML = julCoffee;
}

setTimeout(function () {janInCoffee()}, 3000)
setTimeout(function () {febInCoffee()}, 5000)
setTimeout(function () {marInCoffee()}, 7000)
setTimeout(function () {aprInCoffee()}, 9000)
setTimeout(function () {mayInCoffee()}, 11000)
setTimeout(function () {junInCoffee()}, 13000)
setTimeout(function () {julInCoffee()}, 15000)

//onLoad then execute function that takes a letter, hides it, then changes it
//or use string.replace() somehow

//Could likely refactor by putting the strings into an array and running a loop. Pretty sure this needs to be in a loop.

//In order to work on each individual character, will be looking into integratign blast.js

// At index in string:
-fadeout()
-replace index with new character
