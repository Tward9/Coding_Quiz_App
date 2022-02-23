var startButton = document.querySelector("#startButton");
var quizArea = document.querySelector("#quizArea");
var timer = document.querySelector("#timer");
var subtitle = document.querySelector("#subtitle");
var timerEl;
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var countdown = 10;
var scoreButton = document.querySelector("#scoreButton");
var initialsInput = document.querySelector("#initialsInput");
var saveButton = document.querySelector("#saveButton");
var initialsPrompt = document.querySelector("#initialsPrompt");

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
function firstQuestion() {
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
    var correctAnswer = choice2;

    //functions for clicking answers
    choice1.addEventListener("click", function () {
        if (choice1 === correctAnswer) {
            console.log("Correct!");
            secondQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            secondQuestion();
        }
    })
    choice2.addEventListener("click",function () {
        if (choice2 === correctAnswer) {
            console.log("Correct!");
            secondQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            secondQuestion();
        }
    })
    choice3.addEventListener("click",function () {
        if (choice3 === correctAnswer) {
            console.log("Correct!");
            secondQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            secondQuestion();
        }
    })
    choice4.addEventListener("click",function () {
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
    quizArea.textContent = "lorem ipsum dolor sit amet consectetur adipisicing elit";
    choice1.textContent = "lorem";
    choice2.textContent = "amet";
    choice3.textContent = "adipisicing";
    choice4.textContent = "sit";
    var correctAnswer = choice2;

    //functions for clicking answers
    choice1.addEventListener("click", function () {
        if (choice1 === correctAnswer) {
            console.log("Correct!");
            thirdQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            thirdQuestion();
        }
    })
    choice2.addEventListener("click",function () {
        if (choice2 === correctAnswer) {
            console.log("Correct!");
            thirdQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            thirdQuestion();
        }
    })
    choice3.addEventListener("click",function () {
        if (choice3 === correctAnswer) {
            console.log("Correct!");
            thirdQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            thirdQuestion();
        }
    })
    choice4.addEventListener("click",function () {
        if (choice4 === correctAnswer) {
            console.log("Correct!");
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
    quizArea.textContent = "lorem ipsum dolor sit amet consectetur adipisicing elit";
    choice1.textContent = "dolor";
    choice2.textContent = "ipsum";
    choice3.textContent = "consectetur";
    choice4.textContent = "elit";
    var correctAnswer = choice2;

    //functions for clicking answers
    choice1.addEventListener("click", function () {
        if (choice1 === correctAnswer) {
            console.log("Correct!");
            fourthQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            fourthQuestion();
        }
    })
    choice2.addEventListener("click",function () {
        if (choice2 === correctAnswer) {
            console.log("Correct!");
            fourthQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            fourthQuestion();
        }
    })
    choice3.addEventListener("click",function () {
        if (choice3 === correctAnswer) {
            console.log("Correct!");
            fourthQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            fourthQuestion();
        }
    })
    choice4.addEventListener("click",function () {
        if (choice4 === correctAnswer) {
            console.log("Correct!");
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
    quizArea.textContent = "lorem ipsum dolor sit amet consectetur adipisicing elit";
    choice1.textContent = "elit";
    choice2.textContent = "adipisicing";
    choice3.textContent = "consectetur";
    choice4.textContent = "amet";
    var correctAnswer = choice2;

    //functions for clicking answers
    choice1.addEventListener("click", function () {
        if (choice1 === correctAnswer) {
            console.log("Correct!");
            fifthQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            fifthQuestion();
        }
    })
    choice2.addEventListener("click",function () {
        if (choice2 === correctAnswer) {
            console.log("Correct!");
            fifthQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            fifthQuestion();
        }
    })
    choice3.addEventListener("click",function () {
        if (choice3 === correctAnswer) {
            console.log("Correct!");
            fifthQuestion();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            fifthQuestion();
        }
    })
    choice4.addEventListener("click",function () {
        if (choice4 === correctAnswer) {
            console.log("Correct!");
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
    quizArea.textContent = "lorem ipsum dolor sit amet consectetur adipisicing elit";
    choice1.textContent = "sit";
    choice2.textContent = "dolor";
    choice3.textContent = "ipsem";
    choice4.textContent = "lorem";
    var correctAnswer = choice2;

    //functions for clicking answers
    choice1.addEventListener("click", function () {
        if (choice1 === correctAnswer) {
            console.log("Correct!");
            quizComplete();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            quizComplete();
        }
    })
    choice2.addEventListener("click",function () {
        if (choice2 === correctAnswer) {
            console.log("Correct!");
            quizComplete();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            quizComplete();
        }
    })
    choice3.addEventListener("click",function () {
        if (choice3 === correctAnswer) {
            console.log("Correct!");
            quizComplete();
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            quizComplete();
        }
    })
    choice4.addEventListener("click",function () {
        if (choice4 === correctAnswer) {
            console.log("Correct!");
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
}
//enter intials, save score

document.onkeydown = logInitial;
var initials = [];
function logInitial(event) {
    event.preventDefault();
    var key = event.key;
    initials.push(key);
    initialsInput.textContent = initials.join(" ");
    console.log(initials);
    if (initials.length === 3) {
        // set save button, 
        //go to list of high scores
        return initials;
    }
    saveButton.addEventListener("click", function(){
        console.log("Saving Iintials and Score");
    })
}
//retain high scores (local storage)

//clear scores button