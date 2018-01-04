$(document).ready(function(){
  $("#one").hide(500);
  $("#one").show(500);
  $("#one").hide(500);
  $("#one").show(500);
  $("#one").hide(1000, showCoffee);

})

function showCoffee() {
   var monday = document.getElementById("one").innerHTML;
  const mondayCoffee = monday.replace("_", "!");
  document.getElementById("one").innerHTML = mondayCoffee;
  $("#one").show()
}
