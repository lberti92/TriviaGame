// $(document).ready(function() {

  var correct = 0;
var inCorrect = 0;
var unAnswered = 0;



$('#my_button').on('click', function(){
  alert('Button clicked. hiding....');
  $('#my_button').hide();
});


// var timeleft = 60;

var timer = function() {
    $("#countdown").each(function() {
      var count = parseInt($(this).html());
      console.log(this);
      if (count !== 0) {
        $(this).html(count - 1);
      }
    });
  };
 setInterval(timer, 1000);


 var question = $("<div class='question'>");
 var answerOptions = [];
 var correctAnswer;


 var questionList =
 [
   {
     question: "What is the Answer to Question 1?",
     answers: ["A", "B", "C", "D"],
     correct: "A"
   },
 ]