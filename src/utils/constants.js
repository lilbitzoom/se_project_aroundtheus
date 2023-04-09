export const validationSettings = {
  formSelector: '.modal__form',
  inputSelector: '.modal__input',
  submitButtonSelector: '.modal__submit-button',
  inactiveButtonClass: 'modal__submit-button_inactive',
  inputErrorClass: 'modal__input-error',
  errorClass: 'modal__error_visible',
};

//Variable Declarations

export const cardListEl = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('#card').content;

//Profile - Variable Declarations
const profileContainer = document.querySelector('.profile__description');
const profileTitle = profileContainer.querySelector('.profile__title');
const modalProfile = document.querySelector('#profile-editor');
export const profilePicture = document.querySelector('#profile-picture');

export const profileName = profileTitle.querySelector('.profile__name');
export const profileJob = profileContainer.querySelector('.profile__subheader');
export const profileEditButton = profileTitle.querySelector(
  '.profile__edit-button'
);
export const profileEditForm = modalProfile.querySelector('.modal__form');
const profileCloseButton = modalProfile.querySelector(
  '#profile-editor_close_button'
);
const profileSaveButton = modalProfile.querySelector('.modal__save-button');
export const cardAddButton = document.querySelector(
  '.profile__add-card-button'
);

const inputName = profileEditForm.querySelector('#name');
const inputDescription = profileEditForm.querySelector('#description');

//New Card - Variable Declarations

const modalCard = document.querySelector('#new-card');
const cardCloseButton = modalCard.querySelector('#new_card_close_button');
const cardSaveButton = modalCard.querySelector('.modal__save-button');
export const cardAddForm = modalCard.querySelector('.modal__form');
const newCardSubmitButton = document.querySelector('#new-card-submit-button');

//Overlay - Variable Declarations
const modalCardOverlay = document.querySelector('#new-card-overlay');
const modalImageOverlay = document.querySelector('#image_pop-up-overlay');

const modalImage = document.querySelector('#image_pop-up');
const imageCloseButton = document.querySelector('#image_pop-up_close_button');

//Image - Variable Declarations
const cardImage = document.querySelector('.card__image');

//Edit Profile Picture Declarations
const modalProfilePicture = document.querySelector('#change-profile-picture');
export const changeProfilePicture =
  modalProfilePicture.querySelector('.modal__form');
export const profilePictureEditButton = document.querySelector(
  '.profile__picture-edit'
);
