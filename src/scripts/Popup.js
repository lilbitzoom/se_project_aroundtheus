class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open = () => {
    this._popupElement.classList.add('modal_opened');

    this._popupElement.addEventListener('keydown', this._handleEscClose);
  };

  close = () => {
    if (this._popupElement === null) {
    } else {
      this._popupElement.classList.remove('modal_opened');
      document.removeEventListener('keydown', this._handleEscClose);
    }
  };

  _handleEscClose = (evt) => {
    const escapeKey = 27;
    if (evt.keyCode === escapeKey) {
      this.close();
    }
  };

  handleOverlay = (evt) => {
    if (evt.target.classList.contains('modal_opened')) {
      this.close();
    }
  };

  setEventListener() {
    this._popupElement
      .querySelector('modal__close-button')
      .addEventListener('click', () => {
        this.close(modalCard);
      });

    this._popupElement
      .querySelector('.overlay')
      .addEventListener('click', () => {
        this.close(modalCard);
      });
  }
}

export default Popup;
