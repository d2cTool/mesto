import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__form");
    this._inputList = this._form.querySelectorAll(".popup__input");
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener("submit", (e) => this._submitHandler());
  }

  close() {
    super.close();
    this._form.reset();
  }

  _submitHandler() {
    this._handleFormSubmit(this._getInputValues());
    this.close();
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
}
