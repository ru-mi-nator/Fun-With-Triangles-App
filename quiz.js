const quizForm = document.querySelector('.quiz-form');
const submitAnsBtn = document.querySelector('#submit-ans-btn');
const output2 = document.querySelector("#output");

const correctAnswer = ["90°", "Right Angled", "Equilateral", "Two sides are equal", "Equilateral", "Isosceles", "Obtuse", "Acute"]

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()) {
        if(value === correctAnswer[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    output2.innerText = "Your score is " + score;
}

submitAnsBtn.addEventListener('click', calculateScore);