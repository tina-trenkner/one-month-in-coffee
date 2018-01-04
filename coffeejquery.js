$(document).ready(function(){
  jan2();
  setTimeout(jan3, 1000);
  setTimeout(jan4, 3000);
  setTimeout(noCoffee, 5000);

})

function jan2() {
  $("#one").fadeOut(300);
  $("#one").fadeIn(300);
  $("#one").fadeOut(300);
  $("#one").hide(500, showCoffee);
}

function jan3() {
  $("#two").fadeOut(300);
  $("#two").fadeIn(300);
  $("#two").fadeOut(300);
  $("#two").fadeIn(300);
  $("#two").fadeOut(300);
  $("#two").hide(1000, showTwoCoffee);
}


function jan4() {
  $("#three").fadeOut(300);
  $("#three").fadeIn(300);
  $("#three").fadeOut(300);
  $("#three").fadeIn(300);
  $("#three").fadeOut(300);
  $("#three").hide(1000, showThreeCoffee);
}

function showCoffee() {
  var one = document.getElementById("one").innerHTML;
  const oneCoffee = one.replace("_", "!");
  document.getElementById("one").innerHTML  = oneCoffee;
  $("#one").show()
}

function showTwoCoffee() {
   var two = document.getElementById("two").innerHTML;
  const twoCoffee = two.replace("_", "@");
  document.getElementById("two").innerHTML  = twoCoffee;
  $("#two").show()
}

function showThreeCoffee() {
   var three = document.getElementById("three").innerHTML;
  const threeCoffee = three.replace("_", "#");
  document.getElementById("three").innerHTML  = threeCoffee;
  $("#three").show()
}

function noCoffee() {
  $("#none").fadeOut(300);
  $("#none").fadeIn(300);
  $("#none").fadeOut(300);
  $("#none").fadeIn(300);
}
