import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import './index.css';
import Api from '../components/Api.js';
import PopupWithConfrimation from '../components/PopupWithConfirmation.js';

import {
  cardAddButton,
  profileEditForm,
  profileEditButton,
  cardAddForm,
  cardListEl,
  validationSettings,
  profileJob,
  profileName,
  profilePicture,
  changeProfilePicture,
  profilePictureEditButton,
} from '../utils/constants.js';

import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';

// Popup Form Validators
const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);

editFormValidator.enableValidation();

const addFormValidator = new FormValidator(validationSettings, cardAddForm);

addFormValidator.enableValidation();

const profilePictureFormValidator = new FormValidator(
  validationSettings,
  changeProfilePicture
);

profilePictureFormValidator.enableValidation();

//API server Info

const api = new Api({
  baseUrl: 'https://around.nomoreparties.co/v1/group-12/',
  headers: {
    authorization: 'b7c085b1-2aaa-4c48-99ad-8e6ce22f5717',
    'Content-Type': 'application/json',
  },
});

//Takes info from initialCards and creates cards
const createCard = (item) => {
  const card = new Card(item, '#card', (name, link) => {
    cardImagePopup.open(name, link);
  });

  return card.getView();
};

//Renders card on page
let renderedCardItems;

api.getInitialCards().then((data) => {
  renderedCardItems = new Section(
    {
      items: data,
      renderer: (data) => {
        renderedCardItems.addItem(createCard(data));
      },
    },

    cardListEl
  );
  renderedCardItems.renderItems();
});

//Open Popup for edit and new card button
cardAddButton.addEventListener('click', () => {
  addFormValidator.disableSubmitButton();
  newCardPopup.open();
});

//New Card Popup
const newCardPopup = new PopupWithForm({
  popupSelector: '#new-card',
  handleFormSubmit: (data) => {
    renderedCardItems.addItem(createCard(data));
  },
});

//New Card Close
newCardPopup.setEventListener();

//Change Profile Picture Popup
profilePictureEditButton.addEventListener('click', () => {
  changeProfilePicturePopup.open();
});

const changeProfilePicturePopup = new PopupWithForm({
  popupSelector: '#change-profile-picture',
  handleFormSubmit: (data) => {
    api.updateProfilePicture(data);
  },
});
// Change Profile Picture Close
changeProfilePicturePopup.setEventListener();

//Image Popup
const cardImagePopup = new PopupWithImage({ popupSelector: '#image_pop-up' });
cardImagePopup.setEventListener();

//User Info from Server and putting into the HTML

api.getUserInfo().then((data) => {
  profileName.textContent = data.name;
  profileJob.textContent = data.about;
  profilePicture.src = data.avatar;
});

//Calling UserInfo for profile editor(HTML)
const userInfo = new UserInfo({
  name: '.profile__name',
  description: '.profile__subheader',
});

//Profile Editor
profileEditButton.addEventListener('click', () => {
  profileEditorPopup.setInputValues(userInfo.getUserInfo());
  profileEditorPopup.open();
});
//**  THIS STILL ISN'T WORKING PROPERLY TO CHANGE WHEN THE SUBMIT BUTTON IS CLICKED
const profileEditorPopup = new PopupWithForm({
  popupSelector: '#profile-editor',
  handleFormSubmit: ({ name, about }) => {
    api.updateProfileInfo({
      name: profileName.textContent,
      about: profileJob.textContent,
    });
  },
});

//Profile Editor Close
profileEditorPopup.setEventListener();
