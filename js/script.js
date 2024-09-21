const blocks = document.querySelectorAll('.block'); 
const scoreNumbers = document.querySelectorAll('.scoreNum');
let currentPlayer = 'X';
let gameState = Array(9).fill(null); 
let scores = { X: 0, O: 0 }; 

    
function handleClick(event) {
    const index = event.target.dataset.index; 
 
    if (gameState[index] || checkWinner()) return;

       
    gameState[index] = currentPlayer;
    event.target.classList.add(currentPlayer); 

       
    if (checkWinner()) {
        alert(`${currentPlayer} виграв!`);
        scores[currentPlayer]++;
        updateScores();
    } else {
           
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}


function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6] 
    ];

    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return true; 
        }
    }
    return false; 
}

    
function updateScores() {
    scoreNumbers[0].textContent = scores.X; 
    scoreNumbers[1].textContent = scores.O; 
    resetGame(); 
}

   
function resetGame() {
    gameState.fill(null); 
    blocks.forEach(block => {
        block.classList.remove('X', 'O'); 
    });
    currentPlayer = 'X'; 
}

    
blocks.forEach(block => {
    block.addEventListener('click', handleClick);
});

