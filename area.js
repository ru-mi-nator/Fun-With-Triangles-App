const side = document.querySelectorAll(".side");
// const height = document.querySelector("#height");
const checkButton = document.querySelector("#check-area");
const outputDiv = document.querySelector("#output4")

function calculateArea() {
    const base = Number(side[0].value);
    const height = Number(side[1].value);
    if(base && height) {
        var area = areaComputation(base, height);
        outputDiv.innerText("The Area of the Triangle is " + area + "square units!");
    } else {
        outputDiv.innerText("Please enter all the values correctly!");
    }
}

function areaComputation(b,h) {
    area = (b*h)/2;
    return area;
}


checkButton.addEventListener("click", calculateArea);
