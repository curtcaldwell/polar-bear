$(document).ready(function() {
  $(".clickable").click(function() {
    console.log("LJFGLKSFGLKGKSG");
    $("#bear-showing").toggle();
    $("#bear-hidden").toggle();
  });
  $("button#green").click(function() {

    $("body").toggleClass("green-background");

    });
    $("button#yellow").click(function() {

  $("body").toggleClass("yellow-background");
});
$("button#red").click(function() {

  $("body").toggleClass("red-background");
});
});
