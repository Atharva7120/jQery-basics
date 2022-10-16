 $("h1").html("Bye..");
//document.querySelector("h1").style.color = "red";
$("a").attr("href","https://www.google.com");

$("button").click(function(){
  $("h1").css("color","purple");
});
$(document).keypress(function(){
  $("h1").text(event.key);
});
$("button").on("click",function(){
  $("h1").toggle();
});
