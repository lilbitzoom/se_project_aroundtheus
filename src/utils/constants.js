export const initialCards = [
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

export const cardListEl = document.querySelector('.cards__list');
export const initialCardsLength = initialCards.length;
export const cardTemplate = document.querySelector('#card').content;

//Profile - Variable Declarations
export const profileContainer = document.querySelector('.profile__description');
export const profileTitle = profileContainer.querySelector('.profile__title');
export const modalProfile = document.querySelector('#profile-editor');

export const profileName = profileTitle.querySelector('.profile__name');
export const profileJob = profileContainer.querySelector('.profile__subheader');
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
export const cardAddButton = document.querySelector(
  '.profile__add-card-button'
);

export const inputName = profileEditForm.querySelector('#name');
export const inputDescription = profileEditForm.querySelector('#description');

//New Card - Variable Declarations

export const modalCard = document.querySelector('#new-card');
export const cardCloseButton = modalCard.querySelector(
  '#new_card_close_button'
);
export const cardSaveButton = modalCard.querySelector('.modal__save-button');
export const cardAddForm = modalCard.querySelector('.modal__form');
export const newCardSubmitButton = document.querySelector(
  '#new-card-submit-button'
);

//Overlay - Variable Declarations
export const modalCardOverlay = document.querySelector('#new-card-overlay');
export const modalImageOverlay = document.querySelector(
  '#image_pop-up-overlay'
);
export const modalProfileOverlay = document.querySelector(
  '#profile-editor-overlay'
);

export const modalImage = document.querySelector('#image_pop-up');
export const imageCloseButton = document.querySelector(
  '#image_pop-up_close_button'
);

//Image - Variable Declarations
export const cardImage = document.querySelector('.card__image');
