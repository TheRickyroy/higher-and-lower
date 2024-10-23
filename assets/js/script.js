// Assigning variables
Let score = 0;

// Generate a random number between 1 and 10 and displays
document.getElementById("btn-start").document.addEventListener('click', generateRandom)

function generateRandom() {
    let numberDisplay = document.getElementById(“display”);
    let currentNumber = Math.floor(Math.random() * 10) + 1;
    let hiddenNumber = Math.floor(Math.random() * 10) + 1;  
    console.log(currentNumber)
    numberDisplay.innerHTML = currentNumber
    }

    // GuessedCorrectly message
const guessedCorrectly = “Correct!”;

// Guessed wrong message
const guessedWrong = “Incorrect! Try again?”;
    
// Higher 
let isHigher = previous number >= previousNumber;
let isLower = randomNumber <= previousNumber;

if (userChoice === ‘higher’ && isHigher) || (userChoice === ‘lower’ && isLower); {
return guessedCorrectly ;
currentNumber += hiddenNumber
Score ++
} else { return guessedWrong;
}
