class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add('modal_opened');

    document.addEventListener('keyup', (evt) => {
      this._handleEscClose(evt);
    });
  }

  close() {
    if (this._popupElement === null) {
    } else {
      this._popupElement.classList.remove('modal_opened');

      document.removeEventListener('keyup', (evt) => {
        this._handleEscClose(evt);
      });
    }
  }

  _handleEscClose = (event) => {
    const escapeKey = 27;
    if (event.keyCode === escapeKey) {
      this.close();
      console.log('I work');
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
