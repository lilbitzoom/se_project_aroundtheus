//Universal open and close modal function

export function openModal(modal) {
  modal.classList.add('modal_opened');

  addEscapeListener();
}

export function closeModal(modal) {
  modal.classList.remove('modal_opened');

  removeEscapeListener();
}

export default { openModal, closeModal };
