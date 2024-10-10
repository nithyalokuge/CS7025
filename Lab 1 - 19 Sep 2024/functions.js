let playerScore = 0;

// Function that adds one to the playerScore
function addScore() {
    playerScore = playerScore + 1;
}

// Function that displays the value of the playerScore
function displayScore() {
    console.log(playerScore);
}

// Check if the playerScore value is even or odd
function checkOddOrEven() {
    if (playerScore % 2 === 0) {
        console.log(playerScore + " is even.");
    } else {
        console.log(playerScore + " is odd.");
    }
}

addScore();
displayScore();
checkOddOrEven();