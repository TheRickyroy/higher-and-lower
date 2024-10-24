// Function to save the player's score to the leaderboard in localStorage
// function saveScoreToLeaderboard() {
//     const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

//     const playerData = { name: playerName, score: score };

//     // Add the player's score to the leaderboard
//     leaderboard.push(playerData);

//     // Sort the leaderboard by score in descending order and keep only the top 3 scores
//     leaderboard.sort((a, b) => b.score - a.score);
//     const top3 = leaderboard.slice(0, 3);

//     // Save the updated leaderboard back to localStorage
//     localStorage.setItem('leaderboard', JSON.stringify(top3));
// }

/**
 * Handling loading and displaying the leaderboard 
 */

// Load the leaderboard from localStorage and display it
// window.onload = function() {
//     const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
//     const leaderboardList = document.getElementById('leaderboard-list');

//     leaderboard.forEach(player => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${player.name}: ${player.score}`;
//         leaderboardList.appendChild(listItem);
//     });
// };

function displayLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    const nameFields = document.querySelectorAll('.leaderboard .name');
    const scoreFields = document.querySelectorAll('.leaderboard .score');

    for (let i = 0; i < 3; i++) {
        if (leaderboard[i]) {
            nameFields[i].textContent = leaderboard[i].name;
            scoreFields[i].textContent = leaderboard[i].score;
        } else {
            nameFields[i].textContent = '-';
            scoreFields[i].textContent = '-';
        }
    }
}

// Call this function when the leaderboard page loads
window.addEventListener('load', displayLeaderboard);