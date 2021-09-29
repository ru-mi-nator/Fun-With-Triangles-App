const sides = document.querySelectorAll('.side-input');
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const output3 = document.querySelector("#output3");

function calculateSumOfSquares(a,b) {
    if (a>0 && b>0) {
        const sumOfSquares = (a*a)+(b*b)
        return sumOfSquares;
    }
    else if (a<0 || b<0) {
        output3.innerText = "The values must be positive!"
    }
    else {
        output3.innerText = "Enter all the values correctly!"
    }

}

function calculateHypotenuse() {
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    output3.innerText = "The length of the hypotenuse is " + lengthOfHypotenuse;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);