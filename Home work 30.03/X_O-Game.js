let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

function renderBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.innerText = board[index];
    });
}

function handleCellClick(index) {
    if (board[index] === '' && !checkWinner()) {
        board[index] = currentPlayer;
        renderBoard();
        if (checkWinner()) {
            alert(`Player ${currentPlayer} wins!`);
        } else if (board.every(cell => cell !== '')) {
            alert("It's a draw!");
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombinations.some(combination => {
        return combination.every(index => board[index] === currentPlayer);
    });
}

function resetGame() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    renderBoard();
}
