var total_questions=0;
var currentQuestion=-1;

$.mobile.page.prototype.options.domCache= true;

$('li').live('click', function(){
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
});
function onDeviceReady() {
    sql();
    currentQuestion = parseInt(window.localStorage.getItem('currentQuestion'),10);
    window.localStorage.setItem("currentQuestion",currentQuestion + 1);
    db.transaction(getQuestions, transaction_error);
}


$('.small-button').live('click', function(e) {
    var q_no = parseInt($(this).attr('data-question-no'),10);
    window.localStorage.setItem("currentQuestion",q_no -1);
    var selected_answer =$("#quest"+ (q_no) + " li.selected");


    if(selected_answer.length === 0)
    {
        e.preventDefault();
        $('#error-display-'+ q_no).text("Please select a choice");
        return false;
    }
    else
    {
        var answer = selected_answer.attr("data-answer-no");
        window.localStorage.setItem("selectedAnswer",answer);
        db.transaction(updateSelectedAnswer,transaction_error);
        if(q_no == total_questions)
        {
            db.transaction(checkResults,transaction_error);
            $.mobile.changePage("#finish")
        }
        else
        {
            $('#error-display-' + q_no).text("");
            $.mobile.changePage("#quest" + (q_no +  1))
        }
    }
});

// PhoneGap is loaded and it is now safe to make calls PhoneGap methods
// document.addEventListener('deviceready', onDeviceReady(), false);