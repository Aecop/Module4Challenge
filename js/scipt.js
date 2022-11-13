
var introp = document.getElementById("introp");
var quizp = getElementById("quizp");


// Timer function
var timerEl = document.getElementById("timer");
timerEl.innerHTML="Time: " + 0;
var counter = 0;

function startTimer(){
    timerEl.innerHTML="Time: " + 0;
    var timedOut= setInterval(function(){
        timerEl.innerHTML="Time: "+ (60 - counter);
        counter++;
        if(counter >= 60){
            clearInterval(timedOut);
            quizp.style.display="none";
            introp.style.display="block"; 
        }
    },1000);
}


// Event listener to start the time, and quiz once button is clicked.

var btnElement = document.getElementById("startquiz");
btnElement.addEventListener("click", startQuiz);

function startQuiz(){
    startTimer();
    introp.style.display="none";
    quizp.style.display="block";
}

















//stored question and answer
var questions = [{
    title: "First Question",
    answer: [{
        label: "1st answer",
        isCorrect: true
    },{
        label: "1st answer",
        isCorrect: true
    },{
        label: "1st answer",
        isCorrect: true
    },{
        label: "1st answer",
        isCorrect: true
    }]
},{
    title: "Second Question",
    answer: [{
        label: "1st answer",
        isCorrect: true
    },{
        label: "1st answer",
        isCorrect: true
    },{
        label: "1st answer",
        isCorrect: true
    },{
        label: "1st answer",
        isCorrect: true
    }]
},{
    title: "Third Question",
    answer: [{
        label: "1st answer",
        isCorrect: true
    },{
        label: "1st answer",
        isCorrect: true
    },{
        label: "1st answer",
        isCorrect: true
    },{
        label: "1st answer",
        isCorrect: true
    }]
},{
    title: "Forth Question",
    answer: [{
        label: "1st answer",
        isCorrect: true
    },{
        label: "1st answer",
        isCorrect: true
    },{
        label: "1st answer",
        isCorrect: true
    },{
        label: "1st answer",
        isCorrect: true
    }]
}]
// var title = document.createElement("h1")
// title.innerHTML = questions[0].title
// var listOfanswer = document.createElement("ol")
// for (var i=0; i<4; i ++) {
//     var singleAnswer = document.createElement("li");
//     singleAnswer.innerHTML = questions[0].answers[i].label
//     listOfanswers
// }




function correctAnswer(questionNumber){
    if (questionNumber > questions.length) return;

    // update test title and test labels

    // user input
    userAnswer = console.log();
    correct = question[questionNumber - 1].answer[userAnswer - 1].isCorrect;

    if (correct) {
        // adjust point
    } else {
        alert("wrong answer!");
    }

    correctAnswer(questionNumber++);
}

correctAnswer(1);
