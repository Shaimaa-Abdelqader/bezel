
//loading screen
$(document).ready(function(){
    $("#loading").fadeOut(2500);
    $(".sk-folding-cube").fadeOut(2500 , function(){
        $("html").css("overflow" , "auto");
    })
  })
//wow.js fire function
new WOW().init();
