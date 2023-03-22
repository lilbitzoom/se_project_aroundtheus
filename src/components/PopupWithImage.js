import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
  }

  open() {
    console.log('popwithimage');
    this._modalImage.querySelector('.modal__image').src = this._link;
    this._modalImage.querySelector('.modal__image').alt = this._name;
    this._modalImage.querySelector('.modal__image-title').textContent =
      this._name;

    super.open();
  }
}
