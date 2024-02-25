//decalring variables
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#timer");
var choicesEl = document.querySelector("#options");
var submitBtn = document.querySelector("#submit-score");
var startBtn = document.querySelector("#start");
var nameEl = document.querySelector("#name");
var feedbackEl = document.querySelector("#feedback");
let reStartBtn = document.querySelector("#restart");
let questionWordsEl = document.getElementById("question-words")
let choicesListEl = document.querySelectorAll(".choices");
let answerEl=document.getElementById("check-answer");
let quizendEl=document.querySelector("#quiz-end");
let scoreEl=document.getElementById("score");
for(let i=0;i<choicesListEl.length;i++){
    choicesListEl[i].addEventListener("click",checkAnswer)
}
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
var currentQuestion=0;
var score=0;
var timercount = quizArray.length*5;
var timerobject;


startBtn.addEventListener("click",function(){
    questionsEl.classList.remove("hide")
    document.getElementById("quiz-start").classList.add("hide")
    displayQuestion()
    timerobject=setInterval(function(){
        timerEl.textContent=timercount;
        if(timercount<=0){
           timerEl.textContent="Time Up";
           endquiz();
        }
        timercount--;
    },1000)
    
})

function displayQuestion(){
    questionWordsEl.textContent = quizArray[currentQuestion].prompt
    for(let i=0;i<4;i++){
        choicesListEl[i].textContent = quizArray[currentQuestion].options[i]
    }
}

function checkAnswer(event){
    console.log(event.target.textContent)
   var userchoices= event.target.textContent
   if(userchoices==quizArray[currentQuestion].answer){
    score += 5
    answerEl.textContent="Correct Answer"
    scoreEl.textContent=score;
   }else{
    answerEl.textContent="Wrong Answer"
    timercount-=5;
    timerEl.textContent=timercount;
   }
   if(currentQuestion < quizArray.length-1){
    currentQuestion++
    displayQuestion()
   }else{
    endquiz();
   }
};
function endquiz() {
    clearInterval(timerobject);
    questionsEl.classList.add("hide");
    quizendEl.classList.remove("hide");
    timerEl.textContent=timercount;
    scoreEl.textContent=score;
     document.getElementById("score-final").innerText="Your Final Score is:"+(timercount+score);
};

document.getElementById("submit-score").addEventListener("click",function(event){
    event.preventDefault();
    var username=document.getElementById("name").value;
    console.log(username);
    var previousdashboard=JSON.parse(localStorage.getItem("codequiz")) || []
    previousdashboard.push({
        user:username,finalscore:(timercount+score)
    })
    localStorage.setItem("codequiz",JSON.stringify(previousdashboard));
    document.getElementById("feedback").classList.remove("hide");
    quizendEl.classList.add("hide");
})
    