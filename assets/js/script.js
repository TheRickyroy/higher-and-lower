// Assigning variables
let currentNumber = Math.floor(Math.random() * 10) + 1;
let score = 0;
console.log(currentNumber);

// On loading generates random number
object.addEventListener("load", (generateRandom));

function generateRandom() {
    let numberDisplay = document.getElementById("current-card").innerContext;
    numberDisplay = currentNumber;
    console.log(numberDisplay);
}

