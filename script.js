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
var restartButton = document.querySelector('#restartButton');
var countdown = 1000;

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
    quizArea.textContent = "lorem ipsum dolor sit amet consectetur adipisicing elit";
    Q1choice1.style.display = "block";
    Q1choice1.textContent = "lorem";
    Q1choice2.style.display = "block";
    Q1choice2.textContent = "ipsum";
    Q1choice3.textContent = "dolor";
    Q1choice3.style.display = "block";
    Q1choice4.textContent = "sit";
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
    quizArea.textContent = "lorem ipsum dolor sit amet consectetur adipisicing elit";
    Q2choice1.style.display = "block";
    Q2choice2.style.display = "block";
    Q2choice3.style.display = "block";
    Q2choice4.style.display = "block";
    Q1choice1.style.display = "none";
    Q1choice2.style.display = "none";
    Q1choice3.style.display = "none";
    Q1choice4.style.display = "none";
    Q2choice1.textContent = "lorem";
    Q2choice2.textContent = "amet";
    Q2choice3.textContent = "adipisicing";
    Q2choice4.textContent = "sit";
    
    var correctAnswer = Q2choice2;

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
    quizArea.textContent = "lorem ipsum dolor sit amet consectetur adipisicing elit";
    Q3choice1.style.display = "block";
    Q3choice2.style.display = "block";
    Q3choice3.style.display = "block";
    Q3choice4.style.display = "block";
    Q2choice1.style.display = "none";
    Q2choice2.style.display = "none";
    Q2choice3.style.display = "none";
    Q2choice4.style.display = "none";
    Q3choice1.textContent = "dolor";
    Q3choice2.textContent = "ipsum";
    Q3choice3.textContent = "consectetur";
    Q3choice4.textContent = "elit";
    var correctAnswer = Q3choice3;

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
    quizArea.textContent = "lorem ipsum dolor sit amet consectetur adipisicing elit";
    Q4choice1.style.display = "block";
    Q4choice2.style.display = "block";
    Q4choice3.style.display = "block";
    Q4choice4.style.display = "block";
    Q3choice1.style.display = "none";
    Q3choice2.style.display = "none";
    Q3choice3.style.display = "none";
    Q3choice4.style.display = "none";
    Q4choice1.textContent = "elit";
    Q4choice2.textContent = "adipisicing";
    Q4choice3.textContent = "consectetur";
    Q4choice4.textContent = "amet";
    var correctAnswer = Q4choice4;

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
    quizArea.textContent = "lorem ipsum dolor sit amet consectetur adipisicing elit";
    Q5choice1.style.display = "block";
    Q5choice2.style.display = "block";
    Q5choice3.style.display = "block";
    Q5choice4.style.display = "block";
    Q4choice1.style.display = "none";
    Q4choice2.style.display = "none";
    Q4choice3.style.display = "none";
    Q4choice4.style.display = "none";
    Q5choice1.textContent = "sit";
    Q5choice2.textContent = "dolor";
    Q5choice3.textContent = "ipsem";
    Q5choice4.textContent = "lorem";
    var correctAnswer = Q5choice1;

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
    var key = event.key;
    initials.push(key);
    initialsInput.textContent = initials.join(" ");
    console.log(initials);
    console.log(initials.length);
    if (initials.length === 3) {
        initials = initials.join(" ");
        return initials;
    }
    //go to list of high scores
    // set save button, 
    saveButton.addEventListener("click", function(event){
        event.stopPropagation();
        event.preventDefault();
        console.log("Saving Intials and Score");
        var listEl = document.createElement("li");
        var score = document.createTextNode(initials);
        console.log(score);
        listEl.appendChild(score);
        scoreList.appendChild(score);
        restartButton.style.display = "block";
    })
}
restartButton.addEventListener('click', function(){
    startButton.style.display = 'block';
    startButton.textContent = 'Start Quiz';
    quizArea.textContent = 'Play Again?';
    scoreList.style.display = 'none';
    saveButton.style.display = 'none';
    initialsInput.textContent = '';
    initialsPrompt.style.display = 'none';
    restartButton.style.display = 'none';
    countdown = 10;
    return countdown;
})
//retain high scores (local storage)

//clear scores button