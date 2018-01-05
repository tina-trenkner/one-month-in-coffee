$(document).ready(function(){
  oct30();
  setTimeout(oct31, 1000);
  // setTimeout(nov1, 2000);
  // setTimeout(nov2, 3500);
  // setTimeout(nov3, 4000);
  // setTimeout(nov4, 5000);
  // setTimeout(nov7, 6000);
  // setTimeout(nov8, 7000);
  // setTimeout(nov9, 8000);
  // setTimeout(nov10, 9000);
  // setTimeout(nov11, 10000);
  // setTimeout(nov14, 11000);
  // setTimeout(nov15, 12000);
  // setTimeout(nov16, 13000);
  // setTimeout(nov17, 14000);
  // setTimeout(nov18, 15000);
  // setTimeout(nov21, 16000);
  // setTimeout(nov22, 17000);
  // setTimeout(nov23, 18000);
  // setTimeout(nov24, 19000);
  // setTimeout(nov25, 20000);
  // setTimeout(nov28, 21000);
  // setTimeout(nov29, 22000);
  // setTimeout(nov30, 23000);
  // setTimeout(nov31, 24000);
  // setTimeout(dec1, 25000);
})

function oct30() {
  $("#oct30").fadeOut(300);
  $("#oct30").fadeIn(300);
  $("#oct30").fadeOut(300);
  $("#oct30").fadeIn(300);
  $("#oct30").fadeOut(300);
  $("#oct30").hide(500);
  $("#oct30").show("fast", showOct30Coffee);
}

function oct31() {
  $("#oct31").fadeOut(300);
  $("#oct31").fadeIn(300);
  $("#oct31").fadeOut(300);
  $("#oct31").fadeIn(300);
  $("#oct31").fadeOut(300);
  $("#oct31").hide(500);
  $("#oct31").show("fast", showOct31Coffee);
}

// // function nov1() {
// //   $("#nov1").fadeOut(300);
// //   $("#nov1").fadeIn(300);
// //   $("#nov1").fadeOut(300);
// //   $("#nov1").fadeIn(300);
// // }
//
// // function nov2() {
//   // $("#two").fadeOut(300);
//   // $("#two").fadeIn(300);
//   // $("#two").fadeOut(300);
//   // $("#two").fadeIn(300);
// //   // $("#two").fadeOut(300);
// //   // $("#two").hide(1000, showTwoCoffee);
// //   $("#nov2").fadeOut(300);
// //   $("#nov2").fadeIn(300);
// //   $("#nov2").fadeOut(300);
// //   $("#nov2").fadeIn(300);
// // }
//
//
// // function nov3() {
//   // $("#three").fadeOut(300);
//   // $("#three").fadeIn(300);
//   // $("#three").fadeOut(300);
//   // $("#three").fadeIn(300);
//   // $("#three").fadeOut(300);
//   // $("#three").hide(1000, showThreeCoffee);
//   $("#nov3").fadeOut(300);
//   $("#nov3").fadeIn(300);
//   $("#nov3").fadeOut(300);
//   $("#nov3").fadeIn(300);
//   $("#nov3").fadeOut(300);
//   $("#nov3").hide(500);
//   $("#nov3").show("fast", showNov3Coffee);
// }
//
// function nov4 () {
//   $("#nov4").fadeOut(300);
//   $("#nov4").fadeIn(300);
//   $("#nov4").fadeOut(300);
//   $("#nov4").fadeIn(300);
// }
//
// function nov7 () {
//   $("#nov7").fadeOut(300);
//   $("#nov7").fadeIn(300);
//   $("#nov7").fadeOut(300);
//   $("#nov7").fadeIn(300);
// }
//
// function nov8() {
//   $("#nov8").fadeOut(300);
//   $("#nov8").fadeIn(300);
//   $("#nov8").fadeOut(300);
//   $("#nov8").hide(500, showCoffee);
// }
//
// function jan10() {
//   $("#jan10").fadeOut(300);
//   $("#jan10").fadeIn(300);
//   $("#jan10").fadeOut(300);
//   $("#jan10").fadeIn(300);
// }
//
// function jan11() {
//   $("#jan11").fadeOut(300);
//   $("#jan11").fadeIn(300);
//   $("#jan11").fadeOut(300);
//   $("#jan11").fadeIn(300);
// }
//
// function jan12() {
//   $("#jan12").fadeOut(300);
//   $("#jan12").fadeIn(300);
//   $("#jan12").fadeOut(300);
//   $("#jan12").fadeIn(300);
// }
//
// function jan13() {
//   $("#jan13").fadeOut(300);
//   $("#jan13").fadeIn(300);
//   $("#jan13").fadeOut(300);
//   $("#jan13").hide(500);
//   $("#jan13").show("fast", showJan13Coffee);
// }

// function oct31() {
//   $("#oct31").fadeOut(300);
//   $("#oct31").fadeIn(300);
//   $("#oct31").fadeOut(300);
//   $("#oct31").fadeIn(300);
//   $("#oct31").fadeOut(300);
//   $("#oct31").hide(500);
//   $("#oct31").show("fast", showOct31Coffee);
// }



function showOct30Coffee() {
  const two = document.getElementById("oct30").innerHTML;
  const twoCoffee = two.replace("_", "@");
  document.getElementById("oct30").innerHTML  = twoCoffee;
  $("#oct30").show()
}

function showOct31Coffee() {
  const two = document.getElementById("oct31").innerHTML;
  const twoCoffee = two.replace("_", "@");
  document.getElementById("oct31").innerHTML  = twoCoffee;
  $("#oct31").show()
}
//
// function showNov3Coffee() {
//    var two = document.getElementById("nov3").innerHTML;
//   const twoCoffee = two.replace("_", "@");
//   document.getElementById("nov3").innerHTML  = twoCoffee;
//   $("#nov3").show()
// }
//
// function showNov8Coffee() {
//   var one = document.getElementById("nov8").innerHTML;
//   const oneCoffee = one.replace("_", "!");
//   document.getElementById("nov8").innerHTML  = oneCoffee;
//   $("#nov8").show();
// }
//
// function showThreeCoffee() {
//    var three = document.getElementById("three").innerHTML;
//   const threeCoffee = three.replace("_", "#");
//   document.getElementById("three").innerHTML  = threeCoffee;
//   $("#three").show()
// }
//
// function noCoffee() {
//   $("#none").fadeOut(300);
//   $("#none").fadeIn(300);
//   $("#none").fadeOut(300);
//   $("#none").fadeIn(300);
// }
