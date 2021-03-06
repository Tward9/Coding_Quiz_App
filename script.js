var startButton = document.querySelector("#startButton");
var quizArea = document.querySelector("#quizArea");
var timer = document.querySelector("#timer");
var subtitle = document.querySelector("#subtitle");
var timerEl;
var Q1choice1 = document.querySelector("#Q1choice1");
var Q1choice2 = document.querySelector("#Q1choice2");
var Q1choice3 = document.querySelector("#Q1choice3");
var Q1choice4 = document.querySelector("#Q1choice4");
var Q2choice1 = document.querySelector("#Q2choice1");
var Q2choice2 = document.querySelector("#Q2choice2");
var Q2choice3 = document.querySelector("#Q2choice3");
var Q2choice4 = document.querySelector("#Q2choice4");
var Q3choice1 = document.querySelector("#Q3choice1");
var Q3choice2 = document.querySelector("#Q3choice2");
var Q3choice3 = document.querySelector("#Q3choice3");
var Q3choice4 = document.querySelector("#Q3choice4");
var Q4choice1 = document.querySelector("#Q4choice1");
var Q4choice2 = document.querySelector("#Q4choice2");
var Q4choice3 = document.querySelector("#Q4choice3");
var Q4choice4 = document.querySelector("#Q4choice4");
var Q5choice1 = document.querySelector("#Q5choice1");
var Q5choice2 = document.querySelector("#Q5choice2");
var Q5choice3 = document.querySelector("#Q5choice3");
var Q5choice4 = document.querySelector("#Q5choice4");
var scoreButton = document.querySelector("#scoreButton");
var initialsInput = document.querySelector("#initialsInput");
var saveButton = document.querySelector("#saveButton");
var initialsPrompt = document.querySelector("#initialsPrompt");
var scoreList = document.querySelector('#scoreList');
var scoreVal = document.querySelector('#scoreVal');
var restartButton = document.querySelector('#restartButton');
var countdown = 100;
var viewScores = document.querySelector('#viewScores');
var clearScores = document.querySelector('#clearScores');

