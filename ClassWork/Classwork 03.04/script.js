var selectedRow = null;
document.addEventListener("DOMContentLoaded", function () {
    var addCardBtn = document.getElementById('addCardBtn');
    var updateCardBtn = document.getElementById('updateCardBtn');
    var cardContainer = document.getElementById('cardContainer');
    var cardCount = 0;
    var currentCard = null;
    if (addCardBtn && updateCardBtn && cardContainer && document.getElementById('titleInput') && document.getElementById('contentInput')) {
        addCardBtn.addEventListener('click', function () {
            createCard();
        });
        updateCardBtn.addEventListener('click', function () {
            if (currentCard) {
                updateCard(currentCard);
            }
        });
    }
    function createCard() {
        cardCount++;
        var card = document.createElement('div');
        card.classList.add('card');
        card.dataset.id = cardCount.toString();
        var cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        var cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = document.getElementById('titleInput').value || "Title";
        var cardText = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent = document.getElementById('contentInput').value || "Content";
        document.getElementById('titleInput').value = "";
        document.getElementById('contentInput').value = "";
        var deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-danger', 'mx-2');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function () {
            document.getElementById('titleInput').value = "";
            document.getElementById('contentInput').value = "";
            if (card.parentElement) {
                card.parentElement.removeChild(card);
            }
        });
        var updateBtn = document.createElement('button');
        updateBtn.classList.add('btn', 'btn-success', 'mx-2');
        updateBtn.textContent = 'Update';
        updateBtn.addEventListener('click', function () {
            document.getElementById('titleInput').value = cardTitle.textContent || "";
            document.getElementById('contentInput').value = cardText.textContent || "";
            currentCard = card;
        });
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(updateBtn);
        cardBody.appendChild(deleteBtn);
        card.appendChild(cardBody);
        if (cardContainer.firstChild) {
            cardContainer.insertBefore(card, cardContainer.firstChild);
        }
        else {
            cardContainer.appendChild(card);
        }
    }
    function updateCard(card) {
        var cardTitle = card.querySelector('.card-title');
        var cardText = card.querySelector('.card-text');
        var updateBtn = card.querySelector('.btn-success');
        selectedRow = updateBtn;
        if (cardTitle && cardText && updateBtn) {
            cardTitle.textContent = document.getElementById('titleInput').value || "Title";
            cardText.textContent = document.getElementById('contentInput').value || "Content";
            document.getElementById('titleInput').value = "";
            document.getElementById('contentInput').value = "";
            currentCard = null;
            updateBtn.textContent = 'Update';
        }
    }
});
