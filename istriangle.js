const inputs = document.querySelectorAll('.angle-input');
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output1 = document.querySelector("#output");


function calculateSumOfAngles(angle1, angle2, angle3) {
    if (angle1>0 && angle2>0 && angle3>0) {
        const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
    } else if (angle1<0 || angle2<0 || angle3<0) {
        output1.innerText = "Values can't be negative!"
    } else {
        output1.innerText = "Please enter all the values!"
    }
    
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