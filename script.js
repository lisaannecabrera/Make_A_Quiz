function generateQuiz(questions, quizContainer, relultsContainer, submit);
function showQuestions(questions, quizContainer){
    var myQuestions = [
        {
            question: "What does love mean in tenns?",
            answers: {
                a: 'you won',
                b: 'you lost',
                c: '0'
            },
            correctAnswer: 'c'
        },
        {
            question: "During a tennis match, if the ball lands on the line, what does it mean?",
            answers: {
                a: 'its out',
                b: 'its in',
                c: 'game over'
            },
            correctAnswer: 'b'
        },
        {
            question: "What does duece mean in the game of tennis?",
            answers: {
                a: 'its a tie',
                b: '2 points',
                c: 'wild card'
            },
            correctAnswer: "a"
        }
    ];
}
    function showQuestions(questions, quizContainer){
        var output = [];
        var answer;
        for(var i=0; i<questions.length; i++){
            answer = [];
            for(letter in questions[i].answers){
                answers.push(
                    '<label>'
                    + '<input type = "radio" name = "question '+i+'" value = "'+letter+'">'
                    + letter + ':'
                    + questions[i].answers[letter]
                    +'<label>'
                );

            }
            
            output.push(
                '<div class="questions">' + questions[i].question + '</div'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        quizContainer.innerHTML = output.join('');
        
        showQuestions(questions, quizContainer);
    }
function showResults(questions, quizContainer, relultsContainer){
    var answerContainers = quizContainer.querySelectorAll('.answers');
    var userAnswer = '';
    for(var i=0; i<questions.length; i++){
        userAnswer = (answerContainers[i].querySelector('input[name = question'+i+']:checked')||{}).value;
        if(userAnswer===questions[i].correctAnswer){
            numCorrect++;
            answerContainers[i].style.color = 'lightgreen';
        }
        else{
            answerContainers[i].style.color = 'red';
        }
    }
resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
submitButton.onclick = function (){
    showResults(questions, quizContainer, resultsContainer);
}
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton)
