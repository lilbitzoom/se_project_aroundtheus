import FormValidator from '../scripts/FormValidator.js';
import Popup from '../scripts/Popup.js';
import UserInfo from '../scripts/UserInfo.js';
import Section from '../scripts/Section.js';
import './index.css';

import {
  cardAddButton,
  cardCloseButton,
  imageCloseButton,
  modalCardOverlay,
  modalImageOverlay,
  profileCloseButton,
  modalProfileOverlay,
  profileEditForm,
  profileEditButton,
  cardAddForm,
  modalCard,
  modalImage,
  modalProfile,
  cardListEl,
  initialCards,
  newCardSubmitButton,
} from '../utils/constant.js';

export const validationSettings = {
  formSelector: '.modal__form',
  inputSelector: '.modal__input',
  submitButtonSelector: '.modal__submit-button',
  inactiveButtonClass: 'modal__submit-button_inactive',
  inputErrorClass: 'modal__input-error',
  errorClass: 'modal__error_visible',
};

// New Class Inserts
const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);

editFormValidator.enableValidation();

const addFormValidator = new FormValidator(validationSettings, cardAddForm);

addFormValidator.enableValidation();
const section = new Section();
const profileEditorPopup = new Popup({ popupSelector: '#profile-editor' });
const newCardPopup = new Popup({ popupSelector: '#new-card' });
const imagePopup = new Popup({ popupSelector: '#image_pop-up' });
const userInfo = new UserInfo({ name: '#name', description: '#description' });

//Renders card on page
initialCards.forEach((items) => {
  section.renderer(items, cardListEl);
});

//Function to open different modals
cardAddButton.addEventListener('click', () => {
  newCardPopup.open(modalCard);
});

profileEditButton.addEventListener('click', () => {
  userInfo.getUserInfo();
  profileEditorPopup.open(modalProfile);
});

//Funtions to close different modals with 'X' button
imageCloseButton.addEventListener('click', () => {
  imagePopup.close(modalImage);
});

cardCloseButton.addEventListener('click', () => {
  newCardPopup.close(modalCard);
});

profileCloseButton.addEventListener('click', () => {
  profileEditorPopup.close(modalProfile);
});

//Function to close modal when clicking on overlay

modalCardOverlay.addEventListener('mousedown', () => {
  newCardPopup.close(modalCard);
});

modalImageOverlay.addEventListener('mousedown', () => {
  imagePopup.close(modalImage);
});

modalProfileOverlay.addEventListener('click', () => {
  profileEditorPopup.close(modalProfile);
});

//Function to edit the title and subheader in the profile

profileEditForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo();
  profileEditorPopup.close(modalProfile);
});

// Function to add a new card based off of form
cardAddForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.target.title.value;
  const link = e.target.link.value;

  newCardPopup.close(modalCard);
  section.renderer({ name, link }, cardListEl);
  cardAddForm.reset();
  addFormValidator.disableSubmitButton(
    newCardSubmitButton,
    validationSettings.inactiveButtonClass
  );
});
