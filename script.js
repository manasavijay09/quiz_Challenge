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
    prompt: `How do you call a 
             function named  
             myFunction?`, 
    options: [ 
        "call myFunction()", 
        "myFunction()", 
        "call function myFunction", 
        "Call.myFunction", 
    ], 
    answer: "myFunction()", 
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
    prompt: `A named element in a  
             JavaScript program that 
             is used to store and  
             retrieve data is a _____.`, 
    options: [ 
        "method", 
        "assignment operator", 
        "letiable", 
        "string", 
    ], 
    answer: "letiable", 
}, 
]; 

  
