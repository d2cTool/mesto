export default class FormValidator {
  constructor({
    formSelector,
    inputSelector,
    submitButtonSelector,
    inactiveButtonClass,
    inputErrorClass,
    errorClass,
  }) {
    this._form = document.querySelector(formSelector);
    this._input = inputSelector;
    this._submitButton = submitButtonSelector;
    this._inactiveButtonClass = inactiveButtonClass;
    this._inputErrorClass = inputErrorClass;
    this._errorClass = errorClass;
    this._inputList = Array.from(this._form.querySelectorAll(this._input));
    this._buttonElement = this._form.querySelector(this._submitButton);
    
  }

  enableValidation() {
    this._setEventListeners(this._form);
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) =>
      this._hideInputError(inputElement)
    );
  }

  _setEventListeners() {
    this._toggleButtonState();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', '');
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
}
