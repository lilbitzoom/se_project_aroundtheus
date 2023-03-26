class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    this._popupElement.classList.add('modal_opened');

    document.addEventListener(
      'keyup',
      (evt) => {
        this._handleEscClose(evt);
      },
      true
    );
  }

  close() {
    this._popupElement.classList.remove('modal_opened');

    document.removeEventListener(
      'keyup',
      (evt) => {
        this._handleEscClose(evt);
      },
      true
    );
  }

  _handleEscClose(event) {
    const escapeKey = 27;
    if (event.keyCode === escapeKey) {
      this.close();
    }
  }

  handleOverlay(event) {
    if (event.target.classList.contains('modal_opened')) {
      this.close();
    }
  }

  setEventListener() {
    this._popupElement
      .querySelector('.modal__close-button')
      .addEventListener('click', () => this.close());

    document.addEventListener('mousedown', (event) =>
      this.handleOverlay(event)
    );
  }
}

export default Popup;
