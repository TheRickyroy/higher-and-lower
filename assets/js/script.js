// Set variables for logic storage
// Player name is static in this version
let currentNumber = Math.floor(Math.random() * 10) + 1;
let hiddenNumber = Math.floor(Math.random() * 10) + 1;
let score = 0;
let playerName = "Player 01"; 

// highScore for leaderboard
let highScore = parseInt(localStorage.getItem('highScore')) || 0; 
document.getElementById('high-score').innerText = `High Score: ${highScore}`;

// Function to update the score
function updateScore(points) {
    score += points;
    document.getElementById('score').innerText = `Score: ${score}`;

    if (score > highScore) {
        highScore = score;
        document.getElementById('high-score').innerText = `High Score: ${highScore}`;
        updateHighScore(highScore);
    }
}

// Function to update the high score in localStorage and leaderboard
function updateHighScore(newHighScore) {
    localStorage.setItem('highScore', newHighScore);

    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    const playerEntry = { name: "Player 01", score: newHighScore };

    const existingIndex = leaderboard.findIndex(entry => entry.name === "Player 01");

    if (existingIndex !== -1) {
        if (newHighScore > leaderboard[existingIndex].score) {
            leaderboard[existingIndex] = playerEntry;
        }
    } else {
        leaderboard.push(playerEntry);
    }

    leaderboard.sort((a, b) => b.score - a.score);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard.slice(0, 3)));
}

//Keypress logic

document.addEventListener('keydown', function(event) {
   
    hiddenNumber = Math.floor(Math.random() * 10) + 1;
     
    if (event.key == 'H' || event.key == 'h') {
        if (hiddenNumber >= currentNumber) {
            console.log(`Your guess of higher is correct. The hidden number = ${hiddenNumber}`);
            currentNumber = hiddenNumber;
            updateScore(1);

        } else {
            console.log(`Your guess of higher is incorrect. The hidden number = ${hiddenNumber}`);
            resetGame();
           currentNumber = Math.floor(Math.random() * 10) + 1;
        }
    } else if (event.key == 'L' || event.key == 'l') {
        if (hiddenNumber <= currentNumber) {
            console.log(`Your guess of lower is correct. The hidden number = ${hiddenNumber}`);
            currentNumber = hiddenNumber;
            updateScore(1);
    
        } else {
            console.log(`Your guess of lower is incorrect. The hidden number = ${hiddenNumber}`);
            resetGame();
            currentNumber = Math.floor(Math.random() * 10) + 1;
        }
    }

    document.getElementById('current-card').innerText = `${currentNumber}`;
 
});

// Button logic 

function buttonGuess(guessHigh) {
    hiddenNumber = Math.floor(Math.random() * 10) + 1;
    
    if (guessHigh === true) {
        if (hiddenNumber >= currentNumber) {
            console.log(`Your guess of higher is correct. The hidden number = ${hiddenNumber}`);
            currentNumber = hiddenNumber;
            updateScore(1);
        } else {
            console.log(`Your guess of higher is incorrect. The hidden number = ${hiddenNumber}`);
            resetGame();
        }
    } else {
        if (hiddenNumber <= currentNumber) {
            console.log(`Your guess of lower is correct. The hidden number = ${hiddenNumber}`);
            currentNumber = hiddenNumber;
            updateScore(1);
        } else {
            console.log(`Your guess of lower is incorrect. The hidden number = ${hiddenNumber}`);
            resetGame();
        }
    }

    document.getElementById('current-card').innerText = `${currentNumber}`;
}

document.getElementById('higher-btn').addEventListener('click', function() {
    buttonGuess(true);
});

document.getElementById('lower-btn').addEventListener('click', function() {
    buttonGuess(false);
});

//function to reset the game
function resetGame() {
    score = 0;
    document.getElementById('score').innerText = `Score: ${score}`;
    currentNumber = Math.floor(Math.random() * 10) + 1;
}

window.onload = (event) => {
    startGame();
  };

// Function to start the game
function startGame() {
   score = 0; 
   gameOver = false; 
   
   document.getElementById('current-card').innerText = `${currentNumber}`;
   document.getElementById('next-card').innerText = '?';
  
}
