let selectedRow: HTMLElement | null = null;

document.addEventListener("DOMContentLoaded", function() {
    const addCardBtn: HTMLElement | null = document.getElementById('addCardBtn');
    const updateCardBtn: HTMLElement | null = document.getElementById('updateCardBtn');
    const cardContainer: HTMLElement | null = document.getElementById('cardContainer');
    let cardCount: number = 0;
    let currentCard: HTMLElement | null = null;

    if (addCardBtn && updateCardBtn && cardContainer && document.getElementById('titleInput') as HTMLInputElement && document.getElementById('contentInput') as HTMLInputElement) {
        addCardBtn.addEventListener('click', function() {
            createCard();
        });

        updateCardBtn.addEventListener('click', function() {
            if (currentCard) {
                updateCard(currentCard);
            }
        });
    }

    function createCard() {
        cardCount++;
        const card: HTMLDivElement = document.createElement('div');

        card.classList.add('card');
        card.dataset.id = cardCount.toString();

        const cardBody: HTMLDivElement = document.createElement('div');
        cardBody.classList.add('card-body');

        const cardTitle: HTMLHeadingElement = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = (document.getElementById('titleInput') as HTMLInputElement).value || "Title";

        const cardText: HTMLParagraphElement = document.createElement('p');
        cardText.classList.add('card-text');
        cardText.textContent = (document.getElementById('contentInput') as HTMLInputElement).value || "Content";
        (document.getElementById('titleInput') as HTMLInputElement).value = "";
        (document.getElementById('contentInput') as HTMLInputElement).value = "";

        const deleteBtn: HTMLButtonElement = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-danger', 'mx-2');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            (document.getElementById('titleInput') as HTMLInputElement).value = "";
            (document.getElementById('contentInput') as HTMLInputElement).value = "";
            if (card.parentElement) {
                card.parentElement.removeChild(card);
            }
        });

        const updateBtn: HTMLButtonElement = document.createElement('button');
        updateBtn.classList.add('btn', 'btn-success', 'mx-2');
        updateBtn.textContent = 'Update';
        updateBtn.addEventListener('click', function() {
            (document.getElementById('titleInput') as HTMLInputElement).value = cardTitle.textContent || "";
            (document.getElementById('contentInput') as HTMLInputElement).value = cardText.textContent || "";
            currentCard = card;
        });

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(updateBtn);
        cardBody.appendChild(deleteBtn);
        card.appendChild(cardBody);

        if (cardContainer) {
            if (cardContainer.firstChild) {
                cardContainer.insertBefore(card, cardContainer.firstChild);
            } else {
                cardContainer.appendChild(card);
            }
        }
    }

    function updateCard(card: HTMLElement) {
        const cardTitle: HTMLElement | null = card.querySelector('.card-title');
        const cardText: HTMLElement | null = card.querySelector('.card-text');
        const updateBtn: HTMLElement | null = card.querySelector('.btn-success');

        selectedRow = updateBtn;

        if (cardTitle && cardText && updateBtn) {
            cardTitle.textContent = (document.getElementById('titleInput') as HTMLInputElement).value || "Title";
            cardText.textContent = (document.getElementById('contentInput') as HTMLInputElement).value || "Content";
            (document.getElementById('titleInput') as HTMLInputElement).value = "";
            (document.getElementById('contentInput') as HTMLInputElement).value = "";
            currentCard = null;
            updateBtn.textContent = 'Update';
        }
    }
});
