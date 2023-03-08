import FormValidator from './FormValidator.js';
import Card from './Card.js';
import { openModal, closeModal } from './utils.js';

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
const newCardSubmitButton = document.querySelector('#new-card-submit-button');
const imageCloseButton = document.querySelector('#image_pop-up_close_button');
const modalProfile = document.querySelector('#profile-editor');
const profileContainer = document.querySelector('.profile__description');
const profileTitle = profileContainer.querySelector('.profile__title');

const profileEditButton = profileTitle.querySelector('.profile__edit-button');
const profileEditForm = modalProfile.querySelector('.modal__form');
const profileCloseButton = modalProfile.querySelector(
  '#profile-editor_close_button'
);
const profileSaveButton = modalProfile.querySelector('.modal__save-button');
const profileName = profileTitle.querySelector('.profile__name');
const profileJob = profileContainer.querySelector('.profile__subheader');

const inputName = profileEditForm.querySelector('#name');
const inputDescription = profileEditForm.querySelector('#description');

const modalProfileOverlay = document.querySelector('#profile-editor-overlay');

const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);

editFormValidator.enableValidation();

const addFormValidator = new FormValidator(validationSettings, cardAddForm);

addFormValidator.enableValidation();

function renderCard(data, cardListEl) {
  const card = new Card(data, '#card');

  cardListEl.prepend(card.getView());
}

initialCards.forEach((data) => {
  renderCard(data, cardListEl);
});

//Form reflects profile webpage

function fillProfileForm() {
  inputName.value = profileName.textContent;
  inputDescription.value = profileJob.textContent;
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

//Function to close modal when clicking on overlay

modalCardOverlay.addEventListener('mousedown', () => {
  closeModal(modalCard);
});

modalImageOverlay.addEventListener('mousedown', () => {
  closeModal(modalImage);
  console.log('i work');
});

//Function to close edit profile with 'X' button & clicking on overlay

profileCloseButton.addEventListener('click', () => {
  closeModal(modalProfile);
});

modalProfileOverlay.addEventListener('click', () => {
  closeModal(modalProfile);
});

//Function to open edit profile button

profileEditButton.addEventListener('click', () => {
  fillProfileForm();
  openModal(modalProfile);
});

//Function to edit the title and subheader in the profile

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputDescription.value;
}

profileEditForm.addEventListener('submit', (evt) => {
  handleProfileFormSubmit(evt);
  closeModal(modalProfile);
});

// Function to add a new card based off of form
cardAddForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.target.title.value;
  const link = e.target.link.value;

  closeModal(modalCard);
  renderCard({ name, link }, cardListEl);
  cardAddForm.reset();
  disableSubmitButton(
    newCardSubmitButton,
    validationSettings.inactiveButtonClass
  );
});

function disableSubmitButton(submitButton, inactiveButtonClass) {
  submitButton.classList.add(inactiveButtonClass);
  submitButton.disabled = true;
}
