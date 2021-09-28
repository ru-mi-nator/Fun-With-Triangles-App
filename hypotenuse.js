const sides = document.querySelectorAll('.side-input');
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const output3 = document.querySelector("#output3");

function calculateSumOfSquares(a,b) {
    const sumOfSquares = (a*a)+(b*b)
    return sumOfSquares;

}

function calculateHypotenuse() {
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    output3.innerText = "The length of the hypotenuse is " + lengthOfHypotenuse;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);