var startButton = document.querySelector("#startButton");
var quizArea = document.querySelector("#quizArea");
var timer = document.querySelector("#timer");
var subtitle = document.querySelector("#subtitle");
var timerEl;
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
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
    choice1.style.display = "block";
    choice1.textContent = "lorem";
    choice2.style.display = "block";
    choice2.textContent = "ipsum";
    choice3.textContent = "dolor";
    choice3.style.display = "block";
    choice4.textContent = "sit";
    choice4.style.display = "block";
    startButton.textContent = "";
    startButton.style.display = "none";
    var correctAnswer = choice1;

    //functions for clicking answers
    choice1.addEventListener("click", function (event) {
        if (choice1 === correctAnswer) {
            console.log("Correct!");
            secondQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            secondQuestion();
        }
    })
    choice2.addEventListener("click",function (event) {
        if (choice2 === correctAnswer) {
            console.log("Correct!");
            secondQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            secondQuestion();
        }
    })
    choice3.addEventListener("click",function (event) {
        if (choice3 === correctAnswer) {
            console.log("Correct!");
            secondQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            secondQuestion();
        }
    })
    choice4.addEventListener("click",function (event) {
        if (choice4 === correctAnswer) {
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
    choice1.textContent = "lorem";
    choice2.textContent = "amet";
    choice3.textContent = "adipisicing";
    choice4.textContent = "sit";
    var correctAnswer = choice2;

    //functions for clicking answers
    choice1.addEventListener("click", function (event) {
        if (choice1 === correctAnswer) {
            console.log("Question 2 Correct!");
            thirdQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            thirdQuestion();
        }
    })
    choice2.addEventListener("click",function (event) {
        if (choice2 === correctAnswer) {
            console.log("Question 2 Correct!");
            thirdQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            thirdQuestion();
        }
    })
    choice3.addEventListener("click",function (event) {
        if (choice3 === correctAnswer) {
            console.log("Question 2 Correct!");
            thirdQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            thirdQuestion();
        }
    })
    choice4.addEventListener("click",function (event) {
        if (choice4 === correctAnswer) {
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
    choice1.textContent = "dolor";
    choice2.textContent = "ipsum";
    choice3.textContent = "consectetur";
    choice4.textContent = "elit";
    var correctAnswer = choice3;

    //functions for clicking answers
    choice1.addEventListener("click", function (event) {
        if (choice1 === correctAnswer) {
            console.log("Question 3 Correct!");
            fourthQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            fourthQuestion();
        }
    })
    choice2.addEventListener("click",function (event) {
        if (choice2 === correctAnswer) {
            console.log("Question 3 Correct!");
            fourthQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            fourthQuestion();
        }
    })
    choice3.addEventListener("click",function (event) {
        if (choice3 === correctAnswer) {
            console.log("Question 3 Correct!");
            fourthQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            fourthQuestion();
        }
    })
    choice4.addEventListener("click",function (event) {
        if (choice4 === correctAnswer) {
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
    choice1.textContent = "elit";
    choice2.textContent = "adipisicing";
    choice3.textContent = "consectetur";
    choice4.textContent = "amet";
    var correctAnswer = choice4;

    //functions for clicking answers
    choice1.addEventListener("click", function (event) {
        if (choice1 === correctAnswer) {
            console.log("Question 4 Correct!");
            fifthQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            fifthQuestion();
        }
    })
    choice2.addEventListener("click",function (event) {
        if (choice2 === correctAnswer) {
            console.log("Question 4 Correct!");
            fifthQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            fifthQuestion();
        }
    })
    choice3.addEventListener("click",function (event) {
        if (choice3 === correctAnswer) {
            console.log("Question 4 Correct!");
            fifthQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            fifthQuestion();
        }
    })
    choice4.addEventListener("click",function (event) {
        if (choice4 === correctAnswer) {
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
    choice1.textContent = "sit";
    choice2.textContent = "dolor";
    choice3.textContent = "ipsem";
    choice4.textContent = "lorem";
    var correctAnswer = choice1;

    //functions for clicking answers
    choice1.addEventListener("click", function (event) {
        if (choice1 === correctAnswer) {
            console.log("Question 5 Correct!");
            quizComplete();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            quizComplete();
        }
    })
    choice2.addEventListener("click",function (event) {
        if (choice2 === correctAnswer) {
            console.log("Question 5 Correct!");
            quizComplete();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            quizComplete();
        }
    })
    choice3.addEventListener("click",function (event) {
        if (choice3 === correctAnswer) {
            console.log("Question 5 Correct!");
            quizComplete();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            quizComplete();
        }
    })
    choice4.addEventListener("click",function (event) {
        if (choice4 === correctAnswer) {
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
    choice1.style.display = "none";
    choice2.style.display = "none";
    choice3.style.display = "none";
    choice4.style.display = "none";
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
    subtitle.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus tempore amet vitae unde vero reiciendis, temporibus, provident dolorum at odit officia omnis iste perspiciatis quis recusandae eligendi facilis. Qui!"
    choice1.style.display = "none";
    choice2.style.display = "none";
    choice3.style.display = "none";
    choice4.style.display = "none";
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