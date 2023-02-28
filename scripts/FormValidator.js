class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;

    this._form = formElement;
  }

  _showInputError(inputElement, errorMessage) {
    const errorMessageElement = formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorMessageElement.textContent = errorMessage;
    errorMessageElement.classList.add(this._errorClass);
  }

  _hideInputError() {
    errorMessageElement.classList.add(this._inputErrorClass);
    errorMessageElement.textContent = this._inputElement.validationMessage;
    errorMessageElement.classList.remove(this._errorClass);
  }

  _toggleButtonState() {
    if (hasInvalidInput(inputElements)) {
      disableSubmitButton(submitButton, inactiveButtonClass);
      return;
    }
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;
  }

  _hasInvalidInput(inputList) {
    return !inputList.every((inputElement) => inputElement.validity.valid);
  }

  _checkInputValidity(formElement, inputElement, options) {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, options);
    } else {
      hideInputError(formElement, inputElement, options);
    }
  }

  _setEventListeners() {
    const inputElements = [...this._form.querySelectorAll(inputSelector)];
    const submitButton = this._form.querySelector(submitButtonSelector);
    disableSubmitButton(submitButton, this._form.inactiveButtonClass);
    inputElements.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        _checkInputValidity(this._form, inputElement, settings);
        _toggleButtonState(inputElements, submitButton, settings);
      });
    });
  }

  enableValidation() {
    this._form.forEach((formElement) => {
      _setEventListeners(formElement, options);
    });
  }
}

export default FormValidator;
