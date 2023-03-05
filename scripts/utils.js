import {
  modalCardOverlay,
  modalImageOverlay,
  profileAddButton,
  modalCard,
  cardCloseButton,
  imageCloseButton,
  profileCloseButton,
  modalProfileOverlay,
  profileEditButton,
  fillProfileForm,
  modalProfile,
  profileEditForm,
  profileName,
  profileJob,
  inputName,
  inputDescription,
  cardAddForm,
  renderCard,
  cardListEl,
} from './index.js';

//Universal open and close modal function
export function openModal(modal) {
  modal.classList.add('modal_opened');
  openModalKeyDown();
}

function closeModal(modal) {
  modal.classList.remove('modal_opened');
  closeModalKeyDown();
}

//Function to open & close add new card form
profileAddButton.addEventListener('click', () => {
  openModal(modalCard);
});

cardCloseButton.addEventListener('click', () => {
  closeModal(modalCard);
});

//Function to close add new card with 'X' button

imageCloseButton.addEventListener('click', () => {
  closeModal(modalImage);
});

//Function to close modal with ESC button

function closeModalByEscape(evt) {
  const escapeKey = 27;
  if (evt.keyCode === escapeKey) {
    const openedModal = document.querySelector('.modal_opened');
    closeModal(openedModal);
  }
}

function openModalKeyDown() {
  document.addEventListener('keydown', closeModalByEscape);
}

function closeModalKeyDown() {
  document.removeEventListener('keydown', closeModalByEscape);
}

//Function to close modal when clicking on overlay

modalCardOverlay.addEventListener('mousedown', () => {
  closeModal(modalCard);
});

modalImageOverlay.addEventListener('mousedown', () => {
  closeModal(modalImage);
  console.log('i work');
});

//Function to close edit profile with 'X' button & clicking on overlay

profileCloseButton.addEventListener('click', () => {
  closeModal(modalProfile);
});

modalProfileOverlay.addEventListener('click', () => {
  closeModal(modalProfile);
});

//Function to open edit profile button

profileEditButton.addEventListener('click', () => {
  fillProfileForm();
  openModal(modalProfile);
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

// Function to add a new card based off of form
cardAddForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = e.target.title.value;
  const link = e.target.link.value;

  closeModal(modalCard);
  renderCard({ name, link }, cardListEl);
  cardAddForm.reset();
});
