// variables (questions array)
var highScoreEl = document.querySelector(".highScore");
var timeEl = document.querySelector(".time");
var introEl = document.querySelector("intro")
var questionsEl = document.querySelector(".questions");
var startButtonEl = document.querySelector(".startButton");
var init = document.querySelector(".input-init");
var dashboard = document.querySelector(".dashboard");
var clockid = document.querySelector(".timer");
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var answer4El = document.querySelector("#answer4");
var score = "";

var questions = [{
    title: "new question 1",
    answers: ["answer1, answer2, answer 3, answer 4"],
    solution: "answer2"
}, {
    title: "new question 2",
    answers: ["answer1, answer2, answer 3, answer 4"],
    solution: "answer1"
}, {
    title: "new question 3",
    answers: ["answer1, answer2, answer 3, answer 4"],
    solution: "answer3"
}];

var index = 0

// function on counter start with base count (7500)
function onStart() {
    timerCount = 75;
    questionsEl.classList.remove(".hide");
    introEl.classList.add(".hide")

    // prompt question and 4 answers, and start page is hidden 
    renderQuestions();
    startTimer();

};



function renderQuestions() {
    // on true function, prompt question
    // loop function to loop through prompts if count > 0
    titleEl.textContent = questions[index].title
    answer1El.textContent=questions[index].answers[0]
    answer2El.textContent=questions[index].answers[1]
    answer3El.textContent=questions[index].answers[2]
    answer4El.textContent=questions[index].answers[3]


    // on false answer, take 15 sec away from overall time
    // loop function to loop through prompts if count > 0



};

function startTimer() {
    timer = setInterval(function () {
        timeEl.textContent = timerCount;
        timerCount--;

    })
};


// presented with the score and input for initials. Timer should stop and the time left is the score
function init() {
    getScore()
}

addEventListener.addEventListener("click", onStart)