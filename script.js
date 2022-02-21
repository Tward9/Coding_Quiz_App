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

//when start button pressed, start timer, present first question
startButton.addEventListener("click", function () {
    console.log("Start Quiz");
    firstQuestion();
    console.log("next questions");
    //timer 
    timerEl = setInterval (function () {
        if (countdown === 0) {
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
            //question 2 function
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            //question 2 function
        }
    })
    choice2.addEventListener("click",function () {
        if (choice2 === correctAnswer) {
            console.log("Correct!");
            //question 2 function
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            //question 2 function
        }
    })
    choice3.addEventListener("click",function () {
        if (choice3 === correctAnswer) {
            console.log("Correct!");
            //question 2 function
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            //question 2 function
        }
    })
    choice4.addEventListener("click",function () {
        if (choice4 === correctAnswer) {
            console.log("Correct!");
            //question 2 function
        }else{
            console.log(`Incorect, the Correct Answer was ${correctAnswer.textContent}`);
            countdown = countdown - 5;
            //question 2 function
        }
    })
}

//question 2 function
//question 3
//question 4
//question 5
//answered final question or timer hits zero, end game
//quiz complete function
function quizComplete() {
    clearInterval(timerEl);
    timer.textContent = "";
    quizArea.textContent = "Quiz Complete!"
    //go to intial input function
}
//times up funtion
function timesUp() {
    clearInterval(timerEl);
    timer.textContent = "";
    quizArea.textContent = "Time Has Run Out!"
    //go to intial input function
}

//question answered, present next question

//question incorect, subtract remaining time from timer

//enter intials, save score

//retain high scores (local storage)

//clear scores button