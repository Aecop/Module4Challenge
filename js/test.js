var introp = document.getElementById("introp");
var quizp1 = document.getElementById("quizp");
var quizp2 = document.getElementById("quizp2");
var quizp3 = document.getElementById("quizp3");
var quizp4 = document.getElementById("quizp4");
var resultp = document.getElementById("resultp")

// Event listener to start the time, and quiz once button is clicked.
var btnElement = document.getElementById("startquiz");
btnElement.addEventListener("click", startQuiz);

function startQuiz(){
    startTimer()
    introp.style.display="none";
    quizp1.style.display="block";
    
}

// Timer function
var timerEl = document.getElementById("timer");
var counter = 0;

function startTimer(){
    timerEl.innerHTML="Time: " + 0;
    var timedOut= setInterval(function(){
        timerEl.innerHTML="Time: "+ (60 - counter);
        counter++;
        if(counter >= 60){
            clearInterval(timedOut);
            quizp1.style.display="none";
            introp.style.display="block"; 
        }
    },1000);
}








//Question and Answer stored 

var questions = 
["What is the correct way to delcare the hello function in JS?",
"What is correct way to print in console?",
"What is the output of the following? \n 'name' + '10' ",
"How do you access string Apple from the following code? \n var fruits = ['kiwi', 'Mango', 'Apple', 'Dragon Fruit']"]



var question1Element = document.getElementById("question1");
var question2Element = document.getElementById("question2");
var question3Element = document.getElementById("question3");
var question4Element = document.getElementById("question4")
question1Element.innerHTML = questions[0];

//When clicked correct answer, call nextQuestion function to display 2nd question

var correctAnswerElements = document.getElementsByClassName("correct");
for (i = 0; i < correctAnswerElements.length; ++i) {
    correctAnswerElements[i].addEventListener("click", nextQuestion);
}

var currentQuestion = 1;

function nextQuestion(event) {
    event.preventDefault()
    if (currentQuestion === 1) {
        question2Element.innerHTML = questions[1];
        quizp1.style.display = "none";
        quizp2.style.display = "block";
    } else if (currentQuestion === 2) {
        question3Element.innerHTML = questions[2];
        quizp2.style.display = "none";
        quizp3.style.display = "block";
    } else if (currentQuestion === 3) {
        question4Element.innerHTML = questions[3];
        quizp3.style.display = "none";
        quizp4.style.display = "block";
    } else {
        quizp4.style.display = "none";
        resultp.style.display = "block";
    }

    startTimer();
    ++currentQuestion;
}


function wrongAnswer() {
    alert("Wrong!");
    nextQuestion();
}