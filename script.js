var startButton = document.querySelector("#startButton");
var quizArea = document.querySelector("#quizArea");
var timer = document.querySelector("#timer");
var subtitle = document.querySelector("#subtitle");
var timerEl;

//when start button pressed, start timer, present first question
startButton.addEventListener("click", function () {
    console.log("Start Quiz");
    quizArea.textContent = ""; //function to present next question
    console.log("next questions");
    
    //timer 
    var countdown = 10;
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
//present question function

//question answered, present next question

//question incorect, subtract remaining time from timer

//enter intials, save score

//retain high scores (local storage)

//clear scores button