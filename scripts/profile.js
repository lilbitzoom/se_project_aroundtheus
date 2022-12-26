// Constant

const profileContainer = document.querySelector('.profile__description');
const profileTitle = profileContainer.querySelector('.profile__title');
var profileName = profileTitle.querySelector('.profile__name');
var profileSubheader = profileContainer.querySelector('.profile__subheader');
const profileEditButton = profileTitle.querySelector('.profile__edit-button');
const modal = document.querySelector('.modal');
const profileCloseButton = modal.querySelector('.modal__close-button');
const profileSaveButton = modal.querySelector('.modal__save-button');

//Open edit profile
function addModalOpened(modal) {
  modal.classList.add('modal_opened');
}

profileEditButton.addEventListener('click', function () {
  addModalOpened(modal);
});

//Close edit profile
function removeModalOpened(modal) {
  modal.classList.remove('modal_opened');
}

profileCloseButton.addEventListener('click', function () {
  removeModalOpened(modal);
});

//Edit profile title & subheader
let title = modal.querySelector('.modal__input_text_title');
let description = modal.querySelector('.modal__input_text_description');
const modalContainer = modal.querySelector('.modal__container');

profileName.insertAdjacentText('beforeend', '${title.value}');
profileSubheader.insertAdjacentText('beforeend', '${description.value}');

//Submit profile edits

profileSaveButton.addEventListener('submit', function () {
  removeModalOpened(modal);
});
