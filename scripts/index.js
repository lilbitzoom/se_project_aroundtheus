import FormValidator from './FormValidator.js';

export const validationSettings = {
  formSelector: '.modal__form',
  inputSelector: '.modal__input',
  submitButtonSelector: '.modal__submit-button',
  inactiveButtonClass: 'modal__submit-button_inactive',
  inputErrorClass: 'modal__input-error',
  errorClass: 'modal__error_visible',
};

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

export const modalCardOverlay = document.querySelector('#new-card-overlay');
export const modalImageOverlay = document.querySelector(
  '#image_pop-up-overlay'
);

export const cardListEl = document.querySelector('.cards__list');
const initialCardsLength = initialCards.length;
const cardTemplate = document.querySelector('#card').content;

export const profileAddButton = document.querySelector('.profile__add-button');
export const modalCard = document.querySelector('#new-card');
export const cardCloseButton = modalCard.querySelector(
  '#new_card_close_button'
);
export const cardSaveButton = modalCard.querySelector('.modal__save-button');
export const cardAddForm = modalCard.querySelector('.modal__form');
const modalImage = document.querySelector('#image_pop-up');
export const newCardSubmitButton = document.querySelector(
  '#new-card-submit-button'
);
export const imageCloseButton = document.querySelector(
  '#image_pop-up_close_button'
);
export const modalProfile = document.querySelector('#profile-editor');
const profileContainer = document.querySelector('.profile__description');
const profileTitle = profileContainer.querySelector('.profile__title');

export const profileEditButton = profileTitle.querySelector(
  '.profile__edit-button'
);
export const profileEditForm = modalProfile.querySelector('.modal__form');
export const profileCloseButton = modalProfile.querySelector(
  '#profile-editor_close_button'
);
export const profileSaveButton = modalProfile.querySelector(
  '.modal__save-button'
);
export const profileName = profileTitle.querySelector('.profile__name');
export const profileJob = profileContainer.querySelector('.profile__subheader');

export const inputName = profileEditForm.querySelector('#name');
export const inputDescription = profileEditForm.querySelector('#description');

export const modalProfileOverlay = document.querySelector(
  '#profile-editor-overlay'
);

const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);

editFormValidator.enableValidation();

const addFormValidator = new FormValidator(validationSettings, cardAddForm);

addFormValidator.enableValidation();

//Function to present cards based off of initialCards array
export function getCardElement(cardData) {
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

export function renderCard(data, cardListEl) {
  cardListEl.prepend(getCardElement(data));
}

initialCards.forEach((cardData) => {
  const cardView = getCardElement(cardData);
  renderCard(cardData, cardListEl);
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

//Form reflects profile webpage

export function fillProfileForm() {
  inputName.value = profileName.textContent;
  inputDescription.value = profileJob.textContent;
}
