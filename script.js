const question = [
    {
        question: "Which  is largest animal in the world?",
        answer: [
            { text: "Shark" , correct: false},
            { text: "Blue whale" , correct: true},
            { text: "Elephant" , correct: false},
            { text: "Giraffe" , correct: false},
        ]
    },
    {
        question: "Which  is smallest country in the world?",
        answer: [
            { text: "Vatican City" , correct: true},
            { text: "Bhutan" , correct: false},
            { text: "Nepal" , correct: false},
            { text: "Shri Lanka" , correct: false},
        ]
    },
    {
        question: " What gas is used to extinguish fires?",
        answer: [
            { text: "Oxygen" , correct: false},
            { text: "Nitrogen" , correct: true},
            { text: "Carbon dioxide" , correct: false},
            { text: "Hydrogen" , correct: false},
        ]
    },
    {
        question: " Which of the following planets is not a gas giant?",
        answer: [
            { text: "Mars" , correct: true},
            { text: "Jupiter" , correct: false},
            { text: "Saturn" , correct: false},
            { text: "Uranus" , correct: false},
        ]
    },
    {
        question: "  For which of these disciplines Nobel Prize is awarded?",
        answer: [
            { text: "Physics, Chemistry" , correct: false},
            { text: "Physiology" , correct: false},
            { text: "Medicine" , correct: false},
            { text: "All of the above" , correct: true},
        ]
    },
    {
        question: " Which river is the longest in the world?",
        answer: [
            { text: "Amazon" , correct: false},
            { text: "Mississippi" , correct: false},
            { text: "Nile" , correct: true},
            { text: "Yangtze" , correct: false},
        ]
    },
    {
        question: "Which  is largest desert in the world?",
        answer: [
            { text: "Kalahari" , correct: false},
            { text: "Gobi" , correct: false},
            { text: "Sahara" , correct: false},
            { text: "Antarctica" , correct: true},
        ]
    },
    {
        question: "Which  is smallest continent in the world?",
        answer: [
            { text: "Asia" , correct: false},
            { text: "Australia" , correct: true},
            { text: "Arctic" , correct: false},
            { text: "Africa" , correct: false},
        ]
    }

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

{}
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
 
}
function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;
   
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
    });
    }

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;       
    } else {
        selectedBtn.classList.add("incorrect");  
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}  
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    } else {
        showScore(); 
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < question.length){
        handleNextButton();
    } else {
        startQuiz(); 
    }
});
startQuiz();                                                  