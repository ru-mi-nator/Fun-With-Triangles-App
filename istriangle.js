const inputs = document.querySelectorAll('.angle-input');
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output1 = document.querySelector("#output");


function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}

function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if (sumOfAngles === 180) {
        console.log("Yes");
        output1.innerText = "Woohoo! The angles form a triangle!!"        
    } else {
        console.log("No");
        output1.innerText = "Oops! The angles do not form a triangle!!"
    }
    // console.log(sumOfAngles)
}

isTriangleBtn.addEventListener("click", isTriangle)