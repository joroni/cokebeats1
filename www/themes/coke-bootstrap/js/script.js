// click outside spy
// $("#refresh-button").on("click", function () {
//   $(".container").addClass("animated slideInRight");
//});// end click outside spy
$(document).ready(function () {
    setTimeout(myFunction, 3000);
    function myFunction() {
        $("#feedback").hide(100);
    }

});



/*var thePassWord = $("#user-pass1").value();
$("#SignIn-btn").on("click", function () {

   $("#user-pass").value(thePassWord);
});


$("#go-login").on("click", function () {

    $("#userpass").value(thePassWord);
});
*/


$(function () {
    $(".lazy").lazyload({
        event: "sporty"
    });
});

$(window).bind("load", function () {
    var timeout = setTimeout(function () {
        $(".lazy").trigger("sporty")
    }, 5000);
});