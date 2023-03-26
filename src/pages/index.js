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
const userInfo = new UserInfo({ name: '#name', description: '#description' });

//Profile Editor Popup
const profileEditorPopup = new PopupWithForm({
  popupSelector: '#profile-editor',
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
  },
});

//Profile Editor Close
profileEditorPopup.setEventListener();

//Image Popup
const cardImagePopup = new PopupWithImage({ popupSelector: '#image_pop-up' });
cardImagePopup.setEventListener();

//Takes info from initialCards and creates cards
const createCard = (item) => {
  const card = new Card(item, '#card', (name, link) => {
    cardImagePopup.open(name, link);
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

profileEditButton.addEventListener('click', () => {
  userInfo.getUserInfo();
  profileEditorPopup.open();
});
/*
// Function to add a new card based off of new card form
cardAddForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.target.title.value;
  const link = e.target.link.value;

  newCardPopup.close(modalCard);
  const data = { name, link };
  renderedCardItems.addItem(createCard(data));

  cardAddForm.reset();
  addFormValidator.disableSubmitButton();
});

const newCardAddForms = new PopupWithForm({
  popupSelector: newCardPopup,
  handleFormSubmit: (data) => {
    cardListEl.addItem(createCard(data));
  },
});
*/

//New Card Popup
const newCardPopup = new PopupWithForm({
  popupSelector: '#new-card',
  handleFormSubmit: (data) => {
    console.log(data);
    renderedCardItems.addItem(createCard(data));
    addFormValidator.disableSubmitButton();
  },
});

//New Card Close
newCardPopup.setEventListener();
