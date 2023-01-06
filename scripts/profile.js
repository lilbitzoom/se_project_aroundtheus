// Const & Let

const profileContainer = document.querySelector('.profile__description');
const profileTitle = profileContainer.querySelector('.profile__title');

const profileEditButton = profileTitle.querySelector('.profile__edit-button');
const modal = document.querySelector('.modal');
const profileEditForm = modal.querySelector('.modal__form');
const profileCloseButton = modal.querySelector('.modal__close-button');
const profileSaveButton = modal.querySelector('.modal__save-button');
let profileName = profileTitle.querySelector('.profile__name');
let profileJob = profileContainer.querySelector('.profile__subheader');

let inputName = profileEditForm.querySelector('.modal__input_text_name');
let inputDescription = profileEditForm.querySelector(
  '.modal__input-text_description'
);

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

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputDescription.value;
}

profileEditForm.addEventListener('submit', function (evt) {
  handleProfileFormSubmit(evt);
  removeModalOpened(modal);
});

//Form reflects profile webpage

function reflectNameDescription() {
  inputName.value = profileName.textContent;
  inputDescription.value = profileJob.textContent;
  removeModalOpened(modal);
}

reflectNameDescription();
