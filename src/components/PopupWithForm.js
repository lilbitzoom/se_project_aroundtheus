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
      this._formValues[input.textContent] = input.value;
    });

    return this._formValues;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = this._formValues[input.textContent];
    });
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  setEventListener() {
    this._popupForm.addEventListener('submit', (evt) => {
      evt.preventDefault();

      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
      this.close();
    });
  }
}
