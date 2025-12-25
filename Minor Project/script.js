const questionEl = document.getElementById("question");
const optionBtns = document.querySelectorAll(".option-btn");
const scoreEl = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");
const startBtn = document.getElementById("startBtn");
let currentQuestionIndex = 0;
let score = 0;
const questions = [
    {
        question: "Which language of the following is a low level language?",
        options: ["Java","Python","C","Assembly"],
        answer: "Assembly"
    },
    {
        question: "Which language is used as a skeleton for web development?",
        options:["HTML","CSS","Javascript","Java"],
        answer: "HTML"
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["HTML","CSS","Javascript","Java"],
        answer: "CSS"
    },
    {
        question: "Which language is statically typed?",
        options: ["Python","Javascript","Java","Ruby"],
        answer: "Java"
    }
];
function loadQuestion(){
    let q = questions[currentQuestionIndex];
    questionEl.innerHTML = q.question;

    optionBtns.forEach((btn, index) => {
        btn.innerHTML = q.options[index];
        btn.classList.remove("correct", "wrong");
        btn.disabled = false;
    });
}
optionBtns.forEach(btn =>{
    btn.addEventListener("click", () =>{
        let selected = btn.innerHTML;
        let correct = questions[currentQuestionIndex].answer;
        if(selected === correct){
            btn.classList.add("correct");
            score++;
            scoreEl.innerHTML = "Score: " + score;
        } else {
            btn.classList.add("wrong");
        }
        optionBtns.forEach(b => b.disabled = true);
    });
});
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        loadQuestion();
    } else {
        questionEl.innerHTML = "Quiz Completed!";
        document.querySelector(".options").innerHTML = "";
        scoreEl.innerHTML = `Your Score: ${score} / ${questions.length}`;
        nextBtn.disabled = true;
    }
});
startBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    scoreEl.innerHTML = "Score: 0";
    loadQuestion();
});



