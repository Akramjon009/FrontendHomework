let selected = null;

document.addEventListener("DOMContentLoaded", function() {
    const addCardBtn = document.getElementById('addCardBtn');
    const updateCardBtn = document.getElementById('updateCardBtn');
    const cardContainer = document.getElementById('cardContainer');
    const titleInput = document.getElementById('titleInput');
    const contentInput = document.getElementById('contentInput');
    let cardCount = 0;
    let currentCard = null;
  
    addCardBtn.addEventListener('click', function() {
      createCard();
    });
  
    updateCardBtn.addEventListener('click', function() {
        if (currentCard) {
            updateCard(currentCard);
        }
    });
  
    function createCard() {
      cardCount++;
      const card = document.createElement('div');

      card.classList.add('card');
      card.dataset.id = cardCount;
  
      const cardPhoto = document.createElement('img');
      cardPhoto.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQszlHszwNBGrTiF9GYwpy9Wa_PFel5bfLVI33LpEwOOA&s";
      cardPhoto.classList.add('card-img-top');
  
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
  
      const cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = titleInput.value || "Title";
  
      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.textContent = contentInput.value || "Content";
      titleInput.value = "";
      contentInput.value = "";
  
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('btn', 'btn-danger', 'mx-2');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', function() {
        titleInput.value = "";
        contentInput.value = "";
        card.remove();
      });
  
      const updateBtn = document.createElement('button');
      updateBtn.classList.add('btn', 'btn-success', 'mx-2');
      updateBtn.textContent = 'Update';
      updateBtn.addEventListener('click', function() {
        titleInput.value = cardTitle.textContent;
        contentInput.value = cardText.textContent;
        currentCard = card;
      });
  
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(updateBtn);
      cardBody.appendChild(deleteBtn);
      card.appendChild(cardPhoto);
      card.appendChild(cardBody);
  
      if (cardContainer.firstChild) {
        cardContainer.insertBefore(card, cardContainer.firstChild);
      } else {
        cardContainer.appendChild(card);
      }
    }
  
    function updateCard(card) {
      const cardTitle = card.querySelector('.card-title');
      const cardText = card.querySelector('.card-text');
      const updateBtn = card.querySelector('.btn-success');

      selected = updateBtn;
  
      if (cardTitle && cardText && updateBtn) {
          cardTitle.textContent = titleInput.value || "Title";
          cardText.textContent = contentInput.value || "Content";
          titleInput.value = "";
          contentInput.value = "";
          currentCard = null;
          updateBtn.textContent = 'Update';
      }
  }
  
  });
  