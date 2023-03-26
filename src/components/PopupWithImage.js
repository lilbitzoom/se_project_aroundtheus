import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._image = this._popupElement.querySelector('.modal__image');
    this._title = this._popupElement.querySelector('.modal__image-title');
  }

  open(name, link) {
    this._image.src = link;
    this._image.alt = name;
    this._title.textContent = name;
    super.open();
  }

  close() {
    super.close();
  }

  handleOverlay() {
    super.handleOverlay(event);
  }

  setEventListener() {
    this._popupElement
      .querySelector('.modal__image-close-button')
      .addEventListener('click', () => this.close());

    document.addEventListener('mousedown', (event) =>
      this.handleOverlay(event)
    );
  }
}
