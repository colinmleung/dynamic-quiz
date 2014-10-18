$("document").ready(function(){
	//questions and answers
	var allQuestions = [{question:"Who is Prime Minister of the United Kingdom?", choices:["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswer: 0},{question:"Question2", choices:["Choice1", "Choice2", "Choice3"], correctAnswer: 2}];

	var score = 0;
	var questionIndex = 0;

	//show first question
	setUpQuestions(allQuestions, questionIndex);

	$("#next").click(function() {

    // validate radio buttons first
    $("#error").text("");
		var userAnswer = $("form input[type='radio']:checked").val();
    if (userAnswer) {
      if (userAnswer == allQuestions[questionIndex].correctAnswer) {
        score++;
      }

      // display the next question or display the score
      questionIndex++;
      if (questionIndex == allQuestions.length) {
        $("#next").hide();
        $("#question").hide();
        $("#choices").empty();
        $("#score").text("Your score is: " + score);
      } else {
        setUpQuestions(allQuestions, questionIndex);
      }
    } else {
      $("#error").text("Please choose an answer.");
    }
		// score the question
		
	});

	function setUpQuestions(allQuestions, questionIndex) {
		$("#question").text(allQuestions[questionIndex].question);
		$("#choices").empty();
		for (var i = 0; i < allQuestions[questionIndex].choices.length; i++) {
			$("<input type='radio' name='question' value="+i+">"+allQuestions[questionIndex].choices[i]+"<br>").appendTo("#choices");

		}
	}
});
