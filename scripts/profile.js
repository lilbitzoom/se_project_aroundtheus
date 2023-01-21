//Variable Declarations

const profileContainer = document.querySelector('.profile__description');
const profileTitle = profileContainer.querySelector('.profile__title');

const profileEditButton = profileTitle.querySelector('.profile__edit-button');
const modalProfile = document.querySelector('.modal__profile-editor');
const profileEditForm = modalProfile.querySelector('.modal__form');
const profileCloseButton = modalProfile.querySelector('.modal__close-button');
const profileSaveButton = modalProfile.querySelector('.modal__save-button');
const profileName = profileTitle.querySelector('.profile__name');
const profileJob = profileContainer.querySelector('.profile__subheader');

const inputName = profileEditForm.querySelector('.modal__input_text_name');
const inputDescription = profileEditForm.querySelector(
  '.modal__input-text_description'
);

//Function to open edit profile button
function openModalProfile(modalProfile) {
  modalProfile.classList.add('modal_opened');
}

profileEditButton.addEventListener('click', () => {
  fillProfileForm();
  openModalProfile(modalProfile);
});

//Function to close edit profile with 'X' button
function closeModal(modalProfile) {
  modalProfile.classList.remove('modal_opened');
}

profileCloseButton.addEventListener('click', () => {
  closeModal(modalProfile);
});

//Function to edit the title and subheader in the profile

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputDescription.value;
}

profileEditForm.addEventListener('submit', (evt) => {
  handleProfileFormSubmit(evt);
  closeModal(modalProfile);
});

//Form reflects profile webpage

function fillProfileForm() {
  inputName.value = profileName.textContent;
  inputDescription.value = profileJob.textContent;
}
