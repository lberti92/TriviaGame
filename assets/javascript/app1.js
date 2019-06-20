$(document).ready(function () {
  $(".done").hide();
  $("#question").hide();
  $("#results").hide();

  $('.start').on('click', function () {
    $(".start").hide();
    timer();
    $("#question").toggle();
    renderQuestions();
    $(".done").toggle();
  });

  var quizTimer;
  var countDown = 45;
  function timer() {
    quizTimer = setInterval(decrement, 1000)
  }

  function decrement() {
    countDown--;
    $("#timer").text("Wine Seconds: " + countDown);
    if (countDown === 0) {
      endGame();
    }
  }

  var questionList =
    [
      {
        question: "How many pounds of grapes does it take to crate one bottle of wine?",
        answers: ["3.1", "2.6", "4.2", "3.5"],
        correct: "2.6"
      },
      {
        question: "About how many calories are in a four ounce glass of red wine?",
        answers: ["100", "82", "96", "105"],
        correct: "96"
      },
      {
        question: "A typical barrel can hold up to how many gallons of wine?",
        answers: ["50", "55", "60", "70"],
        correct: "60"
      },
      {
        question: "What country is home to the longest continuous wine route in the world?",
        answers: ["North America", "South Africa", "United States", "Europe"],
        correct: "South Africa"
      },
      {
        question: "How many bottles make a 'case' of wine?",
        answers: ["10", "12", "14", "16"],
        correct: "12"
      },
      {
        question: "What small town in Italy has a free wine fountain?",
        answers: ["Caldari di Ortona", "Sante Maria de Leuca", "Corricella", "Marzamemi"],
        correct: "Caldari de Ortona"
      },
      {
        question: "Where are the World's Biggest Wine Drinkers located?",
        answers: ["France", "Italy", "United States", "Vatican City"],
        correct: "Vatican City"
      },
      {
        question: "How many bottles of wine can you make from one wine barrel?",
        answers: ["250", "275", "300", "350"],
        correct: "300"
      },
      {
        question: "How many grapevines are there on ONE acre of land?",
        answers: ["400", "500", "600", "900"],
        correct: "400"
      },
      {
        question: "How many basic tastes can the tongue perceive?",
        answers: ["2", "4", "5", "156"],
        correct: "4"
      },
    ];

  function renderQuestions() {
    console.log("in renderQuestion")
    for (var i = 0; i < questionList.length; i++) {
      console.log(questionList[i]);
      var questionDiv = $("#question").append("<div id='questionText'>" + questionList[i].question + "</div>");

      for (var j = 0; j < questionList[i].answers.length; j++) {
        var answerDiv = $(`<input type='radio' name='${questionList[i].correct}' <label>${questionList[i].answers[j]} </label>`)
        answerDiv.attr("value", questionList[i].answers[j]).attr("data-correct", questionList[i].correct);

        questionDiv.append(answerDiv);
      }
    }
  }

  function gameResults() {
    var correctAnswer;
    var userAnswer;
    var correctCount = 0;
    var inCorrect = 0;
    var unAnswered = 0;

    for (var i = 0; i < questionList.length; i++) {

      correctAnswer = questionList[i].correct;
      userAnswer = $(`input[name='${correctAnswer}']:checked`).val();
      console.log("userAnswer " + userAnswer);

      if (correctAnswer === userAnswer) {
        correctCount++;
        console.log("Correct " + correctCount);
      } else if (userAnswer === undefined) {
        unAnswered++;
        console.log("unAnswered " + unAnswered);
      } else {
        inCorrect++;
        console.log("inCorrect " + inCorrect);
      }
    }

    var newRows = $("<tr>").append(
      $("<tr>").text("TIME FOR MORE WINE!!"),
      $("<tr>").text("Correct Answers: " + correctCount),
      $("<tr>").text("Incorrect Answers: " + inCorrect),
      $("<tr>").text("Unanswered: " + unAnswered),
    )
    $("#results").append(newRows);
  }

  function hide() {
    $('#timer').hide();
    $("#question").hide();
    $(".done").hide();
  }

  function endGame() {
    clearInterval(quizTimer);
    hide();
    $("#results").toggle();
    gameResults();
  }

  $('.done').on('click', function () {
    endGame();
  })

})