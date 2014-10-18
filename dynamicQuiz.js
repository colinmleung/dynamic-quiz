$("document").ready(function(){
	//questions and answers
	var allQuestions = [{question:"Who is Prime Minister of the United Kingdom?", choices:["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswer: 0},{question:"Question2", choices:["Choice1", "Choice2", "Choice3"], correctAnswer: 2}];

  var quizAnswers = [];
	var questionIndex = 0;

	//show first question
	setQuizState(questionIndex, allQuestions[questionIndex], quizAnswers[questionIndex]);

	$("#next").click(function() {

    // validate radio buttons first
    $("#error").text("");
		quizAnswers[questionIndex] = $("form input[type='radio']:checked").val();
    if (quizAnswers[questionIndex]) {
      questionIndex++;
      setQuizState(questionIndex, allQuestions[questionIndex], quizAnswers[questionIndex]);
    } else {
      $("#error").text("Please choose an answer.");
    }// score the question
		
	});

  $("#back").click(function() {
    questionIndex--;
    setQuizState(questionIndex, allQuestions[questionIndex], quizAnswers[questionIndex]);
  });

  function setQuizState(questionIndex, questionObject, answer) {
    cleanState();
    if (questionIndex !== 0) {
      $("#back").show();
    }
    if (questionIndex !== allQuestions.length) {
      $("#next").show();
      $("#question").text(questionObject.question);
      for (var i = 0; i < questionObject.choices.length; i++) {
        if (i == answer) {
          $("<input type='radio' name='question' value="+i+" checked>"+allQuestions[questionIndex].choices[i]+"<br>").appendTo("#choices");
              } else {
        $("<input type='radio' name='question' value="+i+">"+allQuestions[questionIndex].choices[i]+"<br>").appendTo("#choices");
              }
      }
    } else {
      var score = calculateScore();
      $("#score").text("Your score is: " + score);
    }
  }

  function cleanState() {
    $("#question").text("");
    $("#choices").empty();
    $("#score").text("");
    $("#error").text("");
    $("#next").hide();
    $("#back").hide();
  }

  function calculateScore() {
    var score = 0;
    for (var i = 0; i < allQuestions.length; i++) {
      if (allQuestions[i].correctAnswer == quizAnswers[i]) {
        score++;
      }
    }
    return score;
  }
});
