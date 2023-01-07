//Variable Declarations

const profileContainer = document.querySelector('.profile__description');
const profileTitle = profileContainer.querySelector('.profile__title');

const profileEditButton = profileTitle.querySelector('.profile__edit-button');
const modal = document.querySelector('.modal');
const profileEditForm = modal.querySelector('.modal__form');
const profileCloseButton = modal.querySelector('.modal__close-button');
const profileSaveButton = modal.querySelector('.modal__save-button');
const profileName = profileTitle.querySelector('.profile__name');
const profileJob = profileContainer.querySelector('.profile__subheader');

const inputName = profileEditForm.querySelector('.modal__input_text_name');
const inputDescription = profileEditForm.querySelector(
  '.modal__input-text_description'
);

//Function to open edit profile button
function openModal(modal) {
  modal.classList.add('modal_opened');
}

profileEditButton.addEventListener('click', function () {
  openModal(modal);
});

//Function to close edit profile with 'X' button
function closeModal(modal) {
  modal.classList.remove('modal_opened');
}

profileCloseButton.addEventListener('click', function () {
  closeModal(modal);
});

//Function to edit the title and subheader in the profile

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputDescription.value;
}

profileEditForm.addEventListener('submit', function (evt) {
  handleProfileFormSubmit(evt);
  closeModal(modal);
});

//Form reflects profile webpage

function reflectNameDescription() {
  inputName.value = profileName.textContent;
  inputDescription.value = profileJob.textContent;
}
