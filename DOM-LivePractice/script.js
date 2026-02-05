// Define questions and answers as an array
var questions = [
    {
        question: "Hyper Text Markup Language stands for?",
        choices: ["JQuery","XHTML","CSS","HTML"],
        answer: "HTML"
    },
    {
        question: "Cascading Style Sheet stands for?",
        choices: ["JQuery","HTML","XHTML","CSS",],
        answer: "CSS"
    },
    {
        question: "Which is the JS framework/Library?",
        choices: ["React","XHTML","MongoDB","HTML"],
        answer: "React"
    },
    {
        question: "Which is a backend language?",
        choices: ["React","PHP","CSS","All"],
        answer: "PHP"
    },
    {
        question: "Which is Artificial Intelligence?",
        choices: ["Laravel","Python","CSS","HTML"],
        answer: "Python"
    },
];

var currentQuestionIndex = 0;
var score = 0;

// Display Questions
function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        var currentQuestion = questions[currentQuestionIndex];
        document.getElementById("question").innerText = currentQuestion.question;

        for (let i = 0; i< currentQuestion.choices.length; i++) {
            let button = document.getElementById("btn" +i);
            button.innerText = currentQuestion.choices[i];
            button.onclick = function() {
                checkAnswer(currentQuestion.choices[i]);
            };
        }

        document.getElementById("progress").innerText =
            "Question " + (currentQuestionIndex + 1) + " of " + questions.length;
    } else {
        showScores();
    }
}

function showScores() {
    document.getElementById("quiz").innerHTML =
        "<h2>Quiz Compleated !</h2> <h2>Your Score : " 
        + score + 
        "</h2><a href='index.html'>Take Quiz Again</a>"
}

function checkAnswer(answer) {
    var correctAnswer = questions[currentQuestionIndex].answer;
    if (answer === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    displayQuestion();
}

//Start countdown timer
var timeLeft = 60;
var countdownElement= document.getElementById("count-down");

function startCountdown() {
    var timer = setInterval(function() {
        if (timeLeft <= 0) { 
            clearInterval(timer);
        } else {
            countdownElement.innerText = "Time Left : " + timeLeft + " seconds";
            timeLeft--;
        }
    },1000);
}

displayQuestion();
startCountdown();


