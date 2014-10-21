$("document").ready(function(){
  var allQuestions;

  var cookieName = "username=";
  var splitCookie = document.cookie.split(';');
  for (var i = 0; i < splitCookie.length; i++) {
    var c = splitCookie[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) != -1) {
      var username = c.substring(cookieName.length, c.length);
      $("#welcomeMessage").text("Welcome " + username);
    }
  }

   $.getJSON('dynamicQuizQuestions.json', function (data) {
     allQuestions = data;
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
      cleanState(function () {
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
          $("#choices").fadeIn(1000);
        } else {
          var score = calculateScore();
          $("#score").text("Your score is: " + score);
        }
      });
      
    }

    function cleanState(callback) {
      $("#question").text("");
      $("#score").text("");
      $("#error").text("");
      $("#next").hide();
      $("#back").hide();
      $("#choices").fadeOut(1000, function () {
        $(this).empty();
        callback();
      });
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
  });
