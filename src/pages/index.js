import FormValidator from '../components/FormValidator.js';
import Popup from '../components/Popup.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
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
  cardImage,
} from '../utils/constants.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';

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

const profileEditorPopup = new Popup({ popupSelector: '#profile-editor' });
const newCardPopup = new Popup({ popupSelector: '#new-card' });
const imagePopup = new Popup({ popupSelector: '#image_pop-up' });
const userInfo = new UserInfo({ name: '#name', description: '#description' });
const newCardFormValidator = new FormValidator({ popupSelector: '#new-card' });
const ImagePopup = new PopupWithImage('#image_pop-up');

//Renders card on page
const renderedCardItems = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, '#card', (name, link) => {
        ImagePopup.open(name, link);
      });

      renderedCardItems.addItem(card.getView());
    },
  },
  cardListEl
);

renderedCardItems.renderItems();
/*
initialCards.forEach((items) => {
  section.renderer(cardInfo, cardListEl);
});
*/
//Function to open different modals
cardAddButton.addEventListener('click', () => {
  newCardPopup.open(modalCard);
  newCardFormValidator.resetValidation(modalCard);
  console.log('formvalidator');
});

profileEditButton.addEventListener('click', () => {
  userInfo.getUserInfo();
  profileEditorPopup.open(modalProfile);
});
/*
cardImage.addEventListener('click', () => {
  cardInfo.handleCardClick();
  imagePopup.open(modalImage);
});
*/
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

profileEditForm.addEventListener('submit', () => {
  userInfo.setUserInfo();
  profileEditorPopup.close(modalProfile);
});

// Function to add a new card based off of form
cardAddForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.target.title.value;
  const link = e.target.link.value;

  newCardPopup.close(modalCard);

  const sectionObject = {
    items: [name, link],
    renderer: (item) => {
      const card = new Card(item, '#card', (name, link) => {
        ImagePopup.open(name, link);
      });

      renderedCardItems.addItem(card.getView());
    },
  };

  const section = new Section(sectionObject, cardListEl);
  section.renderItems(sectionObject, cardListEl);
  cardAddForm.reset();
  addFormValidator.disableSubmitButton(
    newCardSubmitButton,
    validationSettings.inactiveButtonClass
  );
});
