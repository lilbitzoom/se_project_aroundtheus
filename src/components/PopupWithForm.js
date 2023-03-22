import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector('.modal__form');
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._inputList = this._element.querySelectorAll('.form__input');

    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      // here you insert the `value` by the `name` of the input
      input.value = data[input.name];
    });
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  setEventListener() {
    this.handleFormSubmit.addEventListener('submit', (evt) => {
      this._getInputValues();
    });
  }
}
