$(document).on("ready", function(){
  inspirationListener();

})

function inspirationListener(){
  $(".card").click(function(){
    $(this).children().toggle();
  })
}
