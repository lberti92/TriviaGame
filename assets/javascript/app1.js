
// done browser opens with a START Button.
//done Press the START button to begin


$(document).ready(function () {

  //done When the START button is clicked the TIMER starts at 30 seconds
  // doneQuestion also populate the screen
  $('.start').on('click', function () {
    console.log("click");
    alert('Button clicked. start....');
    $(".start").hide();
    startGame();
    renderQuestions();

  });


  //Game Timer 
  function startGame() {
    var countDown = 30;
    var quizTimer = setInterval(function () {
      countDown--;
      $('#timer').text(countDown);
      if (countDown <= 0)
        clearInterval(quizTimer);
    }, 1000)
  }


  //8 to 10 questions will loaded throught the renderQuestion function
  //each question will have 4 multiple answers
  //the user will select the correct/incorrect answer by using a RADIO button
  //the radio button with the correct answer will have a specific id
  //create attributes on the radio to specifiy correct answer

  var correct = 0;
  var inCorrect = 0;
  var unAnswered = 0;

  var correctAnswer = 0;
  var questionIndex = 0;
  var answerIndex = 0;


  var questionList =
    [
      {
        question: "What is the Answer to Question 1?",
        answers: ["A", "B", "C", "D"],
        correct: "A"
      },
      {
        question: "What is the Answer to Question 2?",
        answers: ["Apple", "Banana", "Cherry", "Date"],
        correct: "Banana"
      },
      {
        question: "What is the Answer to Question 3?",
        answers: ["Alice", "Brian", "Clive", "Dan"],
        correct: "Clive"
      },
      {
        question: "What is the Answer to Question 4?",
        answers: ["Alamosa", "Burlington", "Centennial", "Denver"],
        correct: "Denver"
      },
    ];


  function renderQuestions() {
    // If there are still more questions, render the next one.
    console.log("in renderQuestion")
    for (var i = 0; i < questionList.length; i++) {
      console.log(questionList[i]);
      var questionDiv = $("#question").append("<div id='questionText'>" + questionList[i].question + "</div>");

      for (var j = 0; j < questionList[i].answers.length; j++) {
        // var answerDiv = $("#answer").append("<div id='answerText'>" + questionList[i].answers[j] + "</div>");
      //  var answerDiv = $("<input type='radio' name='answer[i]'>" + "<label>" + questionList[i].answers[j] + "</label>")
        var answerDiv = $(`<input type='radio' name=${questionList[i].correct} <label>${questionList[i].answers[j]} </label>`)
        answerDiv.attr("value", questionList[i].answers[j]).attr("data-correct", questionList[i].correct) ;

        questionDiv.append(answerDiv);
        // questionDiv.append(`<div class=${questionList[i].answers[j]} custom-control=${questionList[i].correct}> ${questionList[i].answers[j]} </div>`)
        // questionDiv.append(`<button class=${questionList[i].answers[j]} data-correct=${questionList[i].correct}> ${questionList[i].answers[j]} </button>`)

        // $("#question").append(questionDiv);
        // $("#answer").append(answerDiv)
        // $("$answer").attr("value=quess").addclass("option");
        //$("option").append("<button value = option1 rightoption="rightanswer" class="option")
      }
    }
  }
  // renderQuestions();

  //Scenario one: All questions are answered until the time alloted and the USER presses the DONE button
  //              The question screen is removed and the RESULT SCREEN is provided which includes the:
  //                  Correct Answers:
  //                  Incorrect Answers:
  //                  Unanswered:

  //Scenarion two: The USER does not finish in the time alloted and the RESUlTS SCREEN is produced to include:
  //                  Correct Answers:
  //                  Incorrect Answers:
  //                  Unanswered:

  $('.done').on('click', function () {
    console.log("click");
    alert('Button clicked. done....');
    $(".done").hide();
    //  renderResults();
  });




  //==========================================================================================================
  // function renderQuiz() {
  //   timer();
  //   setInterval(timer, 1000);
  //   //done -----start timer
  //   //add all questions to the questions page
  //   //radio button for the questions
  //   //done button to stop the game and clear screen and place the scores to the screen.
  // }

  // function gradeQuiz() {
  //compare if question answered is correct or NOT
  //if/else statememnt to review ansered questions if correct or incorrect or unansered
  //update VARS with scores
  // }

  //click event for the DONE function - similiar to start button and will call grade quiz

  //???? when timer runs out to call gradeQuiz
  //var timeleft = 60;

  // function timer() {

  //   // add to the if time = 0 to stop the time

  //   $("#countdown").each(function () {
  //     clearInterval(timer);
  //     var count = parseInt($(this).html());
  //     // console.log(this);
  //     if (count !== 0) {
  //       $(this).html(count - 1)
  //     } else {
  //       clearInterval()
  //     }
  //   });
  // };
  // setInterval(timer, 1000);

})