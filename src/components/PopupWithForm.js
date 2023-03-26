import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector('.modal__form');
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._inputList = this._popupForm.querySelectorAll('.modal__input');
    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  setEventListener() {
    this._popupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log(this._formValues);
      this._handleFormSubmit(this._formValues);
      super.setEventListener();
      this.close();
    });

    super.setEventListener();
  }
}
