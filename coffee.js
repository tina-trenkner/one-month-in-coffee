function janInCoffee() {
  const jan = document.getElementById("january").innerHTML;
  const janCoffee = jan.replace("_____ _____ _____ _____", "_____ ____! __!!_ !@@@_");
  document.getElementById("january").innerHTML = janCoffee;
}

function febInCoffee() {
  const feb = document.getElementById("february").innerHTML;
  const febCoffee = feb.replace("_____ _____ _____", "_!!!_ !!!_@ _!!!_");
  document.getElementById("february").innerHTML = febCoffee;
}

setTimeout(function () {janInCoffee()}, 3000)

setTimeout(function () {febInCoffee()}, 4000)
