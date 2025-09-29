// Super Simple Tic Tac Toe - Beginner Friendly

let board = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;
let isHard = false;

// When page loads, set up clicks
document.addEventListener('DOMContentLoaded', function() {
    
    // Cell clicks
    for (let i = 0; i < 9; i++) {
        document.querySelector(`[data-index="${i}"]`).onclick = function() {
            playerClick(i);
        };
    }
    
    // Reset button
    document.getElementById('resetBtn').onclick = resetGame;
    
    // Easy button
    document.querySelector('[data-level="easy"]').onclick = function() {
        isHard = false;
        document.querySelector('[data-level="easy"]').classList.add('active');
        document.querySelector('[data-level="hard"]').classList.remove('active');
        resetGame();
    };
    
    // Hard button
    document.querySelector('[data-level="hard"]').onclick = function() {
        isHard = true;
        document.querySelector('[data-level="hard"]').classList.add('active');
        document.querySelector('[data-level="easy"]').classList.remove('active');
        resetGame();
    };
    
});

// Player clicks a cell
function playerClick(spot) {
    if (board[spot] !== '' || gameOver) return;
    
    // Put X
    board[spot] = 'X';
    document.querySelector(`[data-index="${spot}"]`).textContent = 'X';
    
    // Check if player won
    if (playerWon()) {
        document.getElementById('gameInfo').textContent = 'You win! 🎉';
        gameOver = true;
        return;
    }
    
    // Check if board full
    if (boardFull()) {
        document.getElementById('gameInfo').textContent = "It's a draw! 🤝";
        gameOver = true;
        return;
    }
    
    // Computer turn
    document.getElementById('gameInfo').textContent = "Computer thinking...";
    setTimeout(computerTurn, 300);
}

// Computer makes a move
function computerTurn() {
    if (gameOver) return;
    
    let spot;
    if (isHard) {
        spot = smartMove();
    } else {
        spot = randomMove();
    }
    
    // Put O
    board[spot] = 'O';
    document.querySelector(`[data-index="${spot}"]`).textContent = 'O';
    
    // Check if computer won
    if (computerWon()) {
        document.getElementById('gameInfo').textContent = 'Computer wins! 🤖';
        gameOver = true;
        return;
    }
    
    // Check if board full
    if (boardFull()) {
        document.getElementById('gameInfo').textContent = "It's a draw! 🤝";
        gameOver = true;
        return;
    }
    
    // Player turn again
    document.getElementById('gameInfo').textContent = 'Your turn (X)';
}

// Random move for easy mode
function randomMove() {
    let emptySpots = [];
    for (let i = 0; i < 9; i++) {
        if (board[i] === '') emptySpots.push(i);
    }
    let randomIndex = Math.floor(Math.random() * emptySpots.length);
    return emptySpots[randomIndex];
}

// Smart move for hard mode
function smartMove() {
    // Try to win
    for (let i = 0; i < 9; i++) {
        if (board[i] === '') {
            board[i] = 'O';
            if (computerWon()) {
                board[i] = '';
                return i;
            }
            board[i] = '';
        }
    }
    
    // Block player
    for (let i = 0; i < 9; i++) {
        if (board[i] === '') {
            board[i] = 'X';
            if (playerWon()) {
                board[i] = '';
                return i;
            }
            board[i] = '';
        }
    }
    
    // Take center
    if (board[4] === '') return 4;
    
    // Take corner
    let corners = [0, 2, 6, 8];
    for (let corner of corners) {
        if (board[corner] === '') return corner;
    }
    
    // Take any spot
    return randomMove();
}

// Check if player won
function playerWon() {
    return (
        (board[0] === 'X' && board[1] === 'X' && board[2] === 'X') ||
        (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') ||
        (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') ||
        (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') ||
        (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') ||
        (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') ||
        (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') ||
        (board[2] === 'X' && board[4] === 'X' && board[6] === 'X')
    );
}

// Check if computer won
function computerWon() {
    return (
        (board[0] === 'O' && board[1] === 'O' && board[2] === 'O') ||
        (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') ||
        (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') ||
        (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') ||
        (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') ||
        (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') ||
        (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') ||
        (board[2] === 'O' && board[4] === 'O' && board[6] === 'O')
    );
}

// Check if board is full
function boardFull() {
    for (let i = 0; i < 9; i++) {
        if (board[i] === '') return false;
    }
    return true;
}

// Start new game
function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    
    for (let i = 0; i < 9; i++) {
        document.querySelector(`[data-index="${i}"]`).textContent = '';
    }
    
    document.getElementById('gameInfo').textContent = 'Your turn (X)';
}