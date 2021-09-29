const side = document.querySelectorAll(".side");
// const height = document.querySelector("#height");
const checkButton = document.querySelector("#check-area");
const output4 = document.querySelector("#output4")

function calculateArea() {
    const base = Number(side[0].value);
    const height = Number(side[1].value);
    if(base>0 && height>0) {
        var area = areaComputation(base, height);
        output4.innerText = "The Area of the Triangle is " + area + "square units!";
    } else if (base<0 || height<0 ) {
        output4.innerText = "Values cant be negative!"
    }
    else {
        output4.innerText = "Please enter all the values correctly!";
    }
}

function areaComputation(b,h) {
    area = (b*h)/2;
    return area;
}


checkButton.addEventListener("click", calculateArea);
