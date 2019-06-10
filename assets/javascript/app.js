// $(document).ready(function() {

//     console.log("ready");


$("#buttons").append("button id='start'> start");
    //When the button is clicked the timer starts and the questions populate the screen
$('#button').on('click', function(){
  console.log("click");
  alert('Button clicked. hiding....');
  $("#start").hide();
  renderQuiz();
});

var correctAnswer = 0;

var answerIndex = 0;

var questionList =
[
  {
    question: "What is the Answer to Question 1?",
    answers: ["A", "B", "C", "D"],
    correct: "0"
  },
  {
   question: "What is the Answer to Question 2?",
   answers: ["Apple", "Banana", "Cherry", "Date"],
   correct: "1"
 },
 {
   question: "What is the Answer to Question 3?",
   answers: ["Alice", "Brian", "Clive", "Dan"],
   correct: "2"
 },
 {
   question: "What is the Answer to Question 4?",
   answers: ["Alamosa", "Burlington", "Centennial", "Denver"],
   correct: "3"
 },
];

function renderQuestion() {
    // If there are still more questions, render the next one.
    console.log("in renderQuestion")
    for (var i = 0; i < questionList.length; i++) {
        console.log(questionList[i]);
    var questionDiv = $("#question").append("<div id='questionText'>" + questionList[i].question + "</div>");
    for (var j = 0; j < questionList[i].answers.length; j++) {
        questionDiv.append(`<button class=${questionList[i].answers[j]} data-correct=${questionList[i].correct}> ${questionList[i].answers[j]} </button>`)
      $("$answer").attr("value=quess").addclass("option");
    
        //radio button inside the divs
        // attribute name data-correct inside of the question


        // for on-click to work add a class=quess to all of the radio buttons
    }
  
    }

}
    // If there aren't, render the end game screen.
    // else {
    //   document.querySelector("#question").i = "Game Over!";
    //   // document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questions.length;
    

    renderQuestion();



    //$("option").append("<button value = option1 rightoption="rightanswer" class="option")

//look at the THIS example