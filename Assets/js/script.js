// Grabbing each page in html by ID
var introp = document.getElementById("introp");
var quizp1 = document.getElementById("quizp");
var quizp2 = document.getElementById("quizp2");
var quizp3 = document.getElementById("quizp3");
var quizp4 = document.getElementById("quizp4");
var resultp = document.getElementById("resultp")
var highscorep = document.getElementById("highscorep")
var highscorebtn = document.getElementById("highscore")

highscorebtn.addEventListener('click', function(){
    introp.style.display="none";
    highscorep.style.display="block";
})



// Event listener to start the time, and quiz once button is clicked.
var btnElement = document.getElementById("startquiz");
btnElement.addEventListener("click", startQuiz);
var localStorageRetrieved = JSON.parse(localStorage.getItem("storedHighScore")) || [];
console.log('on load', localStorageRetrieved)
function startQuiz(){
    startTimer(60)
    introp.style.display="none";
    quizp1.style.display="block";
    
}

// Timer function
var timerEl = document.getElementById("timer");

function startTimer(seconds) {
    let counter = seconds;
         
    const interval = setInterval(() => {
      console.log(counter);
      timerEl.innerHTML = counter 
      counter--;
        
      if (counter < 0 ) {
        clearInterval(interval);
        console.log('Ding!');
        alert('Times UP!')
      }
    }, 1000);
  }




//Question and Answer stored 

var questions = 
["What is the correct way to delcare the hello function in JS?",
"What is correct way to print in console?",
"What is the output of the following? \n 'name' + '10' ",
"How do you access string Apple from the following code? \n var fruits = ['kiwi', 'Mango', 'Apple', 'Dragon Fruit']"]


//Getting questions from html and storing into the variable. 
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

var scoreTrack = 0;
var currentQuestion = 1;

function nextQuestion() {
    //conditional statment will run if user click on the correct answer. 
    if (currentQuestion === 1) {
        question2Element.innerHTML = questions[1];
        quizp1.style.display = "none";
        quizp2.style.display = "block";
        scoreTrack += 1;
        
    } else if (currentQuestion === 2) {
        question3Element.innerHTML = questions[2];
        quizp2.style.display = "none";
        quizp3.style.display = "block";
        scoreTrack += 1;
        
    } else if (currentQuestion === 3) {
        question4Element.innerHTML = questions[3];
        quizp3.style.display = "none";
        quizp4.style.display = "block";
        scoreTrack +=1 ;
        
    } else {
        quizp4.style.display = "none";
        resultp.style.display = "block";
        scoreTrack += 1;
    }

    startTimer();
    ++currentQuestion;
    
}
//When clicked wrong answer, alert will show up saying "Wrong!" and it will not continue to next page. 
var wrongAnswerElement = document.getElementsByClassName("wrong");
for (i = 0; i < wrongAnswerElement.length; ++i) {
    wrongAnswerElement[i].addEventListener("click", wrongAnswer)
}
// Function that notfies the wrong answer and moves to next question without recieving score
function wrongAnswer(event) {
    alert("Wrong!");
    event.preventDefault();
    nextQuestion();
    scoreTrack -= 1;
}
// Getting user name and storing it to the local storage. 
var fullName = document.getElementById("fullname");
var submitB = document.getElementById("submit");

function highScore(){
    //Dictionary of user name and score. 
    var storedHighScore = {
            fullName: fullName.value,
            scoreTrack: scoreTrack
    } 

    localStorageRetrieved.push(storedHighScore)
    localStorage.setItem("storedHighScore", JSON.stringify(localStorageRetrieved));
    console.log(localStorageRetrieved)
    const getScore = JSON.parse(localStorage.getItem("storedHighScore")) || [];
    
    for(var i=0; i > localStorageRetrieved.length; i++){
        var scoreTag = document.createElement("p");
        scoreTag.innerHTML = JSON.stringify(localStorageRetrieved[[i]]);
        highscorep.appendChild(scoreTag);
        console.log(localStorageRetrieved[i].map(({fullName}) => fullName));
    }
   

    
}
//Once pressed submit, it will run highScore function and reset the scoreTrack.
submitB.addEventListener("click", function() {
    highScore();
    resultp.style.display = 'none';
    highscorep.style.display = 'block';
    

});







