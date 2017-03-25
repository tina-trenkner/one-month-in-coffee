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
 const marCoffee = mar.replace("_____ _____ _____ _____", "_!!!! _!!__ __!__ _@__! ");
 document.getElementById("march").innerHTML = marchCoffee;
}

setTimeout(function () {janInCoffee()}, 3000)
setTimeout(function () {febInCoffee()}, 5000)
setTimeout(function () {marchInCoffee()}, 7000)

//onLoad then execute function that takes a letter, hides it, then changes it
//or use string.replace() somehow
//or put each day in a span and change what's in the span tags
