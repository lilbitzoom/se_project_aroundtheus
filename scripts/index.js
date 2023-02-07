const initialCards = [
  {
    name: 'San Francisco',
    link: 'https://images.unsplash.com/photo-1670808542784-d8a43a98f35a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80',
  },
  {
    name: 'Jurassic Coast',
    link: 'https://images.unsplash.com/photo-1670793030150-75600982af60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80',
  },
  {
    name: 'Stavanger',
    link: 'https://images.unsplash.com/photo-1670500557067-3e2b3dde6625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    name: 'New York',
    link: 'https://images.unsplash.com/photo-1670477293988-e76875167eec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
  },
  {
    name: 'Cottonwood Canyon',
    link: 'https://images.unsplash.com/photo-1670509917257-ea50fa82f5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80',
  },
  {
    name: 'Base Harbor',
    link: 'https://images.unsplash.com/photo-1670349928042-519fee6e11de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80',
  },
];
//Variable Declarations

const modalCardOverlay = document.querySelector('#new-card-overlay');
const modalImageOverlay = document.querySelector('#image_pop-up-overlay');

const cardListEl = document.querySelector('.cards__list');
const initialCardsLength = initialCards.length;
const cardTemplate = document.querySelector('#card').content;

const profileAddButton = document.querySelector('.profile__add-button');
const modalCard = document.querySelector('#new-card');
const cardCloseButton = modalCard.querySelector('#new_card_close_button');
const cardSaveButton = modalCard.querySelector('.modal__save-button');
const cardAddForm = modalCard.querySelector('.modal__form');
const modalImage = document.querySelector('#image_pop-up');
const imageCloseButton = document.querySelector('#image_pop-up_close_button');

//Function to present cards based off of initialCards array
function getCardElement(cardData) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImageEL = cardElement.querySelector('.card__image');
  const cardTitleEl = cardElement.querySelector('.card__title');
  cardImageEL.src = cardData.link;
  cardImageEL.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;

  //event listener for like feature
  const cardLikeButton = cardElement.querySelector('.card__like-button');
  cardLikeButton.addEventListener('click', () => {
    cardLikeButton.classList.toggle('like-button__selected');
  });
  //  event listener deleting card
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  cardDeleteButton.addEventListener('click', (evt) => {
    evt.target.closest('.card').remove();
  });
  //add event listener image pop up
  cardImageEL.addEventListener('click', () => {
    handlePreviewPicture(cardData);
  });

  return cardElement;
}

//Universal open and close modal function
function openModal(modal) {
  modal.classList.add('modal_opened');
}

function closeModal(modal) {
  modal.classList.remove('modal_opened');
}

//Function to open & close add new card form
profileAddButton.addEventListener('click', () => {
  openModal(modalCard);
});

cardCloseButton.addEventListener('click', () => {
  closeModal(modalCard);
});

//Function to close add new card with 'X' button

imageCloseButton.addEventListener('click', () => {
  closeModal(modalImage);
});

//Function to close modal with ESC button

function closeModalWithEscape(evt) {
  if (evt.key === 'Escape') {
    const openedModal = document.querySelector('.modal_opened');
    closeModal(openedModal);
  }
}

document.addEventListener('keydown', closeModalWithEscape);

//Function to close modal when clicking on overlay

modalCardOverlay.addEventListener('mousedown', () => {
  closeModal(modalCard);
});

modalImage.addEventListener('mousedown', () => {
  closeModal(modalImage);
});

// Function to add a new card based off of form
cardAddForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.target.title.value;
  const link = e.target.link.value;
  const cardView = getCardElement({
    name,
    link,
  });
  closeModal(modalCard);
  renderCard(cardView, cardListEl);

  toggleButtonState(inputElements, submitButton, options);
  cardAddForm.reset();
});

function renderCard(cardElement, container) {
  cardListEl.prepend(cardElement);
}
initialCards.forEach((cardData) => {
  const cardView = getCardElement(cardData);
  renderCard(cardView, cardListEl);
});

//retreive data from InitialCard for image & title in image modal
const handlePreviewPicture = (cardData) => {
  const modalImageEL = modalImage.querySelector('.modal__image');
  const modalTitleEL = modalImage.querySelector('.modal__image-title');
  modalImageEL.src = cardData.link;
  modalImageEL.alt = cardData.name;
  modalTitleEL.textContent = cardData.name;

  openModal(modalImage);
};
