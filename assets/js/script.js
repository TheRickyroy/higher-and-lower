//Code from today for functionality :

//Score should update on screen
//H and L key press should work
//Number should get replaced with new 'hiddenNumber'
//Buttons for up and down should now work

let currentNumber = Math.floor(Math.random() * 10) + 1;
let hiddenNumber = Math.floor(Math.random() * 10) + 1;
let score = 0;
let playerName = "Player 01"; //Leaderboard

// let highScore = 0; //Leaderboard
//HELPED
let highScore = parseInt(localStorage.getItem('highScore')) || 0; // Initialize highScore from localStorage
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






//MC:
// ... game logic that updates the score ...
// When the game ends:
// playerName = prompt(“Enter your name:“);
// saveScoreToLeaderboard();
//console.log(`Current number: ${currentNumber} | score : + ${score}`);


//keypress decide

document.addEventListener('keydown', function(event) {
    //need the hidden number to update too!!
    hiddenNumber = Math.floor(Math.random() * 10) + 1;
     
    if (event.key == 'H' || event.key == 'h') {
        if (hiddenNumber >= currentNumber) {
            console.log(`Your guess of higher is correct. The hidden number = ${hiddenNumber}`);
            currentNumber = hiddenNumber;
            updateScore(1);

            //score++;
        } else {
            console.log(`Your guess of higher is incorrect. The hidden number = ${hiddenNumber}`);
            resetGame();
            //score = 0;
           currentNumber = Math.floor(Math.random() * 10) + 1;
        }
    } else if (event.key == 'L' || event.key == 'l') {
        if (hiddenNumber <= currentNumber) {
            console.log(`Your guess of lower is correct. The hidden number = ${hiddenNumber}`);
            currentNumber = hiddenNumber;
            updateScore(1);
            //score++;
        } else {
            console.log(`Your guess of lower is incorrect. The hidden number = ${hiddenNumber}`);
            resetGame();
            //score = 0;
            currentNumber = Math.floor(Math.random() * 10) + 1;
        }
    }

    //console.log(`Current score: ${score}`);
    //console.log(`New current number: ${currentNumber}`);

    document.getElementById('current-card').innerText = `${currentNumber}`;
    //document.getElementById('score').innerText = `Score: ${score}`;

     //high-score LEADERBOARD
    //document.getElementById('high-score').innerText = `High Score: ${highScore}`;

   

});

// Button decide - same logic as before but needed to make it a function then call it with the click function below

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
     //high-score LEADERBOARD
     //document.getElementById('high-score').innerText = `High Score: ${highScore}`;


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
   score = 0; // Reset score
   gameOver = false; // Set game state to active
   
   document.getElementById('current-card').innerText = `${currentNumber}`; // Display the initial number and suit
   document.getElementById('next-card').innerText = '?'; // Hide next card initially
   //displayMessage(`Current Card: ${currentCard.number}${currentCard.suit}`); // Initial message
}














//Page load event:

// window.onload = (event) => {
//     startGame();
//   };

// Function to start the game
// function startGame() {
//    score = 0; // Reset score
//    gameOver = false; // Set game state to active
   
//    document.getElementById('current-card').innerText = `${currentNumber}`; // Display the initial number and suit
//    document.getElementById('next-card').innerText = '?'; // Hide next card initially
// }










//NEW CODE:

// function updateScore(points) {
//     score += points;
    
    // Check if the current score is higher than the high score
    // if (score > highScore) {
    //     highScore = score;
    //     updateHighScore(highScore);
    // }
    
    // Update score display...
// }

// function resetScore() {
//     score = 0;
//     Reset score display...
// }

// function updateHighScore(newHighScore) {
    // Save the new high score to localStorage
    // localStorage.setItem('highScore', newHighScore);
    
    // Update the leaderboard
    // const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    // const playerEntry = { name: "Player 01", score: newHighScore };
    
    // Check if Player 01 already exists in the leaderboard
    // const existingIndex = leaderboard.findIndex(entry => entry.name === "Player 01");
    
    // if (existingIndex !== -1) {
        // Update existing entry if the new score is higher
        // if (newHighScore > leaderboard[existingIndex].score) {
            // leaderboard[existingIndex] = playerEntry;
        // }
    // } else {
        // Add new entry
        // leaderboard.push(playerEntry);
    // }
    
    // Sort and keep top 3
    // leaderboard.sort((a, b) => b.score - a.score);
    // localStorage.setItem('leaderboard', JSON.stringify(leaderboard.slice(0, 3)));
// }

// Call this when starting a new game session
// function initializeGame() {
    // score = 0;
    // highScore = parseInt(localStorage.getItem('highScore')) || 0;
    // Other game initialization...
// }

// window.onload = (event) => {
    // initializeGame();
// };



// Function to save score when game ends
// function saveScore(score) {
//     const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
//     leaderboard.push({ name: "Player 01", score: score });
//     leaderboard.sort((a, b) => b.score - a.score);
//     localStorage.setItem('leaderboard', JSON.stringify(leaderboard.slice(0, 3)));
// }

