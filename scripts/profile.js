//Variable Declarations
const modalProfile = document.querySelector('#profile-editor');
const profileContainer = document.querySelector('.profile__description');
const profileTitle = profileContainer.querySelector('.profile__title');

const profileEditButton = profileTitle.querySelector('.profile__edit-button');
const profileEditForm = modalProfile.querySelector('.modal__form');
const profileCloseButton = modalProfile.querySelector(
  '#profile-editor_close_button'
);
const profileSaveButton = modalProfile.querySelector('.modal__save-button');
const profileName = profileTitle.querySelector('.profile__name');
const profileJob = profileContainer.querySelector('.profile__subheader');

const inputName = profileEditForm.querySelector('#name');
const inputDescription = profileEditForm.querySelector('#description');

//Function to open edit profile button

profileEditButton.addEventListener('click', () => {
  fillProfileForm();
  openModal(modalProfile);
});

//Function to close edit profile with 'X' button

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
