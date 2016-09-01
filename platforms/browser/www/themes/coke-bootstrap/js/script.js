

// click outside spy
   // $("#refresh-button").on("click", function () {
     //   $(".container").addClass("animated slideInRight");
    //});// end click outside spy
$( document ).ready(function() {
    setTimeout(myFunction, 3000);
    function myFunction() {
        $("#feedback").hide(100);
    }

});

//   $(".container").addClass("animated slideInRight");
//});// end click outside spy




$(function() {
    $("img.lazy").lazyload({
        event : "sporty"
    });
});

$(window).bind("load", function() {
    var timeout = setTimeout(function() { $("img.lazy").trigger("sporty") }, 5000);
});