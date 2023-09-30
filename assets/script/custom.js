$(document).ready(function() {
    $("#comment-form").submit(function(event) {
        event.preventDefault();

        var comment = $("#comment").val();
        var newComment = $("<div class='comment'><strong>" + "User" + ":</strong> " + comment + "</div>");
        $("#comments").append(newComment);

        $("#comment").val("");
    });
});

var userAnswers = {}; 

function displayUserAnswers() {
    console.log("Ответы пользователя:");
    for (var question in userAnswers) {
        if (userAnswers.hasOwnProperty(question)) {
            console.log(question + ": " + userAnswers[question]);
        }
    }
}


jQuery("#p_modal_button3").on("click", function (e) {
    e.stopPropagation();
    jQuery("#p_modal3").modal("hide");
    userAnswers["Вопрос 1"] = jQuery("#p_modal1").val();
    userAnswers["Вопрос 2"] = jQuery("#p_modal2").val();
    userAnswers["Вопрос 2"] = jQuery("#p_modal3").val();
    userAnswers["Вопрос 2"] = jQuery("#p_modal4").val();
    displayUserAnswers(); 
});
