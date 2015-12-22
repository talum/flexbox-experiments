$(document).on("ready", function(){
  inspirationListener();
  contactListener();
})

function inspirationListener(){
  $(".card").click(function(){
    $(this).children().toggle();
  })
}

function contactListener(){
  $(".more").hover(function(){
    $(".contact").fadeIn("slow");
  })
}