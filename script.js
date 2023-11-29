//decalring variables
var questionsEl = document.querySelector("#questions") ;
var timerEl = document.querySelector("#timer"); 
var choicesEl =  document.querySelector("#options"); 
var submitBtn = document.querySelector(  "#submit-score");
var startBtn = document.querySelector("#start"); 
var nameEl = document.querySelector("#name"); 
var feedbackEl = document.querySelector( "#feedback"); 
let reStartBtn =  document.querySelector("#restart"); 

var quizArray = [
    {
    prompt: 
    'What does HTML stands for?',
    options: [ 
        "HyperText Markup Language", 
        "HyperText Machine Language", 
        "HyperText Marking Language", 
        "HighText Marking Language", 
    ], 
    answer: "HyperText Markup Language", 
}, 

{ 
    prompt: `How does a for loop 
             start?`, 
    options: [ 
        "for (i = 0; i <= 5; i++)", 
        "for (i = 0; i <= 5)", 
        "for i = 1 to 5", 
        " for (i <= 5; i++)", 
    ], 
    answer: "for (i = 0; i <= 5; i++)", 
}, 

{ 
    prompt: `In JavaScript, which  
             of the following is  
             a logical operator?`, 
    options: ["|", "&&", "%", "/"], 
    answer: "&&", 
}, 

{ 
    prompt: 'Inside which HTML element do we put the JavaScript?', 
    options: [ 
        "<js>", 
        "<script>", 
        "<javascript>", 
        "<scripting>", 
    ], 
    answer: "<script>  ", 
}, 
]; 
