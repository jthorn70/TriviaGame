function check() {
  $("#final-page").css("display", "unset");
  $("#quiz-box").css("display", "none");
  console.log($("#q1").value);
  var question1 = $("#q1").value;
  var question2 = $("#q2").value;
  var question3 = $("#q3").value;
  var question4 = $("#q4").value;
  var correct = 0;
  var incorrect = 0;

  if ($("#multipleChoice1A").is(":checked")) {
    correct++;
  } else {
    incorrect++;
  }
  if ($("#multipleChoice2B").is(":checked")) {
    correct++;
  } else {
    incorrect++;
  }
  if ($("#multipleChoice3C").is(":checked")) {
    correct++;
  } else {
    incorrect++;
  }
  if ($("#multipleChoice4D").is(":checked")) {
    correct++;
  } else {
    incorrect++;
  }

  $("#final-page").css("display", "unset");
  $("#numberCorrect").text("You got " + correct + " correct!");
  $("#numberIncorrect").text("You got " + incorrect + " incorrect!");
}

$("#start-button").click(function() {
  var counter = 45;
  var interval = setInterval(function() {
    counter--;
    if (counter <= 0) {
      clearInterval(interval);
      $("#final-page").css("display", "unset");
      $("#quiz-box").css("display", "none");
      check();

      return;
    } else {
      $("#timeLeft").text("Time left: " + counter + " seconds");
      console.log("Timer --> " + counter);
    }
  }, 1000);

  $("#start-screen").fadeOut(100);
  $("#quiz-box").css("display", "unset");
});

$("#submit-button").click(check);
