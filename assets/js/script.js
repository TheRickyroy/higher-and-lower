//Code from today for functionality :

//Score should update on screen
//H and L key press should work
//Number should get replaced with new 'hiddenNumber'
//Buttons for up and down should now work

let currentNumber = Math.floor(Math.random() * 10) + 1;
let hiddenNumber = Math.floor(Math.random() * 10) + 1;
let score = 0;
//console.log(`Current number: ${currentNumber} | score : + ${score}`);


//keypress decide

document.addEventListener('keydown', function(event) {
    //need the hidden number to update too!!
    hiddenNumber = Math.floor(Math.random() * 10) + 1;
     
    if (event.key == 'H' || event.key == 'h') {
        if (hiddenNumber >= currentNumber) {
            console.log(`Your guess of higher is correct. The hidden number = ${hiddenNumber}`);
            currentNumber = hiddenNumber;
            score++;
        } else {
            console.log(`Your guess of higher is incorrect. The hidden number = ${hiddenNumber}`);
            score = 0;
           currentNumber = Math.floor(Math.random() * 10) + 1;
        }
    } else if (event.key == 'L' || event.key == 'l') {
        if (hiddenNumber <= currentNumber) {
            console.log(`Your guess of lower is correct. The hidden number = ${hiddenNumber}`);
            currentNumber = hiddenNumber;
            score++;
        } else {
            console.log(`Your guess of lower is incorrect. The hidden number = ${hiddenNumber}`);
            score = 0;
            currentNumber = Math.floor(Math.random() * 10) + 1;
        }
    }

    console.log(`Current score: ${score}`);
    console.log(`New current number: ${currentNumber}`);

    document.getElementById('current-card').innerText = `${currentNumber}`;
    document.getElementById('score').innerText = `Score: ${score}`;
});

// Button decide - same logic as before but needed to make it a function then call it with the click function below

function buttonGuess(guessHigh) {
    
    hiddenNumber = Math.floor(Math.random() * 10) + 1;
  if (guessHigh == true) {
      if (hiddenNumber >= currentNumber) {
          console.log(`Your guess of higher is correct. The hidden number = ${hiddenNumber}`);
          currentNumber = hiddenNumber;
          score++;
      } else {
          console.log(`Your guess of higher is incorrect. The hidden number = ${hiddenNumber}`);
          score = 0;
          currentNumber = Math.floor(Math.random() * 10) + 1;
      }
    }
  //} else {
  if (guessHigh === false) {
      if (hiddenNumber <= currentNumber) {
          console.log(`Your guess of lower is correct. The hidden number = ${hiddenNumber}`);
          currentNumber = hiddenNumber;
          score ++;
      } else {
          console.log(`Your guess of lower is incorrect. The hidden number = ${hiddenNumber}`);
          score = 0;
          currentNumber = Math.floor(Math.random() * 10) + 1;
      }
  }

  console.log(`Current score: ${score}`);
  console.log(`New current number: ${currentNumber}`);

  document.getElementById('current-card').innerText = `${currentNumber}`;
  document.getElementById('score').innerText = `Score: ${score}`;
};

document.getElementById('higher-btn').addEventListener('click', function() {
    buttonGuess(true);
});


document.getElementById('lower-btn').addEventListener('click', function() {
    buttonGuess(false);
});


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

window.onload = (event) => {
    startGame();
  };

// Function to start the game
function startGame() {
   score = 0; // Reset score
   gameOver = false; // Set game state to active
   
   document.getElementById('current-card').innerText = `${currentNumber}`; // Display the initial number and suit
   document.getElementById('next-card').innerText = '?'; // Hide next card initially
}

//Highscore

//if score > highScore then highScore = score


