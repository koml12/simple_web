$(document).ready(function(){
  $("#like").click(function(){
    $("h1").removeClass();
    $("h1").addClass("text-blue");
  });
  $("#dislike").click(function(){
    $("h1").removeClass();
    $("h1").addClass("text-red");
  });
});
