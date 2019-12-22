$(document).ready(function() {
  // Grab our elements from our DOM
  var timerEl = document.getElementById("timer");
  var startButtonEl = document.getElementById("start-quiz");
  var quizTitle = document.getElementById('introTitle');
  var quizIntro = document.getElementById('intro')

  // Global variables
  var time = questions.length * 15;
  var timerId;
  var questionIndex = 0;

  // Functions
  function clockTick() {
    --time;
    timerEl.innerHTML = time;
    if (time === 0) {
      gameOver();
    }
  }

  function startTime() {
    timerId = setInterval(clockTick, 1000);
  }

  function stopTime() {
    clearInterval(timerId);
  }

  function startGame() {
    startTime();
    quizTitle.style.display === 'none';
    quizIntro.style.display === 'none';
  }

  function generateQuestion() {
    // Create a new title from question array
    // Iterate through question choices
    // Create a button for each choice
    // Add text to each button
    // Add class attribute equal to value
    // Add click function to each button
    // Append button to question choices div

  };

  function clickButton() {
    // This function runs everytime we click a button(the questions)
  }

  function storeHighScores() {
     
  }

  function gameOver() {
    console.log("Game Over");
  }

  // Onclick Functions
  startButtonEl.onclick = startGame;

  // $(document).ready(function() {
  //   document.getElementById("start-quiz").addEventListener("click", myFunction);
  //   function myFunction() {
  //     document.getElementById("start-quiz").innerHTML = "Start Quiz Now!";
  //   }
  // });
  // var quizTimer = 75;
  // var timer = setInterval(function() {
  //   quizTimer--;
  //   if (quizTimer === 0) {
  //     stopInterval();
  //   }
  // }, 1000);
  // var stopInterval = function() {
  //   clearInterval(timer);
  // };
  // function addTime() {
  //   addTime = secondsElapsed - 5;
  // }
  // function isCorrectAnswer() {
  //   if (userAnswer) {
  //     userAnswer === answer;

  //     addTime();
  //   } else {
  //     userAnswer !== answer;
  //   }
  //   removeTime();
  // }
});
