// Function to save the player's score to the leaderboard in localStorage

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