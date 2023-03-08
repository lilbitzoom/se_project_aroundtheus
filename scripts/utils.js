//Universal open and close modal function
export function openModal(modal) {
  modal.classList.add('modal_opened');
  addEscapeListener();
}

export function closeModal(modal) {
  modal.classList.remove('modal_opened');
  removeEscapeListener();
}

//Function to close modal with ESC button

function closeModalByEscape(evt) {
  const escapeKey = 27;
  if (evt.keyCode === escapeKey) {
    const openedModal = document.querySelector('.modal_opened');
    closeModal(openedModal);
  }
}

function addEscapeListener() {
  document.addEventListener('keydown', closeModalByEscape);
}

function removeEscapeListener() {
  document.removeEventListener('keydown', closeModalByEscape);
}

export default { openModal, closeModal };
