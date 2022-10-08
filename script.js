// variables (questions array)
var timerElement = document.querySelector(".timer");
var Prompts = document.querySelector(".prompts");
var startButton = document.querySelector(".startButton");

var score = "";

prompt = [""]
// function on counter start with base count (6000)
function onStart() {
    timerCount = 30,
    // prompt question from api
    renderQuestions(),
    startTimer()

}




function renderQuestions(){
    // on true function, prompt question
    // loop function to loop through prompts if count > 0
    for (let i = 0; i > prompts.length; i++) {
        textContent

    }


    // on false answer, take time away from overall time
    // loop function to loop through prompts if count > 0



}

function startTimer() {
    timer = setInterval(function() {
        timerCount --;
        timerElement.textContent = timerCount;
    })
}

function init() {
    getScore()
}