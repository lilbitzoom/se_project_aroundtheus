import FormValidator from '../components/FormValidator.js';
import Popup from '../components/Popup.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import './index.css';

import {
  cardAddButton,
  profileEditForm,
  profileEditButton,
  cardAddForm,
  modalCard,
  cardListEl,
  initialCards,
  validationSettings,
  profileName,
  profileJob,
} from '../utils/constants.js';

import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

// New Class Inserts
const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);

editFormValidator.enableValidation();

const addFormValidator = new FormValidator(validationSettings, cardAddForm);

addFormValidator.enableValidation();

//Calling UserInfo for profile editor
const userInfo = new UserInfo({
  name: '.profile__name',
  description: '.profile__subheader',
});

//Profile Editor Popup

//Image Popup
const cardImagePopup = new PopupWithImage({ popupSelector: '#image_pop-up' });
cardImagePopup.setEventListener();

//Takes info from initialCards and creates cards
const createCard = (item) => {
  const card = new Card(item, '#card', (title, link) => {
    cardImagePopup.open(title, link);
  });

  return card.getView();
};

//Renders card on page
const renderedCardItems = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      renderedCardItems.addItem(createCard(data));
    },
  },

  cardListEl
);

renderedCardItems.renderItems();

//Open Popup for edit and new card button
cardAddButton.addEventListener('click', () => {
  newCardPopup.open();
});

//Profile Editor
profileEditButton.addEventListener('click', () => {
  profileEditorPopup.setInputValues(userInfo.getUserInfo());
  profileEditorPopup.open();
});

const profileEditorPopup = new PopupWithForm({
  popupSelector: '#profile-editor',
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
  },
});

//Profile Editor Close
profileEditorPopup.setEventListener();

//New Card Popup
const newCardPopup = new PopupWithForm({
  popupSelector: '#new-card',
  handleFormSubmit: (data) => {
    renderedCardItems.addItem(createCard(data));
    addFormValidator.disableSubmitButton();
  },
});

//New Card Close
newCardPopup.setEventListener();
