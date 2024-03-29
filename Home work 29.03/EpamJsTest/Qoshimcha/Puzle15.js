document.addEventListener("DOMContentLoaded", function() {
    const size = 4;
    const numbers = Array.from({ length: size * size - 1 }, (_, index) => index + 1);
    const puzzleContainer = document.getElementById("puzzle-container");
    const resetButton = document.getElementById("reset-button");

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function createTile(number) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.textContent = number;
        tile.addEventListener("click", () => moveTile(tile));
        return tile;
    }

    function createEmptyTile() {
        const tile = document.createElement("div");
        tile.classList.add("tile", "empty");
        return tile;
    }

    function renderPuzzle() {
        puzzleContainer.innerHTML = "";
        const tiles = [...numbers.map(createTile), createEmptyTile()];
        shuffle(tiles);
        tiles.forEach(tile => puzzleContainer.appendChild(tile));
    }

    function moveTile(tile) {
        const emptyTile = document.querySelector('.empty');
        if (!isAdjacent(tile, emptyTile)) return;

        const temp = tile.textContent;
        tile.textContent = '';
        emptyTile.textContent = temp;

        tile.classList.add('empty');
        emptyTile.classList.remove('empty');

        if (checkWin()) {
            setTimeout(() => {
                alert("Congratulations! You've won!");
                renderPuzzle();
            }, 300);
        }
    }

    function isAdjacent(tile, emptyTile) {
        const tileIndex = Array.from(puzzleContainer.children).indexOf(tile);
        const emptyIndex = Array.from(puzzleContainer.children).indexOf(emptyTile);
        const diff = Math.abs(tileIndex - emptyIndex);
        return (diff === 1 && Math.floor(tileIndex / size) === Math.floor(emptyIndex / size)) || diff === size;
    }

    function checkWin() {
        const tiles = Array.from(puzzleContainer.children);
        for (let i = 0; i < tiles.length - 1; i++) {
            if (tiles[i].textContent !== `${i + 1}`) return false;
        }
        return true;
    }

    resetButton.addEventListener("click", renderPuzzle);

    renderPuzzle();
});