//when start button pressed, start timer, present first question
startButton.addEventListener("click", function () {
    console.log("Start Quiz");
    firstQuestion();
    console.log("next questions");
    //timer 
    timerEl = setInterval (function () {
        if (countdown <= 0) {
            console.log("Time Has Run Out");
            //times up function
            timesUp();
            return
        }
        timer.textContent = countdown;
        countdown--;
    }, 1000);
})
//present question function
//question answered, present next question
//question incorect, subtract remaining time from timer
// stop propogation removed for purposes of question, why is answer choice rediating through each function?
function firstQuestion() {
    console.log('first questions');
    quizArea.textContent = "What are variables used for in JavaScript Programs?";
    Q1choice1.style.display = "block";
    Q1choice1.textContent = "Storing numbers, dates, or other values";
    Q1choice2.style.display = "block";
    Q1choice2.textContent = "Varying randomly";
    Q1choice3.textContent = "Causing high-school algebra flashbacks";
    Q1choice3.style.display = "block";
    Q1choice4.textContent = "None of the Above";
    Q1choice4.style.display = "block";
    startButton.textContent = "";
    startButton.style.display = "none";
    var correctAnswer = Q1choice1;

    //functions for clicking answers
    Q1choice1.addEventListener("click", function (event) {
        if (Q1choice1 === correctAnswer) {
            console.log("Correct!");
            secondQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            secondQuestion();
        }
    })
    Q1choice2.addEventListener("click",function (event) {
        if (Q1choice2 === correctAnswer) {
            console.log("Correct!");
            secondQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            secondQuestion();
        }
    })
    Q1choice3.addEventListener("click",function (event) {
        if (Q1choice3 === correctAnswer) {
            console.log("Correct!");
            secondQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            secondQuestion();
        }
    })
    Q1choice4.addEventListener("click",function (event) {
        if (Q1choice4 === correctAnswer) {
            console.log("Correct!");
            secondQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            secondQuestion();
        }
    })
}
//question 2 function
function secondQuestion() {
    console.log('second questions');
    quizArea.textContent = "What is the correct JavaScript syntax to write 'Hello World'?";
    Q2choice1.style.display = "block";
    Q2choice2.style.display = "block";
    Q2choice3.style.display = "block";
    Q2choice4.style.display = "block";
    Q1choice1.style.display = "none";
    Q1choice2.style.display = "none";
    Q1choice3.style.display = "none";
    Q1choice4.style.display = "none";
    Q2choice1.textContent = "System.out.println('Hello World')";
    Q2choice2.textContent = "println ('Hello World')";
    Q2choice3.textContent = "document.write('Hello World')";
    Q2choice4.textContent = "response.write('Hello World')";
    
    var correctAnswer = Q2choice3;

    //functions for clicking answers
    Q2choice1.addEventListener("click", function (event) {
        if (Q2choice1 === correctAnswer) {
            console.log("Question 2 Correct!");
            thirdQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            thirdQuestion();
        }
    })
    Q2choice2.addEventListener("click",function (event) {
        if (Q2choice2 === correctAnswer) {
            console.log("Question 2 Correct!");
            thirdQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            thirdQuestion();
        }
    })
    Q2choice3.addEventListener("click",function (event) {
        if (Q2choice3 === correctAnswer) {
            console.log("Question 2 Correct!");
            thirdQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            thirdQuestion();
        }
    })
    Q2choice4.addEventListener("click",function (event) {
        if (Q2choice4 === correctAnswer) {
            console.log("Question 2 Correct!");
            thirdQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            thirdQuestion();
        }
    })
}
//question 3
function thirdQuestion() {
    console.log('third questions');
    quizArea.textContent = "Inside which HTML element do we put the JavaScript?";
    Q3choice1.style.display = "block";
    Q3choice2.style.display = "block";
    Q3choice3.style.display = "block";
    Q3choice4.style.display = "block";
    Q2choice1.style.display = "none";
    Q2choice2.style.display = "none";
    Q2choice3.style.display = "none";
    Q2choice4.style.display = "none";
    Q3choice1.textContent = "<js>>";
    Q3choice2.textContent = "<script>";
    Q3choice3.textContent = "<scripting>";
    Q3choice4.textContent = "<javascript>";
    var correctAnswer = Q3choice2;

    //functions for clicking answers
    Q3choice1.addEventListener("click", function (event) {
        if (Q3choice1 === correctAnswer) {
            console.log("Question 3 Correct!");
            fourthQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            fourthQuestion();
        }
    })
    Q3choice2.addEventListener("click",function (event) {
        if (Q3choice2 === correctAnswer) {
            console.log("Question 3 Correct!");
            fourthQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            fourthQuestion();
        }
    })
    Q3choice3.addEventListener("click",function (event) {
        if (Q3choice3 === correctAnswer) {
            console.log("Question 3 Correct!");
            fourthQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            fourthQuestion();
        }
    })
    Q3choice4.addEventListener("click",function (event) {
        if (Q3choice4 === correctAnswer) {
            console.log("Question 3 Correct!");
            fourthQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            fourthQuestion();
        }
    })
}
//question 4
function fourthQuestion() {
    console.log('fourth questions');
    quizArea.textContent = "How would one create a Date object in JavaScript?";
    Q4choice1.style.display = "block";
    Q4choice2.style.display = "block";
    Q4choice3.style.display = "block";
    Q4choice4.style.display = "block";
    Q3choice1.style.display = "none";
    Q3choice2.style.display = "none";
    Q3choice3.style.display = "none";
    Q3choice4.style.display = "none";
    Q4choice1.textContent = "dateObjectName = new Date([parameters])";
    Q4choice2.textContent = "dateObjectName.new Date([parameters])";
    Q4choice3.textContent = "dateObjectName := new Date([parameters])";
    Q4choice4.textContent = "dateObjectName Date([parameters])";
    var correctAnswer = Q4choice1;

    //functions for clicking answers
    Q4choice1.addEventListener("click", function (event) {
        if (Q4choice1 === correctAnswer) {
            console.log("Question 4 Correct!");
            fifthQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            fifthQuestion();
        }
    })
    Q4choice2.addEventListener("click",function (event) {
        if (Q4choice2 === correctAnswer) {
            console.log("Question 4 Correct!");
            fifthQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            fifthQuestion();
        }
    })
    Q4choice3.addEventListener("click",function (event) {
        if (Q4choice3 === correctAnswer) {
            console.log("Question 4 Correct!");
            fifthQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            fifthQuestion();
        }
    })
    Q4choice4.addEventListener("click",function (event) {
        if (Q4choice4 === correctAnswer) {
            console.log("Question 4 Correct!");
            fifthQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            fifthQuestion();
        }
    })
}
//question 5
function fifthQuestion() {
    console.log('fifth questions');
    quizArea.textContent = "The _______ method of an Array object adds and/or removes elements from an array.";
    Q5choice1.style.display = "block";
    Q5choice2.style.display = "block";
    Q5choice3.style.display = "block";
    Q5choice4.style.display = "block";
    Q4choice1.style.display = "none";
    Q4choice2.style.display = "none";
    Q4choice3.style.display = "none";
    Q4choice4.style.display = "none";
    Q5choice1.textContent = "Reverse";
    Q5choice2.textContent = "Shift";
    Q5choice3.textContent = "Slice";
    Q5choice4.textContent = "Splice";
    var correctAnswer = Q5choice4;

    //functions for clicking answers
    Q5choice1.addEventListener("click", function (event) {
        if (Q5choice1 === correctAnswer) {
            console.log("Question 5 Correct!");
            quizComplete();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            quizComplete();
        }
    })
    Q5choice2.addEventListener("click",function (event) {
        if (Q5choice2 === correctAnswer) {
            console.log("Question 5 Correct!");
            quizComplete();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            quizComplete();
        }
    })
    Q5choice3.addEventListener("click",function (event) {
        if (Q5choice3 === correctAnswer) {
            console.log("Question 5 Correct!");
            quizComplete();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            quizComplete();
        }
    })
    Q5choice4.addEventListener("click",function (event) {
        if (Q5choice4 === correctAnswer) {
            console.log("Question 5 Correct!");
            quizComplete();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            quizComplete();
        }
    })
}
//answered final question or timer hits zero, end game
//quiz complete function
function quizComplete() {
    clearInterval(timerEl);
    timer.textContent = "";
    quizArea.textContent = "Quiz Complete!"
    subtitle.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus tempore amet vitae unde vero reiciendis, temporibus, provident dolorum at odit officia omnis iste perspiciatis quis recusandae eligendi facilis. Qui!"
    Q5choice1.style.display = "none";
    Q5choice2.style.display = "none";
    Q5choice3.style.display = "none";
    Q5choice4.style.display = "none";
    scoreButton.style.display = "block";
    scoreButton.textContent = "Go to Score Screen";
    scoreButton.addEventListener("click", function(){
        console.log("going to score screen");
        scoreButton.style.display = "none";
        saveButton.style.display = "block";
        quizArea.style.display = "block";
        quizArea.textContent = `Score ${countdown}`;
        initialsPrompt.style.display = "block";
        //go to intial input function
        logInitial;
    })
    document.onkeydown = logInitial;
}
//times up funtion
function timesUp() {
    clearInterval(timerEl);
    timer.textContent = "";
    quizArea.textContent = "Time Has Run Out!"
    subtitle.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus tempore amet vitae unde vero reiciendis, temporibus, provident dolorum at odit officia omnis iste perspiciatis quis recusandae eligendi facilis. Qui!";
    Q1choice1.style.display = "none";
    Q1choice2.style.display = "none";
    Q1choice3.style.display = "none";
    Q1choice4.style.display = "none";
    Q2choice1.style.display = "none";
    Q2choice2.style.display = "none";
    Q2choice3.style.display = "none";
    Q2choice4.style.display = "none";
    Q3choice1.style.display = "none";
    Q3choice2.style.display = "none";
    Q3choice3.style.display = "none";
    Q3choice4.style.display = "none";
    Q4choice1.style.display = "none";
    Q4choice2.style.display = "none";
    Q4choice3.style.display = "none";
    Q4choice4.style.display = "none";
    Q5choice1.style.display = "none";
    Q5choice2.style.display = "none";
    Q5choice3.style.display = "none";
    Q5choice4.style.display = "none";
    scoreButton.style.display = "block";
    scoreButton.textContent = "Go to Score Screen";
    scoreButton.addEventListener("click", function(){
        console.log("going to score screen");
        scoreButton.style.display = "none";
        saveButton.style.display = "block";
        quizArea.style.display = "block";
        quizArea.textContent = `Score ${countdown}`;
        initialsPrompt.style.display = "block";
       //go to intial input function
        logInitial;
    });
    document.onkeydown = logInitial;
}
//enter intials, save score
var initials = [];
function logInitial(event) {
    event.preventDefault();
    initialsPrompt.style.display = 'block';
    initialsInput.style.display = 'block';
    var key = event.key;
    initials.push(key);
    initialsInput.textContent = initials.join(" ");
    // console.log(initials);
    // console.log(initials.length);
    var initialsStore = initials;
    console.log(initialsStore);
    if (initials.length === 3) {
        initials = initials.join(" ");
        return initials, initialsStore;
    }
    //go to list of high scores
    // set save button, 
    saveButton.addEventListener("click", function(event){
        event.preventDefault();
        quizArea.textContent = 'Scores';
        console.log("Saving Intials and Score");
        scoreList.textContent = `${initials}`;
        scoreList.style.display = 'block';
        scoreVal.textContent = `${countdown}`;
        scoreVal.style.display = 'block';
        var scoreArray = [];
        scoreArray.concat(countdown);
// set storage equal to variable (not sure settedr or getter part) add new score parts to that variable to display total scores
        viewScores.style.display = 'block';
        restartButton.style.display = "block";
        initialsInput.textContent = '';
        initialsPrompt.style.display = 'none';
        event.stopImmediatePropagation();
    })
    viewScores.addEventListener('click', function(event){
        event.preventDefault();
        saveButton.style.display = "none";
        clearScores.style.display = 'block';
        var allInitials = JSON.parse(localStorage.getItem('scoreListEl')) || [];
        var allScores = JSON.parse(localStorage.getItem('scoreValEl')) || [];
        console.log(allInitials, allScores);
        console.log(initialsStore);
        var totalInitials = allInitials.concat(initials.split(' '));
        console.log(totalInitials);
        var totalScores = allScores.concat(countdown);
        console.log(totalInitials, totalScores);
        //totalInitials on rerun doesn't pull new intials, just adds old value
        var initialsDisplay = [];
        for ( i = 0; i < totalInitials.length; i+=3) {
            var initialsDisplayEl = totalInitials[i] + totalInitials[i+1] + totalInitials[i+2];
            initialsDisplay.push(initialsDisplayEl);
            console.log(initialsDisplayEl);
        }
        initialsDisplay = initialsDisplay.join(' ');
        var scoreDisplay = totalScores.join(' ')
        console.log(initialsDisplay);
        scoreList.textContent = `${initialsDisplay}`;
        scoreVal.textContent = `${scoreDisplay}`;
        localStorage.setItem('scoreListEl', JSON.stringify(totalInitials));
        localStorage.setItem('scoreValEl', JSON.stringify(totalScores));
        event.stopImmediatePropagation();
    });
}
//clear scores button
clearScores.addEventListener('click', function(event){
    event.preventDefault();
    localStorage.clear();
    scoreList.textContent = ``;
    scoreVal.textContent = ``;
    clearScores.style.display = 'none';
    viewScores.style.display = 'none';
})
restartButton.addEventListener('click', function(event){
    initials=[];
    startButton.style.display = 'block';
    clearScores.style.display = 'none';
    startButton.textContent = 'Start Quiz';
    quizArea.textContent = 'Play Again?';
    scoreList.style.display = 'none';
    scoreVal.style.display = 'none';
    viewScores.style.display = 'none';
    saveButton.style.display = 'none';
    restartButton.style.display = 'none';
    countdown = 100;
    return countdown;
})