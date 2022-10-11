// variables (questions array)

var timerElement = document.querySelector(".timer");
var Prompts = document.querySelector(".prompts");
var startButton = document.querySelector(".startButton");

var score = "";

prompt = [""]
// function on counter start with base count (6000)
function onStart() {
    timerCount = 75,
    // prompt question and 4 answers, and start page is hidden 
    renderQuestions(),
    startTimer()

}




function renderQuestions(){
    // on true function, prompt question
    // loop function to loop through prompts if count > 0
    for (let i = 0; i > prompts.length; i++) {
        textContent

    }


    // on false answer, take 15 sec away from overall time
    // loop function to loop through prompts if count > 0



}

function startTimer() {
    timer = setInterval(function() {
        timerCount --;
        timerElement.textContent = timerCount;
    })
}


// presented with the score and input for initials. Timer should stop and the time left is the score
function init() {
    getScore()
}

addEventListener.butt