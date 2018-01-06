$(document).ready(function() {
  $("span").each(function () {
    if ($(this).hasClass("three")) {
      showThreeCoffees();
    } else if ($(this).hasClass("two")) {
      showTwoCoffees();
    } else if ($(this).hasClass("one")) {
      showOneCoffee();
    } else {
      showNoCoffee();
    }
  }
)
}
)

function showThreeCoffees() {
  const three = document.getElementsByClassName("three")[0].innerHTML;
  const threeCoffee = three.replace("_", "#");
  document.getElementsByClassName("three")[0].innerHTML  = threeCoffee;
  $(".three").show()
}

function showTwoCoffees() {
  const two = document.getElementsByClassName("two")[0].innerHTML;
  const twoCoffee = two.replace("_", "@");
  document.getElementsByClassName("two")[0].innerHTML  = twoCoffee;
  $(".two").show()
}

function showOneCoffee() {
  const one = document.getElementsByClassName("one")[0].innerHTML;
  const oneCoffee = one.replace("_", "!");
  document.getElementsByClassName("one")[0].innerHTML  = oneCoffee;
  $(".one").show()
}

function showNoCoffee () {
    $(".none").fadeOut(300);
    $(".none").fadeIn(300);
    $(".none").fadeOut(300);
    $(".none").fadeIn(300);
}
